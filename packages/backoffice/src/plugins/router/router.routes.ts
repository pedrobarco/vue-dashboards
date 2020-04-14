export const appRoutes = [
  {
    path: "dashboard",
    name: "dashboard",
    metadata: {
      icon: "pie-chart"
    },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue")
  },
  {
    path: "sales",
    name: "sales",
    metadata: {
      icon: "shopping-bag"
    },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue")
  },
  {
    path: "products",
    name: "products",
    metadata: {
      icon: "package"
    },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue")
  },
  {
    path: "clients",
    name: "clients",
    metadata: {
      icon: "users"
    },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue")
  }
];

export const accountRoutes = [
  {
    path: "profile",
    name: "profile",
    metadata: {
      icon: "user"
    },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue")
  },
  {
    path: "settings",
    name: "settings",
    metadata: {
      icon: "settings"
    },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue")
  }
];
