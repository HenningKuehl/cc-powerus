import { IFlightSlice } from '../interfaces/flight-slice.interface';

export type FlightSliceIdentifier = Pick<
  IFlightSlice,
  'flight_number' | 'departure_date_time_utc' | 'arrival_date_time_utc'
>;

export class FlightSlice implements IFlightSlice {
  constructor(slice: IFlightSlice) {
    this.origin_name = slice.origin_name;
    this.destination_name = slice.destination_name;
    this.departure_date_time_utc = slice.departure_date_time_utc;
    this.arrival_date_time_utc = slice.arrival_date_time_utc;
    this.flight_number = slice.flight_number;
    this.duration = slice.duration;
  }

  origin_name: string;
  destination_name: string;
  departure_date_time_utc: string;
  arrival_date_time_utc: string;
  flight_number: string;
  duration: number;

  get id(): FlightSliceIdentifier {
    return {
      flight_number: this.flight_number,
      departure_date_time_utc: this.departure_date_time_utc,
      arrival_date_time_utc: this.arrival_date_time_utc,
    };
  }
}
