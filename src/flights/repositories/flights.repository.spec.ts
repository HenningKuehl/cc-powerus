import { Test, TestingModule } from '@nestjs/testing';
import { FlightsRepository } from './flights.repository';

describe('FlightsRepository', () => {
  let repo: FlightsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlightsRepository],
    }).compile();

    repo = module.get<FlightsRepository>(FlightsRepository);
  });

  it('should be defined', () => {
    expect(repo).toBeDefined();
  });

  describe('getFlightsBySource', () => {
    it('should return flights and set the cache');

    it('should return flights and set cache after up to 3 retries');

    it('should return cached flights');

    it(
      'should return an empty array if the request still throws an error after 3 retries',
    );

    it('should return an empty array if the request takes too long');
  });
});
