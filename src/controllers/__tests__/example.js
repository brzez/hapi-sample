// @flow
import {request} from "../../jest/functional";

describe('example', () => {
  test('list', async () => {
    const response = await request().get('/example/');
    expect(response.status).toEqual(200);
  });
  test('show', async () => {
    const response = await request().get('/example/1');
    expect(response.status).toEqual(200);
  });
  test('create', async () => {
    const response = await request().post('/example/').send({});
    expect(response.status).toEqual(200);
  });
  test('update', async () => {
    const response = await request().patch('/example/1').send({});
    expect(response.status).toEqual(200);
  });
  test('delete', async () => {
    const response = await request().delete('/example/1');
    expect(response.status).toEqual(200);
  });
});
