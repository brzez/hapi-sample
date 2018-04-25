// @flow
import dotenv from 'dotenv';

const path = `${__dirname}/../../.env`;

const result = dotenv.config({path});

if (result.error) {
  throw result.error;
}
