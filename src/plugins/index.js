// @flow
import inert from 'inert';
import hapi from 'hapi';
import vision from 'vision';
import HapiSwagger from 'hapi-swagger';

export default async function plugins (server: hapi.server) {
  const pkg = require('../../package');
  const swaggerOptions = {
    info: {
      title: pkg.name,
      version: pkg.version,
    }
  };

  await server.register([
    inert,
    vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    }
  ]);
}
