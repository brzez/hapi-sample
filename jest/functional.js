// @flow
import boot from '../src/boot';

beforeEach(async (done) => {
  global.app = await boot();
  done();
});

afterEach(async (done) => {
  await global.app.stop();
  done();
});
