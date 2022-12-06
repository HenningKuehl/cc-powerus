import { Injectable } from '@nestjs/common';
import { FlightsRepository } from '../repositories/flights.repository';
import { Flight } from '../interfaces/flight.interface';
import { FlightSlice } from '../interfaces/flight-slice.interface';

@Injectable()
export class FlightsService {
  constructor(private readonly flightsRepo: FlightsRepository) {}

  async getAllFlights(): Promise<Flight[]> {
    const sources = await Promise.all([
      this.flightsRepo.getFlightsBySource('source1'),
      this.flightsRepo.getFlightsBySource('source2'),
    ]);

    const flights: Flight[] = sources.flat();

    const flightMap = new Map<string, Flight>();
    flights.forEach((flight) => {
      const id: Pick<
        FlightSlice,
        'flight_number' | 'departure_date_time_utc' | 'arrival_date_time_utc'
      >[] = flight.slices.map((s) => ({
        flight_number: s.flight_number,
        departure_date_time_utc: s.departure_date_time_utc,
        arrival_date_time_utc: s.arrival_date_time_utc,
      }));
      flightMap.set(JSON.stringify(id), flight);
    });

    return Array.from(flightMap.values());
  }
}
