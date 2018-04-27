// @flow
import mongoose from 'mongoose'

export const Example = mongoose.model('Example', {
  name: String,
  content: String,
});
