// @flow
import {Example} from "../../models/Example";

export default {
  async show(request: any, h: any) {
    return await Example.findById(request.params.id);
  },
  async list(request: any, h: any) {
    return await Example.find();
  },
  async create(request: any, h: any) {
    return await new Example(request.payload).save();
  },
  async update(request: any, h: any) {
    const {id} = request.params;
    const entity = await Example.findById(id);
    if (!entity) {
      return h.response().code(404);
    }
    return await Example.findByIdAndUpdate(id, request.payload, {new: true});
  },
  async delete(request: any, h: any) {
    const {id} = request.params;

    const entity = await Example.findById(id);
    if (!entity) {
      return h.response().code(404);
    }
    await Example.findByIdAndRemove(id);
    return h.response().code(204);
  },
};
