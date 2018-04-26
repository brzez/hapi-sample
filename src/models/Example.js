// @flow
import mongoose from 'mongoose'

export default example = mongoose.model('Example', {
  name: String,
  content: String,
});
