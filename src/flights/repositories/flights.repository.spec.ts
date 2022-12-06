import { Test, TestingModule } from '@nestjs/testing';
import { FlightsRepository } from './flights.repository';

describe('Flights', () => {
  let provider: FlightsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlightsRepository],
    }).compile();

    provider = module.get<FlightsRepository>(FlightsRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
