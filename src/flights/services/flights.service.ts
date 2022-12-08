import { Injectable } from '@nestjs/common';
import { FlightsRepository } from '../repositories/flights.repository';
import { Flight } from '../models/flight';

const SOURCE_IDS = ['source1', 'source2'];

/**
 * The flights service handles all business logic which is related to flights.
 */
@Injectable()
export class FlightsService {
  constructor(private readonly flightsRepo: FlightsRepository) {}

  /**
   * Returns a list of unique flights from all external sources.
   */
  async getAllFlights(): Promise<Flight[]> {
    // TODO: think about using forkJoin instead of promise.all
    // fetch all flight sources
    const sources = await Promise.all(
      SOURCE_IDS.map((id) => this.flightsRepo.getFlightsBySource(id)),
    );

    // merge sources and convert to flight class
    const flights: Flight[] = sources.flat().map((f) => new Flight(f));

    // remove duplicates by storing flights in a map
    const flightMap = new Map<string, Flight>(flights.map((f) => [f.key, f]));

    // return map as an array
    return Array.from(flightMap.values());
  }
}
