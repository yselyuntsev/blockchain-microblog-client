import router from "../router";
import { authService } from "../services/auth.service";
import { usersService } from "../services/users.service";

function getInitialState() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user
    ? { status: { loggedIn: true }, user }
    : { status: {}, user: null };
}

export const auth = {
  namespaced: true,
  state: getInitialState(),
  actions: {
    login({ commit }, { username, password }) {
      authService.login(username, password).then(user => {
        commit("loginSuccess", user);
        router.push("/");
      });
    },
    register({ commit }, { username, password, name, description }) {
      authService.register(username, password, name, description).then(user => {
        commit("registerSuccess", user);
        router.push("/");
      });
    },
    logout({ commit }) {
      authService.logout();
      commit("logout");
    },
    setSubscription({ commit }, { type, username, subscription }) {
      usersService
        .setSubscription(type, username, subscription)
        .then(() => commit(type, subscription));
    }
  },
  mutations: {
    loginSuccess(state, user) {
      state.status = { loggedIn: true };
      state.user = user;
    },
    registerSuccess(state, user) {
      state.status = { loggedIn: true };
      state.user = user;
    },
    logout(state) {
      state.status = {};
      state.user = null;
    },
    subscribe(state, subscription) {
      console.log(34);
      state.user.subscriptions.push(subscription);
    },
    unsubscribe(state, subscription) {
      state.user.subscriptions = state.user.subscriptions.filter(
        s => s !== subscription
      );
    }
  }
};
