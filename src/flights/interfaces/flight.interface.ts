import { IFlightSlice } from './flight-slice.interface';

export interface IFlight {
  slices: IFlightSlice[];
  price: number;
}
