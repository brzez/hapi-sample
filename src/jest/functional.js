// @flow
import _request from 'supertest';
import boot from '../boot';

beforeEach(async (done) => {
  global.app = await boot();
  done();
});

afterEach(async (done) => {
  await global.app.stop();
  done();
});


export function request () {
  return _request(global.app.listener);
}
