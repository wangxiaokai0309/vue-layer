import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerMicroApps, start } from "qiankun";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

registerMicroApps([
  {
    name: "appHome",
    entry: "//localhost:3001",
    container: "#appContainer",
    activeRule: "/app-home",
  },
  {
    name: "appAbout",
    entry: "//localhost:3001",
    container: "#appContainer",
    activeRule: "/app-about",
  },
]);
// 启动 qiankun
start();
