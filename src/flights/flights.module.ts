import { CacheModule, Module } from '@nestjs/common';
import { FlightsController } from './controllers/flights.controller';
import { FlightsService } from './services/flights.service';
import { FlightsRepository } from './repositories/flights.repository';
import { HttpModule } from '@nestjs/axios';
import { LoggerModule } from '../shared/logger/logger.module';

@Module({
  imports: [HttpModule, CacheModule.register(), LoggerModule],
  controllers: [FlightsController],
  providers: [FlightsService, FlightsRepository],
})
export class FlightsModule {}
