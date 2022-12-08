import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { IFlight } from '../interfaces/flight.interface';
import { IFlightResponse } from '../interfaces/flight-response.interface';
import { catchError, firstValueFrom, map, of, retry, tap } from 'rxjs';
import { Cache } from 'cache-manager';
import { FirebaseLogger } from '../../shared/logger/firebase.logger';

const SERVER_BASE_URL = 'https://coding-challenge.powerus.de/flight';

/**
 * The flights repository handles all data related stuff regarding flights,
 * like fetching flights from external sources.
 */
@Injectable()
export class FlightsRepository {
  constructor(
    private readonly http: HttpService,
    @Inject(CACHE_MANAGER) private readonly cache: Cache,
    private readonly logger: FirebaseLogger,
  ) {}

  /**
   * Get flights from cache
   * or fetch from the external source.
   * @param sourceId The id from the external source.
   * @param force If true the flights are not coming from the cache.
   */
  async getFlightsBySource(
    sourceId: string,
    force = false,
  ): Promise<IFlight[]> {
    const cacheKey = `flights_${sourceId}`;

    if (!force) {
      // Look for existing flights in the cache
      const cachedFlights = await this.cache.get<IFlight[]>(cacheKey);
      if (cachedFlights) {
        this.logger.log(`return cached flights for source: ${sourceId}`);
        return cachedFlights;
      }
    }

    // fetch flights from external source
    return await firstValueFrom(
      this.http
        .get<IFlightResponse>(`${SERVER_BASE_URL}/${sourceId}`, {
          timeout: 3000,
        })
        .pipe(
          map((resp) => resp.data.flights),
          tap((flights) => {
            // Cached data are valid for one hour
            this.cache.set(cacheKey, flights, 60 * 60 * 1000);
          }),
          catchError((e) => {
            this.logger.error(
              `Error while fetching flights from source: ${sourceId}`,
              e,
            );
            return of([]);
          }),
          retry(3),
        ),
    );
  }
}
