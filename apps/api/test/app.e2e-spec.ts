jest.setTimeout(30000);

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { execSync } from 'child_process';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeAll(async () => {
    // Reset the test database
    execSync('npx prisma db push', { stdio: 'inherit' });

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should create 3 counters', async () => {
    for (let i = 1; i <= 3; i++) {
      const res = await request(app.getHttpServer())
        .post('/counters')
        .send({ number: i });
      expect(res.status).toBe(201);
    }
  });

  it('should create 3 services', async () => {
    for (let i = 1; i <= 3; i++) {
      const res = await request(app.getHttpServer())
        .post('/services')
        .send({ name: `Service ${i}`, avgServiceTime: 10 * i });
      expect(res.status).toBe(201);
    }
  });

  it('should assign services 1, 2, 3 to counter 1', async () => {
    for (let serviceId = 1; serviceId <= 3; serviceId++) {
      const res = await request(app.getHttpServer())
        .post(`/counters/1/services/${serviceId}`)
        .send();
      expect(res.status).toBe(201);
    }
  });

  it('should create a ticket for service 1', async () => {
    const res = await request(app.getHttpServer())
      .post('/tickets')
      .send({ serviceId: 1 });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id'); // or whatever fields your ticket returns
  });

  it('should get the next ticket for counter 1', async () => {
    const res = await request(app.getHttpServer()).get(
      '/counters/1/next-ticket',
    );
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('serviceId', 1);
  });
});
