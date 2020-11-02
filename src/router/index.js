import Vue from "vue";
import VueRouter from "vue-router";
import HomeLayout from "../layout/HomeLayout";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeLayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "Home" */ "../views/Home.vue")
      }
    ]
  },
  {
    path: "/select",
    name: "SelectRoom",
    component: () =>
      import(/* webpackChunkName: "Select" */ "../views/SelectRoom.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
