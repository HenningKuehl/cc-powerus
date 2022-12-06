import { Controller, Get, HttpStatus } from '@nestjs/common';
import { FlightsService } from '../services/flights.service';
import { ApiResponse } from '../../shared/interfaces/api-response.interface';
import { IFlight } from '../interfaces/flight.interface';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Get()
  async getAll(): Promise<ApiResponse<IFlight[] | null>> {
    try {
      const flights = await this.flightsService.getAllFlights();
      // TODO: use interceptor for this
      return {
        success: true,
        statusCode: HttpStatus.OK,
        data: flights,
        message: 'Ok',
      };
    } catch (e) {
      // TODO: use interceptor for this
      console.error('Error while getting all flights', e);
      return {
        data: null,
        message: 'Internal server error',
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        success: false,
      };
    }
  }
}
