// @flow
import hapi from 'hapi';
import inert from 'inert';
import vision from 'vision';
import HapiSwagger from 'hapi-swagger';

import glob from './util/glob';
import './util/dotenv';

const server = hapi.server({
  port: process.env.PORT,
  host: process.env.HOST
});

const pkg = require('../package');
const swaggerOptions = {
  info: {
    title: pkg.name,
    version: pkg.version,
  }
};

export default async function boot () {
  const controllers = await glob(`${__dirname}/controllers/{**/index.js,*.js}`);

  await server.register([
    inert,
    vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    }
  ]);

  for (const controller of controllers) {
    const required = require(controller).default;
    await required(server)
  }

  await server.start();
  return server;
}

