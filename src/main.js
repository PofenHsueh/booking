import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { createStore } from "./store";

const store = createStore();
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  // console.log(to.path,from.path)
  store.dispatch("setIsLoading", true);
  next();
});
router.afterEach(() => {
  setTimeout(function() {
    store.dispatch("setIsLoading", false);
    // console.log(store.state.loading.isloading)
  }, 2000);
});

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
