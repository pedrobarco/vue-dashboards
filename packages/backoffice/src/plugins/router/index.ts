import Vue from "vue";
import VueRouter, { NavigationGuard } from "vue-router";
import { appRoutes, accountRoutes } from "./router.routes";
import { Guards } from "./router.guards";
import { env } from "@/plugins/env";

Vue.use(VueRouter);

function routerGuard(guard: NavigationGuard) {
  if (!env.node.isDevelopment) {
    return guard;
  }
}

const routes = [
  {
    path: "/login",
    name: "login",
    beforeEnter: routerGuard(Guards.redirectHome),
    component: () => import(/* webpackChunkName: "login" */ "@/views/Login.vue")
  },
  {
    path: "/",
    beforeEnter: routerGuard(Guards.requireAuth),
    children: [...appRoutes, ...accountRoutes],
    component: () =>
      import(/* webpackChunkName: "appLayout" */ "@/layouts/AppLayout.vue")
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  routes
});

export { appRoutes, accountRoutes };
export default router;
