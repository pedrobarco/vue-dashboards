import { ActionTree } from "vuex";
import { AccountState } from "./account.state";
import { RootState } from "../root";
import { env } from "@/plugins/env";

export const AccountActions: ActionTree<AccountState, RootState> = {
  login({ commit }, payload) {
    const { email, password } = payload;
    let token = null;
    if (
      env.node.isDevelopment &&
      email === env.app.admin.email &&
      password === env.app.admin.password
    ) {
      token = env.app.admin.token;
    } else {
      //TODO: call the API service /auth endpoint
    }

    if (token) {
      commit("setToken", token);
    } else {
      throw new Error("Invalid user credentials.");
    }
  }
};
