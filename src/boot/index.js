// @flow
import hapi from 'hapi';
import registerPlugins from '../plugins'

import './dotenv';
import registerControllers from './registerControllers';

export default async function boot () {
  const server = hapi.server({
    port: process.env.PORT,
    host: process.env.HOST
  });

  await registerPlugins(server);
  await registerControllers(server);

  await server.start();
  return server;
}

