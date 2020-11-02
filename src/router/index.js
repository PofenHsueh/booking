import Vue from "vue";
import VueRouter from "vue-router";
import MainLayout from "../layout/MainLayout";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainLayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "Home" */ "../views/Home.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
