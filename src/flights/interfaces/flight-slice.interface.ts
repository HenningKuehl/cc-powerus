export interface FlightSlice {
  origin_name: string;
  destination_name: string;

  /**
   * date string
   */
  departure_date_time_utc: string;

  /**
   * date string
   */
  arrival_date_time_utc: string;

  flight_number: string;

  /**
   * Duration of the flight in minutes.
   */
  duration: number;
}
