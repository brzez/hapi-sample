// @flow
import './boot';
import hapi from 'hapi';
import glob from './util/glob';
import './util/dotenv';

const server = hapi.server({
  port: process.env.PORT,
  host: process.env.HOST
});

const init = async () => {
  const controllers = await glob(`${__dirname}/controllers/{**/index.js,*.js}`);

  for (const controller of controllers) {
    const required = require(controller).default;
    await required(server)
  }

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});


init();
