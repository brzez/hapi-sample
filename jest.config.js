module.exports = {
  // testEnvironment: 'node',
  testEnvironment: './jest/AppEnvironment.js',
  globalSetup: './jest/setup.js',
  globalTeardown: './jest/teardown.js',
  moduleNameMapper: {
    "^@auth_middleware$": "<rootDir>/src/middleware/auth"
  }
};
