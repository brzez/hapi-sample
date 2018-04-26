// @flow
import Joi from 'joi'

export const ExampleSchema = Joi.object().keys({
  name: Joi.string(),
  content: Joi.string(),
});
