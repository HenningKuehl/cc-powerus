import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { IFlight } from '../interfaces/flight.interface';
import { FlightResponse } from '../interfaces/flight-response.interface';
import { catchError, firstValueFrom, map, of, retry, tap } from 'rxjs';
import { Cache } from 'cache-manager';

const SERVER_BASE_URL = 'https://coding-challenge.powerus.de/flight';

@Injectable()
export class FlightsRepository {
  constructor(
    private readonly http: HttpService,
    @Inject(CACHE_MANAGER) private readonly cache: Cache,
  ) {}

  async getFlightsBySource(sourceId: string): Promise<IFlight[]> {
    const cacheKey = `flights_${sourceId}`;
    const cachedFlights = await this.cache.get<IFlight[]>(cacheKey);
    if (cachedFlights) {
      console.log('return cached flights');
      return cachedFlights;
    }

    return await firstValueFrom(
      this.http
        .get<FlightResponse>(`${SERVER_BASE_URL}/${sourceId}`, {
          timeout: 3000,
        })
        .pipe(
          map((resp) => resp.data.flights),
          tap((flights) => {
            // Cached data are valid for one hour
            this.cache.set(cacheKey, flights, 60 * 60 * 1000);
          }),
          catchError((e) => {
            // TODO: think about adding firebase functions logger
            console.error('Error while fetching flights from source1', e);
            return of([]);
          }),
          retry(3),
        ),
    );
  }
}
