import { Controller, Get, HttpStatus, NotFoundException } from '@nestjs/common';
import { FlightsService } from '../services/flights.service';
import { IApiResponse } from '../../shared/interfaces/api-response.interface';
import { IFlight } from '../interfaces/flight.interface';
import { FirebaseLogger } from '../../shared/logger/firebase.logger';

/**
 * The flights controller handles all routes regarding flights.
 */
@Controller('flights')
export class FlightsController {
  constructor(
    private readonly flightsService: FlightsService,
    private readonly logger: FirebaseLogger,
  ) {}

  /**
   * Route to get all flights.
   */
  @Get()
  async getAll(): Promise<IFlight[]> {
    const flights = await this.flightsService.getAllFlights();

    if (flights.length) {
      return flights;
    }

    this.logger.warn('No flights found');
    throw new NotFoundException('No flights found');
  }
}
