import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { setupTestFirebase } from "./firebase/init-firebase";

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    setupTestFirebase();
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });


  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  describe('GET - /flights', () => {
    it('should return 404 and an empty array');

    it('should return 500');

    it('should return 200 and a list of unique flights');
  });
});
