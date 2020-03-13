import { shallowMount } from "@vue/test-utils";
import Login from "@/views/Login.vue";

function initWrapper() {
  return shallowMount(Login, {
    mocks: {
      $t: (msg: string) => msg
    }
  }) as any;
}

describe("login page", () => {
  it("is a Vue instance", () => {
    expect.assertions(1);
    const wrapper = initWrapper();
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("has default values", () => {
    expect.assertions(2);
    const wrapper = initWrapper();
    expect(wrapper.vm.email).toBe("");
    expect(wrapper.vm.password).toBe("");
  });
  it("clears the password", () => {
    expect.assertions(3);
    const password = "password";
    const wrapper = initWrapper();
    expect(wrapper.vm.password).toBe("");
    wrapper.setData({ password });
    expect(wrapper.vm.password).toBe(password);
    (wrapper.vm as any).clearPassword();
    expect(wrapper.vm.password).toBe("");
  });
});
