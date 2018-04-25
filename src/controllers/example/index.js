// @flow
import handler from "./handler";

export default async function (server) {
  server.route({
    method: 'get',
    path: '/',
    handler: handler.list
  });

  server.route({
    method: 'get',
    path: '/{id}',
    handler: handler.show
  });

  server.route({
    method: 'post',
    path: '/',
    handler: handler.create
  });

  server.route({
    method: 'patch',
    path: '/{id}',
    handler: handler.update
  });

  server.route({
    method: 'delete',
    path: '/{id}',
    handler: handler.delete
  });
}
