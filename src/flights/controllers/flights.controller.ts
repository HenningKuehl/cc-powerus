import { Controller, Get, HttpStatus, NotFoundException } from "@nestjs/common";
import { FlightsService } from '../services/flights.service';
import { ApiResponse } from '../../shared/interfaces/api-response.interface';
import { IFlight } from '../interfaces/flight.interface';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Get()
  async getAll(): Promise<ApiResponse<IFlight[] | null>> {

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

    throw new NotFoundException({
      success: false,
      statusCode: HttpStatus.NOT_FOUND,
      data: [],
      message: 'No flights found'
    });

  }
}
