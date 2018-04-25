// @flow
require('babel-core/register');
require('babel-polyfill');

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

const boot = require('./boot').default;

boot();
