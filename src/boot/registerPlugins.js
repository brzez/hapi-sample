// @flow
import glob from '../util/glob';

export default async function registerControllers (server) {
  const plugins = await glob(`${__dirname}/../plugins/{**/index.js,*.js}`);

  for (const plugin of plugins) {
    const required = require(plugin).default;
    await required(server)
  }
}
