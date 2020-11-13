import Vue from "vue";
import VueRouter from "vue-router";
import HomeLayout from "../layout/HomeLayout";
import MainLayout from "../layout/MainLayout";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
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
    name: "Select",
    component: MainLayout,
    children: [
      {
        path: "/select",
        name: "SelectRoom",
        component: () =>
          import(/* webpackChunkName: "Select" */ "../views/SelectRoom.vue")
      }
    ]
  },
  {
    path: "/info",
    name: "Info",
    component: MainLayout,
    children: [
      {
        path: "/info",
        name: "Information",
        component: () =>
          import(/* webpackChunkName: "Info" */ "../views/Information.vue")
      },
      {
        path: "/info/reserve",
        name: "Reserve",
        component: () =>
          import(/* webpackChunkName: "Info" */ "../views/Reserve.vue")
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
