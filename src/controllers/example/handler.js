// @flow
import {Example} from "../../models/Example";

export default {
  async show(request, h) {
    return await Example.findById(request.params.id);
  },
  async list(request, h) {
    return await Example.find();
  },
  async create(request, h) {
    return await new Example(request.payload).save();
  },
  async update(request, h) {
    const {id} = request.params;
    const entity = await Example.findById(id);
    if (!entity) {
      return h.response().code(404);
    }
    return await Example.findByIdAndUpdate(id, request.payload, {new: true});
  },
  async delete(request, h) {
    const entity = await Example.findById(request.params.id);
    if (!entity) {
      return h.response().code(404);
    }
    await Example.findByIdAndRemove(id);
    return h.response().code(204);
  },
};
