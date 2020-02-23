import { Module } from "vuex";
import { RootState } from "@/store/modules/root";
import { AccountState } from "./account.state";
import { AccountGetters } from "./account.getters";
import { AccountMutations } from "./account.mutations";
import { AccountActions } from "./account.actions";

const state: AccountState = {
  token: null
};

export const AccountModule: Module<AccountState, RootState> = {
  namespaced: true,
  state,
  getters: AccountGetters,
  actions: AccountActions,
  mutations: AccountMutations
};
