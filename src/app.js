import Vue from "vue";
import App from "./App.vue";
import store from "./vuex/store";
import router from "./router";
import { sync } from "vuex-router-sync";
import { MdButton, MdContent, MdTabs } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import { NavTabsCard } from "src/components";


Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);

sync(store, router);

const app = new Vue({
  router,
  store,
  ...App,
  NavTabsCard
});

export { app, router, store };
