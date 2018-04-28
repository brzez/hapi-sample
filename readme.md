# hapi example

includes
- .env file loading  
  with `NODE_ENV` postfix ex. `.env.production`
- jest / supertest setup for functional testing
- flow type checks
- mongoose / mongodb connection
- inmemory mongo for testing
- example CRUD w/ JOI validation
- swagger
- nodemon
- babel

usage
- `npm run serve` for development
- `npm run test` runs tests
- `npm run flow` runs flow

`.env.example` is the template env file.
setup it as `.env.development/production/test` to configure server
