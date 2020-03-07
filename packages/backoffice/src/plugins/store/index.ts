import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { AccountModule } from "./modules/account";
import { RootState } from "./modules/root";
import { Locales } from "@/plugins/i18n/locales";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    locale: Locales.PT
  },
  modules: {
    account: AccountModule
  }
};

export default new Vuex.Store<RootState>(store);
