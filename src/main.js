import Vue from "vue";
import infiniteScroll from "vue-infinite-scroll";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./registerServiceWorker";
import "./registerComponents";

Vue.use(infiniteScroll);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");