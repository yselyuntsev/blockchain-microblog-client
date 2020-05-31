import { postsService } from "../services/posts.service";

export const posts = {
  namespaced: true,
  state: {
    posts: {
      start: 0,
      items: [],
      hasNext: true
    },
    post: {}
  },
  actions: {
    createPost({ commit }, { username, data, image, link, tags }) {
      postsService
        .createPost(username, data, image, link, tags)
        .then(post => commit("createPostSuccess", post));
    },
    getPosts({ commit, state }, { type, params }) {
      if (!state.posts.hasNext) return;

      postsService
        .getPosts(type, params, state.posts.start)
        .then(posts => commit("getPostsSuccess", posts));
    },
    clearPosts({ commit }) {
      commit("clearPosts");
    }
  },
  mutations: {
    createPostSuccess(state, post) {
      state.post = post;
      state.posts.items.unshift(post);
    },
    getPostsSuccess(state, posts) {
      state.posts.items.push(...posts.items);
      state.posts.start = posts.start;
      state.posts.hasNext = posts.hasNext;
    },
    clearPosts(state) {
      state.posts = { start: 0, hasNext: true, items: [] };
    }
  }
};
