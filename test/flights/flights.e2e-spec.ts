import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { setupTestFirebase } from '../firebase/init-firebase';
import { HttpService } from '@nestjs/axios';
import { of, throwError } from 'rxjs';
import {
  MOCK_AXIOS_RESPONSE_SUCCESS_SOURCE1,
  MOCK_AXIOS_RESPONSE_SUCCESS_SOURCE2,
} from '../mocks/flights-request.mock';
import {
  MOCK_FLIGHTS_SOURCE1,
  MOCK_FLIGHTS_UNIQUE,
} from '../mocks/flights.mock';

describe('FlightsController (e2e)', () => {
  let app: INestApplication;
  let httpService: HttpService;

  beforeAll(() => {
    setupTestFirebase();
  });

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    httpService = moduleFixture.get<HttpService>(HttpService);
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('GET - /flights', () => {
    it('should return 404 and an empty array, if the requests throw an error', async () => {
      expect.assertions(1);

      jest
        .spyOn(httpService, 'get')
        .mockImplementation(() => throwError(() => new Error('')));

      const response = await request(app.getHttpServer())
        .get('/flights')
        .expect(404);

      expect(response.body).toStrictEqual({
        data: [],
        statusCode: 404,
        message: 'No flights found',
        success: false,
      });
    });

    it('should return 200 and a the results from source1', async () => {
      expect.assertions(1);

      jest.spyOn(httpService, 'get').mockImplementation((url) => {
        if (url.endsWith('source1')) {
          return of(MOCK_AXIOS_RESPONSE_SUCCESS_SOURCE1);
        }

        return throwError(() => new Error());
      });

      const response = await request(app.getHttpServer())
        .get('/flights')
        .expect(200);

      expect(response.body).toStrictEqual({
        data: MOCK_FLIGHTS_SOURCE1.flights,
        statusCode: 200,
        message: 'Ok',
        success: true,
      });
    });

    it('should return 200 and an array of unique flights', async () => {
      expect.assertions(1);

      jest.spyOn(httpService, 'get').mockImplementation((url) => {
        if (url.endsWith('source1')) {
          return of(MOCK_AXIOS_RESPONSE_SUCCESS_SOURCE1);
        }

        if (url.endsWith('source2')) {
          return of(MOCK_AXIOS_RESPONSE_SUCCESS_SOURCE2);
        }

        return throwError(() => new Error());
      });

      const response = await request(app.getHttpServer())
        .get('/flights')
        .expect(200);

      expect(response.body).toStrictEqual({
        data: MOCK_FLIGHTS_UNIQUE,
        statusCode: 200,
        message: 'Ok',
        success: true,
      });
    });
  });
});
