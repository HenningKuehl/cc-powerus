import { FlightSlice } from "./flight-slice.interface";

export interface Flight {
  slices: FlightSlice[];
  price: number;
}