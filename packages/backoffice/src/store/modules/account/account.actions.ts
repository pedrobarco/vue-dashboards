import { ActionTree } from "vuex";
import { AccountState } from "./account.state";
import { RootState } from "../root";

export const AccountActions: ActionTree<AccountState, RootState> = {
  login({ commit }) {
    //TODO: call the API service /auth endpoint
    const token = "strong-token";
    if (token) {
      commit("setToken", token);
    }
  }
};
