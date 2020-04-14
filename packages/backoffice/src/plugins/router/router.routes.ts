export const appRoutes = [
  {
    path: "dashboard",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue")
  },
  {
    path: "sales",
    name: "sales",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue")
  },
  {
    path: "products",
    name: "products",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue")
  },
  {
    path: "clients",
    name: "clients",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue")
  }
];

export const accountRoutes = [
  {
    path: "profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue")
  },
  {
    path: "settings",
    name: "settings",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue")
  }
];
