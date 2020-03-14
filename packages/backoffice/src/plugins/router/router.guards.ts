import { Route, NavigationGuard } from "vue-router";
import store from "@/plugins/store";

type Next = Parameters<NavigationGuard>[2];

export class Guards {
  static requireAuth(_1: Route, _2: Route, next: Next) {
    const isAuthenticated = store.getters["account/isAuthenticated"];
    return isAuthenticated ? next() : next("/login");
  }
  static redirectHome(_1: Route, _2: Route, next: Next) {
    const isAuthenticated = store.getters["account/isAuthenticated"];
    return isAuthenticated ? next("/") : next();
  }
}
