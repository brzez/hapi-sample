// @flow
import "../../../jest/functional";
import request from 'supertest';

describe('example', () => {
  test('list', async () => {
    const response = await request(global.app.listener).get('/example/');
    expect(response.status).toEqual(200);
  });
  test('show', async () => {
    const response = await request(global.app.listener).get('/example/1');
    expect(response.status).toEqual(200);
  });
  test('create', async () => {
    const response = await request(global.app.listener).post('/example/').send({});
    expect(response.status).toEqual(200);
  });
  test('update', async () => {
    const response = await request(global.app.listener).patch('/example/1').send({});
    expect(response.status).toEqual(200);
  });
  test('delete', async () => {
    const response = await request(global.app.listener).delete('/example/1');
    expect(response.status).toEqual(200);
  });
});
