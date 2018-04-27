// @flow
import mongoose from 'mongoose';

export default function () {
  return mongoose.connect(process.env.MONGO_CONNECTION_URI);
}
