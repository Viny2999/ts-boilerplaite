import * as httpStatus from 'http-status';
import request from 'supertest';
import { App } from '../../app';

describe('HealthCheck Controller', () => {
  it('Should response 200 if Health Check Route is OK', done => {
    request(App)
      .get('/v1/health')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(httpStatus.OK, done);
  });
});
