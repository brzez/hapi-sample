// @flow
import handler from "./handler";

export default async function (server) {
  server.route({
    method: 'get',
    path: '/example/',
    handler: handler.list
  });

  server.route({
    method: 'get',
    path: '/example/{id}',
    handler: handler.show,
    config: {
      tags: ['api']
    }
  });

  server.route({
    method: 'post',
    path: '/example/',
    handler: handler.create,
    config: {
      tags: ['api']
    }
  });

  server.route({
    method: 'patch',
    path: '/example/{id}',
    handler: handler.update,
    config: {
      tags: ['api']
    }
  });

  server.route({
    method: 'delete',
    path: '/example/{id}',
    handler: handler.delete,
    config: {
      tags: ['api']
    }
  });
}
