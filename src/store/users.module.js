import { usersService } from "../services/users.service";

export const users = {
  namespaced: true,
  state: {
    user: {},
    subscriptions: {}
  },
  actions: {
    getUser({ commit }, { username }) {
      commit("getUserRequest");

      usersService.getUser(username).then(
        user => commit("getUserSuccess", user),
        error => commit("getUserFailure", error)
      );
    },
    getSubscriptions({ commit }, { username }) {
      usersService
        .getSubscriptions(username)
        .then(subscriptions =>
          commit("getSubscriptionsSuccess", subscriptions)
        );
    }
  },
  mutations: {
    getUserRequest(state) {
      state.user = { loading: true };
    },
    getUserSuccess(state, user) {
      state.user = { ...user };
    },
    getUserFailure(state, error) {
      state.user = { error };
    },
    getSubscriptionsSuccess(state, subscriptions) {
      state.subscriptions = { items: subscriptions };
    }
  }
};
