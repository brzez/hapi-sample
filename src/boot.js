// @flow
import hapi from 'hapi';
import registerPlugins from './plugins'

import glob from './util/glob';
import './util/dotenv';

export default async function boot () {
  const server = hapi.server({
    port: process.env.PORT,
    host: process.env.HOST
  });

  await registerPlugins(server);

  const controllers = await glob(`${__dirname}/controllers/{**/index.js,*.js}`);

  for (const controller of controllers) {
    const required = require(controller).default;
    await required(server)
  }

  await server.start();
  return server;
}

