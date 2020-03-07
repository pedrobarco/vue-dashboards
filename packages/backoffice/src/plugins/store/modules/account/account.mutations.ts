import { MutationTree } from "vuex";
import { AccountState } from "./account.state";

export const AccountMutations: MutationTree<AccountState> = {
  setToken(state, token) {
    state.token = token;
  }
};
