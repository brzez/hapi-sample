const NodeEnvironment = require('jest-environment-node');

module.exports = class AppEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    this.global.__MONGO_URI__ = await global.__MONGOD__.getConnectionString();
    this.global.__MONGO_DB_NAME__ = global.__MONGO_DB_NAME__;

    Object.assign(this.global.process.env, {
      MONGO_CONNECTION_URI: this.global.__MONGO_URI__
    });

    await super.setup();
  }

  async teardown() {
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
};
