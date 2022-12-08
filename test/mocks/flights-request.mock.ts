import { AxiosResponse } from 'axios';
import { MOCK_FLIGHTS_SOURCE1, MOCK_FLIGHTS_SOURCE2 } from './flights.mock';

export const MOCK_AXIOS_RESPONSE_SUCCESS_SOURCE1: AxiosResponse = {
  data: MOCK_FLIGHTS_SOURCE1,
  config: {},
  headers: {},
  status: 200,
  statusText: 'Ok',
};

export const MOCK_AXIOS_RESPONSE_SUCCESS_SOURCE2: AxiosResponse = {
  data: MOCK_FLIGHTS_SOURCE2,
  config: {},
  headers: {},
  status: 200,
  statusText: 'Ok',
};
