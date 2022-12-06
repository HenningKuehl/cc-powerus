import { Controller, Get, HttpStatus } from "@nestjs/common";
import { FlightsService } from '../services/flights.service';
import { ApiResponse } from "../../shared/interfaces/api-response.interface";
import { Flight } from "../interfaces/flight.interface";

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Get()
  async getAll(): Promise<ApiResponse<Flight[] | null>> {
    try {
      const flights = await this.flightsService.getAllFlights();
      return {
        success: true,
        statusCode: HttpStatus.OK,
        data: flights,
        message: 'Ok',
      };
    } catch (e) {
      console.error('Error while getting all flights', e);
      return {
        data: null,
        message: 'Internal server error',
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        success: false,
      }
    }
  }
}
