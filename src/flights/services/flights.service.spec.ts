import { Test, TestingModule } from '@nestjs/testing';
import { FlightsService } from './flights.service';
import { FlightsRepository } from '../repositories/flights.repository';
import { IFlight } from '../interfaces/flight.interface';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/common';
import { MOCK_FLIGHTS_SOURCE1, MOCK_FLIGHTS_SOURCE2, MOCK_FLIGHTS_UNIQUE } from "../../../test/mocks/flights.mock";

describe('FlightsService', () => {
  let service: FlightsService;
  let repo: FlightsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, CacheModule.register()],
      providers: [FlightsService, FlightsRepository],
    }).compile();

    repo = module.get<FlightsRepository>(FlightsRepository);
    service = module.get<FlightsService>(FlightsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllFlights', () => {
    it('should return a unique array of flights from only one source', async () => {
      expect.assertions(2);

      jest.spyOn(repo, 'getFlightsBySource').mockImplementation((sourceId) => {
        let flights: IFlight[] = [];
        if (sourceId === 'source1') {
          flights = MOCK_FLIGHTS_SOURCE1.flights;
        }
        return new Promise((resolve) => resolve(flights));
      });

      const result = await service.getAllFlights();
      expect(result).toEqual(MOCK_FLIGHTS_SOURCE1.flights);

      expect(repo.getFlightsBySource).toBeCalledTimes(2);
    });

    it('should return a unique array of flights from multiple sources', async () => {
      expect.assertions(2);

      jest
        .spyOn(repo, 'getFlightsBySource')
        .mockImplementation(async (sourceId) => {
          let flights: IFlight[] = [];
          if (sourceId === 'source1') {
            flights = MOCK_FLIGHTS_SOURCE1.flights;
          }
          if (sourceId === 'source2') {
            flights = MOCK_FLIGHTS_SOURCE2.flights;
          }

          return flights;
        });

      const result = await service.getAllFlights();
      expect(result).toEqual(MOCK_FLIGHTS_UNIQUE);

      expect(repo.getFlightsBySource).toBeCalledTimes(2);
    });

    it('should return an empty array if all sources are failing', async () => {
      expect.assertions(2);

      jest.spyOn(repo, 'getFlightsBySource').mockImplementation(() => {
        return new Promise((resolve) => resolve([]));
      });

      const result = await service.getAllFlights();
      expect(result).toStrictEqual([]);

      expect(repo.getFlightsBySource).toBeCalledTimes(2);
    });
  });
});
