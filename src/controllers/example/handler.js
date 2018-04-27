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
    const {id} = request.params;
    const entity = await Example.findById(id);
    if (!entity) {
      return h.response().code(404);
    }
    return await Example.findByIdAndUpdate(id, request.payload, {new: true});
  },
  delete: async (request, h) => {
    const {id} = request.params;
    const entity = await Example.findById(id);
    if (!entity) {
      return h.response().code(404);
    }
    await Example.findByIdAndRemove(id);
    return h.response().code(204);
  },
};
