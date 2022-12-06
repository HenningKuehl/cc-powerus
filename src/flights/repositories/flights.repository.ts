import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Flight } from '../interfaces/flight.interface';
import { FlightResponse } from '../interfaces/flight-response.interface';
import { catchError, firstValueFrom } from 'rxjs';

const SERVER_BASE_URL = 'https://coding-challenge.powerus.de/flight';

@Injectable()
export class FlightsRepository {
  constructor(private readonly http: HttpService) {}

  async getFlightsBySource(sourceId: string): Promise<Flight[]> {
    try {
      // TODO: play with timeout config
      const resp = await firstValueFrom(
        this.http
          .get<FlightResponse>(`${SERVER_BASE_URL}/${sourceId}`, {
            // timeout: 500,
          })
          .pipe(
            catchError((e) => {
              throw e;
            }),
          ),
      );
      return resp.data.flights;
    } catch (e) {
      // TODO: think about adding firebase functions logger
      console.error('Error while fetching flights from source1', e);
      return [];
    }
  }
}
