import { Module } from '@nestjs/common';
import { FirebaseLogger } from './firebase.logger';

@Module({
  providers: [FirebaseLogger],
  exports: [FirebaseLogger],
})
export class LoggerModule {}
