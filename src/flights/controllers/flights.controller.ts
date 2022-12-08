import { Controller, Get, HttpStatus, NotFoundException } from '@nestjs/common';
import { FlightsService } from '../services/flights.service';
import { ApiResponse } from '../../shared/interfaces/api-response.interface';
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
  async getAll(): Promise<ApiResponse<IFlight[]>> {
    const flights = await this.flightsService.getAllFlights();

    if (flights.length) {
      // TODO: use interceptor for this
      return {
        success: true,
        statusCode: HttpStatus.OK,
        data: flights,
        message: 'Ok',
      };
    }

    this.logger.warn('No flights found');
    throw new NotFoundException({
      success: false,
      statusCode: HttpStatus.NOT_FOUND,
      data: [],
      message: 'No flights found',
    });
  }
}
