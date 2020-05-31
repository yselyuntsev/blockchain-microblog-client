import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "auth" */ "../views/Auth.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue")
  },
  {
    path: "/",
    name: "feed",
    component: () => import(/* webpackChunkName: "feed" */ "../views/Feed.vue")
  },
  {
    path: "/:type",
    name: "g",
    component: () => import(/* webpackChunkName: "feed" */ "../views/Feed.vue")
  },
  {
    path: "/:type/:params",
    name: "posts",
    component: () => import(/* webpackChunkName: "feed" */ "../views/Feed.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/register"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  if (authRequired && !loggedIn) {
    return next("/login");
  }

  next();
});

export default router;
