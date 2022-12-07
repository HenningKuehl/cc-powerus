import { IFlight } from '../../src/flights/interfaces/flight.interface';

export const MOCK_FLIGHTS_SOURCE1 = {
  flights: [
    {
      slices: [
        {
          origin_name: 'Schonefeld',
          destination_name: 'Stansted',
          departure_date_time_utc: '2019-08-08T04:30:00.000Z',
          arrival_date_time_utc: '2019-08-08T06:25:00.000Z',
          flight_number: '144',
          duration: 115,
        },
        {
          origin_name: 'Stansted',
          destination_name: 'Schonefeld',
          departure_date_time_utc: '2019-08-10T05:35:00.000Z',
          arrival_date_time_utc: '2019-08-10T07:35:00.000Z',
          flight_number: '8542',
          duration: 120,
        },
      ],
      price: 129,
    },
    {
      slices: [
        {
          origin_name: 'Schonefeld',
          destination_name: 'Stansted',
          departure_date_time_utc: '2019-08-08T20:25:00.000Z',
          arrival_date_time_utc: '2019-08-08T22:25:00.000Z',
          flight_number: '8545',
          duration: 120,
        },
        {
          origin_name: 'Stansted',
          destination_name: 'Schonefeld',
          departure_date_time_utc: '2019-08-10T06:50:00.000Z',
          arrival_date_time_utc: '2019-08-10T08:40:00.000Z',
          flight_number: '145',
          duration: 110,
        },
      ],
      price: 134.81,
    },
    {
      slices: [
        {
          origin_name: 'Schonefeld',
          destination_name: 'Stansted',
          departure_date_time_utc: '2019-08-08T20:25:00.000Z',
          arrival_date_time_utc: '2019-08-08T22:25:00.000Z',
          flight_number: '8545',
          duration: 120,
        },
        {
          origin_name: 'Stansted',
          destination_name: 'Schonefeld',
          departure_date_time_utc: '2019-08-10T05:35:00.000Z',
          arrival_date_time_utc: '2019-08-10T07:35:00.000Z',
          flight_number: '8542',
          duration: 120,
        },
      ],
      price: 134.81,
    },
    {
      slices: [
        {
          origin_name: 'Schonefeld',
          destination_name: 'Stansted',
          departure_date_time_utc: '2019-08-08T16:00:00.000Z',
          arrival_date_time_utc: '2019-08-08T17:55:00.000Z',
          flight_number: '146',
          duration: 115,
        },
        {
          origin_name: 'Stansted',
          destination_name: 'Schonefeld',
          departure_date_time_utc: '2019-08-10T06:50:00.000Z',
          arrival_date_time_utc: '2019-08-10T08:40:00.000Z',
          flight_number: '145',
          duration: 110,
        },
      ],
      price: 147.9,
    },
    {
      slices: [
        {
          origin_name: 'Schonefeld',
          destination_name: 'Stansted',
          departure_date_time_utc: '2019-08-08T08:00:00.000Z',
          arrival_date_time_utc: '2019-08-08T10:00:00.000Z',
          flight_number: '8543',
          duration: 120,
        },
        {
          origin_name: 'Stansted',
          destination_name: 'Schonefeld',
          departure_date_time_utc: '2019-08-10T06:50:00.000Z',
          arrival_date_time_utc: '2019-08-10T08:40:00.000Z',
          flight_number: '145',
          duration: 110,
        },
      ],
      price: 147.9,
    },
  ],
};

export const MOCK_FLIGHTS_SOURCE2 = {
  flights: [
    {
      slices: [
        {
          origin_name: 'Schonefeld',
          destination_name: 'Stansted',
          departure_date_time_utc: '2019-08-08T16:00:00.000Z',
          arrival_date_time_utc: '2019-08-08T17:55:00.000Z',
          flight_number: '146',
          duration: 115,
        },
        {
          origin_name: 'Stansted',
          destination_name: 'Schonefeld',
          departure_date_time_utc: '2019-08-10T18:00:00.000Z',
          arrival_date_time_utc: '2019-08-10T20:00:00.000Z',
          flight_number: '8544',
          duration: 120,
        },
      ],
      price: 130.1,
    },
    {
      slices: [
        {
          origin_name: 'Schonefeld',
          destination_name: 'Stansted',
          departure_date_time_utc: '2019-08-08T20:25:00.000Z',
          arrival_date_time_utc: '2019-08-08T22:25:00.000Z',
          flight_number: '8545',
          duration: 120,
        },
        {
          origin_name: 'Stansted',
          destination_name: 'Schonefeld',
          departure_date_time_utc: '2019-08-10T06:50:00.000Z',
          arrival_date_time_utc: '2019-08-10T08:40:00.000Z',
          flight_number: '145',
          duration: 110,
        },
      ],
      price: 134.81,
    },
    {
      slices: [
        {
          origin_name: 'Schonefeld',
          destination_name: 'Stansted',
          departure_date_time_utc: '2019-08-08T08:00:00.000Z',
          arrival_date_time_utc: '2019-08-08T10:00:00.000Z',
          flight_number: '264',
          duration: 110,
        },
        {
          origin_name: 'Stansted',
          destination_name: 'Schonefeld',
          departure_date_time_utc: '2019-08-10T18:00:00.000Z',
          arrival_date_time_utc: '2019-08-10T20:00:00.000Z',
          flight_number: '265',
          duration: 100,
        },
      ],
      price: 152.36,
    },
    {
      slices: [
        {
          origin_name: 'Schonefeld',
          destination_name: 'Stansted',
          departure_date_time_utc: '2019-08-08T20:25:00.000Z',
          arrival_date_time_utc: '2019-08-08T22:25:00.000Z',
          flight_number: '1253',
          duration: 125,
        },
        {
          origin_name: 'Stansted',
          destination_name: 'Schonefeld',
          departure_date_time_utc: '2019-08-10T05:35:00.000Z',
          arrival_date_time_utc: '2019-08-10T07:35:00.000Z',
          flight_number: '1254',
          duration: 124,
        },
      ],
      price: 154.26,
    },
    {
      slices: [
        {
          origin_name: 'Schonefeld',
          destination_name: 'Stansted',
          departure_date_time_utc: '2019-08-08T16:00:00.000Z',
          arrival_date_time_utc: '2019-08-08T17:55:00.000Z',
          flight_number: '146',
          duration: 115,
        },
        {
          origin_name: 'Stansted',
          destination_name: 'Schonefeld',
          departure_date_time_utc: '2019-08-10T06:50:00.000Z',
          arrival_date_time_utc: '2019-08-10T08:40:00.000Z',
          flight_number: '145',
          duration: 110,
        },
      ],
      price: 147.9,
    },
  ],
};

export const MOCK_FLIGHTS_UNIQUE: IFlight[] = [
  {
    slices: [
      {
        origin_name: 'Schonefeld',
        destination_name: 'Stansted',
        departure_date_time_utc: '2019-08-08T04:30:00.000Z',
        arrival_date_time_utc: '2019-08-08T06:25:00.000Z',
        flight_number: '144',
        duration: 115,
      },
      {
        origin_name: 'Stansted',
        destination_name: 'Schonefeld',
        departure_date_time_utc: '2019-08-10T05:35:00.000Z',
        arrival_date_time_utc: '2019-08-10T07:35:00.000Z',
        flight_number: '8542',
        duration: 120,
      },
    ],
    price: 129,
  },
  {
    slices: [
      {
        origin_name: 'Schonefeld',
        destination_name: 'Stansted',
        departure_date_time_utc: '2019-08-08T20:25:00.000Z',
        arrival_date_time_utc: '2019-08-08T22:25:00.000Z',
        flight_number: '8545',
        duration: 120,
      },
      {
        origin_name: 'Stansted',
        destination_name: 'Schonefeld',
        departure_date_time_utc: '2019-08-10T06:50:00.000Z',
        arrival_date_time_utc: '2019-08-10T08:40:00.000Z',
        flight_number: '145',
        duration: 110,
      },
    ],
    price: 134.81,
  },
  {
    slices: [
      {
        origin_name: 'Schonefeld',
        destination_name: 'Stansted',
        departure_date_time_utc: '2019-08-08T20:25:00.000Z',
        arrival_date_time_utc: '2019-08-08T22:25:00.000Z',
        flight_number: '8545',
        duration: 120,
      },
      {
        origin_name: 'Stansted',
        destination_name: 'Schonefeld',
        departure_date_time_utc: '2019-08-10T05:35:00.000Z',
        arrival_date_time_utc: '2019-08-10T07:35:00.000Z',
        flight_number: '8542',
        duration: 120,
      },
    ],
    price: 134.81,
  },
  {
    slices: [
      {
        origin_name: 'Schonefeld',
        destination_name: 'Stansted',
        departure_date_time_utc: '2019-08-08T16:00:00.000Z',
        arrival_date_time_utc: '2019-08-08T17:55:00.000Z',
        flight_number: '146',
        duration: 115,
      },
      {
        origin_name: 'Stansted',
        destination_name: 'Schonefeld',
        departure_date_time_utc: '2019-08-10T06:50:00.000Z',
        arrival_date_time_utc: '2019-08-10T08:40:00.000Z',
        flight_number: '145',
        duration: 110,
      },
    ],
    price: 147.9,
  },
  {
    slices: [
      {
        origin_name: 'Schonefeld',
        destination_name: 'Stansted',
        departure_date_time_utc: '2019-08-08T08:00:00.000Z',
        arrival_date_time_utc: '2019-08-08T10:00:00.000Z',
        flight_number: '8543',
        duration: 120,
      },
      {
        origin_name: 'Stansted',
        destination_name: 'Schonefeld',
        departure_date_time_utc: '2019-08-10T06:50:00.000Z',
        arrival_date_time_utc: '2019-08-10T08:40:00.000Z',
        flight_number: '145',
        duration: 110,
      },
    ],
    price: 147.9,
  },
  {
    slices: [
      {
        origin_name: 'Schonefeld',
        destination_name: 'Stansted',
        departure_date_time_utc: '2019-08-08T16:00:00.000Z',
        arrival_date_time_utc: '2019-08-08T17:55:00.000Z',
        flight_number: '146',
        duration: 115,
      },
      {
        origin_name: 'Stansted',
        destination_name: 'Schonefeld',
        departure_date_time_utc: '2019-08-10T18:00:00.000Z',
        arrival_date_time_utc: '2019-08-10T20:00:00.000Z',
        flight_number: '8544',
        duration: 120,
      },
    ],
    price: 130.1,
  },
  {
    slices: [
      {
        origin_name: 'Schonefeld',
        destination_name: 'Stansted',
        departure_date_time_utc: '2019-08-08T08:00:00.000Z',
        arrival_date_time_utc: '2019-08-08T10:00:00.000Z',
        flight_number: '264',
        duration: 110,
      },
      {
        origin_name: 'Stansted',
        destination_name: 'Schonefeld',
        departure_date_time_utc: '2019-08-10T18:00:00.000Z',
        arrival_date_time_utc: '2019-08-10T20:00:00.000Z',
        flight_number: '265',
        duration: 100,
      },
    ],
    price: 152.36,
  },
  {
    slices: [
      {
        origin_name: 'Schonefeld',
        destination_name: 'Stansted',
        departure_date_time_utc: '2019-08-08T20:25:00.000Z',
        arrival_date_time_utc: '2019-08-08T22:25:00.000Z',
        flight_number: '1253',
        duration: 125,
      },
      {
        origin_name: 'Stansted',
        destination_name: 'Schonefeld',
        departure_date_time_utc: '2019-08-10T05:35:00.000Z',
        arrival_date_time_utc: '2019-08-10T07:35:00.000Z',
        flight_number: '1254',
        duration: 124,
      },
    ],
    price: 154.26,
  },
];
