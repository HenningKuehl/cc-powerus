import { Test, TestingModule } from '@nestjs/testing';
import { FlightsRepository } from './flights.repository';
import { HttpModule, HttpService } from '@nestjs/axios';
import { CACHE_MANAGER, CacheModule } from '@nestjs/common';
import { IFlight } from '../interfaces/flight.interface';
import { Cache } from 'cache-manager';
import { of, throwError } from 'rxjs';
import { AxiosResponse } from 'axios';
import { LoggerModule } from "../../shared/logger/logger.module";

const MOCK_FLIGHTS: IFlight[] = [
  {
    price: 42,
    slices: [
      {
        flight_number: '42',
        duration: 42,
        departure_date_time_utc: new Date().toJSON(),
        arrival_date_time_utc: new Date().toJSON(),
        origin_name: 'test_origin',
        destination_name: 'test_destination',
      },
    ],
  },
];

const SUCCESSFUL_AXIOS_RESPONSE: AxiosResponse = {
  data: {
    flights: MOCK_FLIGHTS,
  },
  status: 200,
  statusText: 'Ok',
  headers: {},
  config: {},
};

describe('FlightsRepository', () => {
  let repo: FlightsRepository;
  let httpService: HttpService;
  let cacheManager: Cache;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, CacheModule.register(), LoggerModule],
      providers: [FlightsRepository],
    }).compile();

    httpService = module.get<HttpService>(HttpService);
    cacheManager = module.get<Cache>(CACHE_MANAGER);
    repo = module.get<FlightsRepository>(FlightsRepository);
  });

  afterEach(() => {
    cacheManager.reset();
  });

  it('should be defined', () => {
    expect(repo).toBeDefined();
  });

  describe('getFlightsBySource', () => {
    it('should return flights and set the cache', async () => {
      expect.assertions(3);

      jest
        .spyOn(httpService, 'get')
        .mockImplementation(() => of(SUCCESSFUL_AXIOS_RESPONSE));

      const result = await repo.getFlightsBySource('test_source');
      expect(result).toStrictEqual(MOCK_FLIGHTS);
      expect(httpService.get).toBeCalledTimes(1);

      const cachedFlights = await cacheManager.get('flights_test_source');
      expect(cachedFlights).toStrictEqual(MOCK_FLIGHTS);
    });

    it('should return cached flights', async () => {
      expect.assertions(2);

      jest.spyOn(httpService, 'get');

      await cacheManager.set('flights_test_source', MOCK_FLIGHTS);

      const result = await repo.getFlightsBySource('test_source');
      expect(result).toStrictEqual(MOCK_FLIGHTS);
      expect(httpService.get).toBeCalledTimes(0);
    });

    it('should return array of flights if request throws an error', async () => {
      expect.assertions(3);

      jest
        .spyOn(httpService, 'get')
        .mockImplementation(() => throwError(() => new Error('test error')));

      const result = await repo.getFlightsBySource('test_source');
      expect(result).toStrictEqual([]);
      expect(httpService.get).toBeCalledTimes(1);

      const cachedFlights = await cacheManager.get('flights_test_source');
      expect(cachedFlights).toStrictEqual(undefined);
    });
  });
});
