# PowerUs Coding Challenge

This project was build as a coding challenge during the application process for the company [PowerUs](https://powerus.de/).
The goal was to create a REST API which merges flights from multiple sources to get a list of unique flights.

## Development

### Installation

```bash
$ yarn install
```

### Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

### Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

### Deploy
```bash
# Firebase functions
$ firebase deploy --only functions
```

## Demo
A demo is available on [https://europe-west3-cc-powerus.cloudfunctions.net/api/flights](https://europe-west3-cc-powerus.cloudfunctions.net/api/flights).

## Architecture
The Backend is created with the framework [NestJS](https://nestjs.com/).
Tests are written with [Jest](https://jestjs.io/).

### Structure
All flight routes are in an own module.
The controller access the services and the services access the repositories.

For a global API response there is an interceptor and a filter.
