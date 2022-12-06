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
    it('should return 500, if there is an unexpected error', async () => {
      expect.assertions(1);

      jest.spyOn(service, 'getAllFlights').mockImplementation(async () => {
        throw new Error('test error');
      });

      expect(await controller.getAll()).toStrictEqual({
        success: false,
        data: null,
        message: 'Internal server error',
        statusCode: 500,
      });
    });

    it('should return 404, if there are not flights found', async () => {
      expect.assertions(1);

      jest.spyOn(service, 'getAllFlights').mockImplementation(async () => []);

      expect(await controller.getAll()).toStrictEqual({
        success: false,
        data: [],
        message: 'No flights found',
        statusCode: 404,
      });
    });

    it('should return 200 and a list of flights', async () => {
      expect.assertions(1);

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
