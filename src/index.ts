import * as express from 'express';
import * as functions from 'firebase-functions';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import { FirebaseLogger } from './shared/logger/firebase.logger';
import { ApiResponseInterceptor } from './shared/interceptors/api-response.interceptor';
import { HttpExceptionFilter } from './shared/filters/http-exception.filter';

const server = express();
const firebaseLogger = new FirebaseLogger();

const createNestServer = async (expressInstance, logger) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
    {
      bufferLogs: true,
    },
  );

  app.useLogger(logger);
  app.useGlobalInterceptors(new ApiResponseInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());

  return app.init();
};

createNestServer(server, firebaseLogger)
  .then(() => firebaseLogger.log('Nest ready'))
  .catch((err) => firebaseLogger.error('Nest broken', err));

export const api = functions
  .runWith({
    timeoutSeconds: 60,
    memory: '128MB',
    minInstances: 1,
  })
  .region('europe-west3')
  .https.onRequest(server);
