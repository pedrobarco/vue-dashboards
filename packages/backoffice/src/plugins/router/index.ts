import Vue from "vue";
import VueRouter from "vue-router";
import { Guards } from "./router.guards";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    beforeEnter: Guards.redirectHome,
    component: () => import(/* webpackChunkName: "login" */ "@/views/Login.vue")
  },
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "appLayout" */ "@/layouts/AppLayout.vue"),
    beforeEnter: Guards.requireAuth,
    children: [
      {
        path: "dashboard",
        alias: "",
        name: "Dashboard",
        component: () =>
          import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue")
      }
    ]
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
