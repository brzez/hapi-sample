// @flow
import {Example} from "../../models/Example";

export default {
  show: async (request, h) => {
    return await Example.findById(request.params.id);
  },
  list: async (request, h) => {
    return await Example.find();
  },
  create: async (request, h) => {
    return await new Example(request.payload).save();
  },
  update: async (request, h) => {
    const entity = await Example.findById(request.params.id);
    return await Example.findById(request.params.id);
  },
  delete: (request, h) => 'delete',
};
