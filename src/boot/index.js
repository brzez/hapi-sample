// @flow
import hapi from 'hapi';
import registerPlugins from './registerPlugins'
import registerControllers from './registerControllers';

import './dotenv';

export default async function boot () {
  const server = hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    debug: {
      log: ['*'],
      request: ['*'],
    },
  });

  await registerPlugins(server);
  await registerControllers(server);



  server.ext('onPostHandler', (request, h) => {
    const {response: {source}} = request;

    const hasToObject = o => o && o.toObject && typeof o.toObject === 'function';
    const callToObject = o => {
      return hasToObject(o) ? o.toObject() : h.continue;
    };

    if (Array.isArray(source) && source.length && hasToObject(source[0])) {
      return source.map(callToObject)
    }

    return callToObject(source)
  });

  await server.start();
  return server;
}

