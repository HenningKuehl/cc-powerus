import { IFlight } from '../interfaces/flight.interface';
import { FlightSlice, FlightSliceIdentifier } from './flight-slice';

export type FlightIdentifier = FlightSliceIdentifier[];

export class Flight implements IFlight {
  constructor(flight: IFlight) {
    this.price = flight.price;
    this.slices = flight.slices.map((s) => new FlightSlice(s));
  }

  price: number;
  slices: FlightSlice[];

  get id(): FlightIdentifier {
    return this.slices.map((s) => s.id);
  }

  get key(): string {
    return JSON.stringify(this.id);
  }
}
