import { Test, TestingModule } from '@nestjs/testing';
import { FlightsController } from './flights.controller';
import { FlightsService } from '../services/flights.service';
import { FlightsRepository } from '../repositories/flights.repository';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/common';
import { Flight } from '../models/flight';

describe('FlightsController', () => {
  let controller: FlightsController;
  let service: FlightsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, CacheModule.register()],
      controllers: [FlightsController],
      providers: [FlightsService, FlightsRepository],
    }).compile();

    service = module.get<FlightsService>(FlightsService);
    controller = module.get<FlightsController>(FlightsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('GET - /flights', () => {
    it('should return 500, if there is an unexpected error');

    it('should return 404, if there are not flights found');

    it('should return 200 and a list of flights', async () => {
      const flights: Flight[] = [];
      jest
        .spyOn(service, 'getAllFlights')
        .mockImplementation(async () => flights);

      expect(await controller.getAll()).toStrictEqual({
        success: true,
        data: flights,
        message: 'Ok',
        statusCode: 200,
      });
    });
  });
});
