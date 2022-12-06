import { Module } from '@nestjs/common';
import { FlightsController } from './controllers/flights.controller';
import { FlightsService } from './services/flights.service';
import { FlightsRepository } from './repositories/flights.repository';
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  controllers: [FlightsController],
  providers: [FlightsService, FlightsRepository],
})
export class FlightsModule {}
