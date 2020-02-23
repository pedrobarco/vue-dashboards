import { GetterTree } from "vuex";
import { AccountState } from "./account.state";
import { RootState } from "@/store/modules/root";

export const AccountGetters: GetterTree<AccountState, RootState> = {
  isAuthenticated(state): boolean {
    const { token } = state;
    return !!token;
  }
};
