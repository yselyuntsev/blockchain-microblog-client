import Vue from "vue";
import Vuex from "vuex";

import { auth } from "./auth.module";
import { tags } from "./tags.module";
import { posts } from "./posts.module";
import { users } from "./users.module";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    tags,
    posts,
    users
  }
});

export default store;
