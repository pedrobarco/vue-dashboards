import Vue from "vue";
import App from "@/App.vue";
import "@/registerServiceWorker";
import router from "@/plugins/router";
import store from "@/plugins/store";
import i18n from "@/plugins/i18n/index";
import "@/assets/css/main.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
