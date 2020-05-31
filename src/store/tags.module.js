import { tagsService } from "../services/tags.service";

export const tags = {
  namespaced: true,
  state: {
    tags: []
  },
  actions: {
    getTags({ commit }) {
      tagsService.getTags().then(tags => commit("getTagsSuccess", tags));
    }
  },
  mutations: {
    getTagsSuccess(state, tags) {
      console.log(tags)
      state.tags = tags;
    }
  }
};
