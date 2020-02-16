import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ "@/views/Login.vue")
  },
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "appLayout" */ "@/layouts/AppLayout.vue"),
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
