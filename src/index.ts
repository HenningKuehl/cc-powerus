import * as express from 'express';
import * as functions from 'firebase-functions';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import { FirebaseLogger } from "./shared/logger/firebase.logger";

const server = express();

const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
    {
      bufferLogs: true
    }
  );

  app.useLogger(new FirebaseLogger());

  return app.init();
};

createNestServer(server)
  .then((v) => console.log('Nest ready'))
  .catch((err) => console.error('Nest broken', err));

export const api = functions
  .runWith({
    timeoutSeconds: 60,
    memory: '128MB',
    minInstances: 1,
  })
  .region('europe-west3')
  .https.onRequest(server);
