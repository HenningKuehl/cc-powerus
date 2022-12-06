import { Test, TestingModule } from '@nestjs/testing';
import { FlightsService } from './flights.service';

describe('FlightsService', () => {
  let service: FlightsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlightsService],
    }).compile();

    service = module.get<FlightsService>(FlightsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllFlights', () => {
    it('should return a unique array of flights from only one source');

    it('should return a unique array of flights from multiple sources');

    it('should return an empty array if all sources are failing');
  })
});
