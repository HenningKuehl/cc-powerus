import { Controller, Get } from '@nestjs/common';
import { FlightsService } from '../services/flights.service';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Get()
  async getAll() {
    const flights = await this.flightsService.getAllFlights();
    return {
      success: true,
      statusCode: 200,
      data: flights,
      message: 'Ok'
    };
  }
}
