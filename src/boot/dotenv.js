// @flow
import dotenv from 'dotenv';
import path from 'path';

const dir = `${__dirname}/../../`;

let filename = '.env';

if (process.env.NODE_ENV) {
  filename = `${filename}.${process.env.NODE_ENV}`;
}

const result = dotenv.config({
  path: path.join(dir, filename)
});

if (result.error) {
  throw result.error;
}
