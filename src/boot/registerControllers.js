// @flow
import glob from '../util/glob';

export default async function registerControllers (server) {
  const controllers = await glob(`${__dirname}/../controllers/{**/index.js,*.js}`);

  for (const controller of controllers) {
    const required = require(controller).default;
    await required(server)
  }
}
