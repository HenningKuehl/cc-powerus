import { Test, TestingModule } from '@nestjs/testing';
import { FlightsController } from './flights.controller';
import { FlightsService } from '../services/flights.service';
import { FlightsRepository } from '../repositories/flights.repository';
import { HttpModule } from '@nestjs/axios';
import { CacheModule, NotFoundException } from '@nestjs/common';
import { Flight } from '../models/flight';
import { LoggerModule } from '../../shared/logger/logger.module';

describe('FlightsController', () => {
  let controller: FlightsController;
  let service: FlightsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, CacheModule.register(), LoggerModule],
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
    it('should return 404, if there are not flights found', async () => {
      expect.assertions(1);

      jest.spyOn(service, 'getAllFlights').mockImplementation(async () => []);

      await expect(controller.getAll()).rejects.toThrowError(NotFoundException);
    });

    it('should return 200 and a list of flights', async () => {
      expect.assertions(1);

      const flights: Flight[] = [
        new Flight({
          price: 42,
          slices: [
            {
              origin_name: 'test_origin',
              departure_date_time_utc: new Date().toJSON(),
              arrival_date_time_utc: new Date().toJSON(),
              flight_number: '42',
              duration: 42,
              destination_name: 'test_destination',
            },
          ],
        }),
      ];
      jest
        .spyOn(service, 'getAllFlights')
        .mockImplementation(async () => flights);

      expect(await controller.getAll()).toStrictEqual(flights);
    });
  });
});
