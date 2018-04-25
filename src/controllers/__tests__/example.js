// @flow
import "../../../jest/functional";
import request from 'supertest';

describe('folder', () => {
  test('list', async () => {
    const response = await request(global.app.listener).get('/');
    expect(response.status).toEqual(200);
  });
});
