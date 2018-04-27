// @flow
import Joi from 'joi'

export const BaseExampleSchema = Joi.object().keys({
  name: Joi.string(),
  content: Joi.string(),
});

export const ExampleSchema = BaseExampleSchema.keys({
  id: Joi.any(),
}).rename('_id', 'id');
