// @flow
import Joi from 'joi';
import handler from './handler';
import {BaseExampleSchema, ExampleSchema} from '../../schema/Example';

export default async function (server) {
  server.route({
    method: 'get',
    path: '/example/',
    handler: handler.list,
    config: {
      tags: ['api'],
      response: {
        modify: true,
        options: {
          stripUnknown: true,
        },
        status: {
          200: Joi.array().items(ExampleSchema),
        }
      }
    }
  });

  server.route({
    method: 'get',
    path: '/example/{id}',
    handler: handler.show,
    config: {
      tags: ['api'],
      validate: {
        params: {
          id: Joi.string().required()
        }
      },
      response: {
        modify: true,
        options: {
          stripUnknown: true,
        },
        status: {
          200: ExampleSchema,
        }
      }
    }
  });

  server.route({
    method: 'post',
    path: '/example/',
    handler: handler.create,
    config: {
      tags: ['api'],
      validate: {
        payload: BaseExampleSchema,
      },
      response: {
        modify: true,
        options: {
          stripUnknown: true,
        },
        status: {
          200: ExampleSchema,
        }
      }
    }
  });

  server.route({
    method: 'patch',
    path: '/example/{id}',
    handler: handler.update,
    config: {
      tags: ['api'],
      validate: {
        params: {
          id: Joi.string().required()
        },
        payload: BaseExampleSchema,
      },
      response: {
        status: {
          200: ExampleSchema,
        }
      }
    }
  });

  server.route({
    method: 'delete',
    path: '/example/{id}',
    handler: handler.delete,
    config: {
      tags: ['api'],
      validate: {
        params: {
          id: Joi.string().required()
        },
      },
    }
  });
}
