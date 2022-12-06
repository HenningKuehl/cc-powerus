import * as express from 'express';
import * as functions from 'firebase-functions';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';

const server = express();

export const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  return app.init();
};

createNestServer(server)
  .then((v) => console.log('Nest ready'))
  .catch((err) => console.error('Nest broken', err));

export const api = functions
  .runWith({
    timeoutSeconds: 60,
    memory: '128MB',
  })
  .region('europe-west3')
  .https.onRequest(server);
