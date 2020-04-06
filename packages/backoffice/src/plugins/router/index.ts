import Vue from "vue";
import VueRouter, { NavigationGuard } from "vue-router";
import { Guards } from "./router.guards";
import { env } from "@/plugins/env";

Vue.use(VueRouter);

function routerGuard(guard: NavigationGuard) {
  if (!env.node.isDevelopment) {
    return guard;
  }
}

export const appRoutes = [
  {
    path: "dashboard",
    alias: "",
    name: "Dashboard",
    metadata: {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pie-chart">
              <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
              <path d="M22 12A10 10 0 0 0 12 2v10z"/>
            </svg>`
    },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue")
  },
  {
    path: "sales",
    name: "Sales",
    metadata: {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>`
    },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue")
  },
  {
    path: "products",
    name: "Products",
    metadata: {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-box">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
              <line x1="12" y1="22.08" x2="12" y2="12"/>
            </svg>`
    },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue")
  },
  {
    path: "clients",
    name: "Clients",
    metadata: {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>`
    },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue")
  }
];

const routes = [
  {
    path: "/login",
    name: "login",
    beforeEnter: routerGuard(Guards.redirectHome),
    component: () => import(/* webpackChunkName: "login" */ "@/views/Login.vue")
  },
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "appLayout" */ "@/layouts/AppLayout.vue"),
    beforeEnter: routerGuard(Guards.requireAuth),
    children: appRoutes
  },
  {
    path: "*",
    component: () =>
      import(/* webpackChunkName: "notFound" */ "@/views/NotFound.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
