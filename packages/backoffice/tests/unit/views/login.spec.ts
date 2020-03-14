import { shallowMount } from "@vue/test-utils";
import * as faker from "faker";
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
  it("has initial values", () => {
    expect.assertions(3);
    const wrapper = initWrapper();
    expect(wrapper.vm.email).toBe("");
    expect(wrapper.vm.password).toBe("");
    expect(wrapper.vm.error).toBe(false);
  });
  it("clears the password", () => {
    expect.assertions(3);
    const wrapper = initWrapper();
    const password = faker.internet.password();
    expect(wrapper.vm.password).toBe("");
    wrapper.setData({ password });
    expect(wrapper.vm.password).toBe(password);
    wrapper.vm.clearPassword();
    expect(wrapper.vm.password).toBe("");
  });
  it("validates login details", () => {
    expect.assertions(4);
    const wrapper = initWrapper();
    jest.spyOn(wrapper.vm, "clearPassword").mockImplementation();
    const password = faker.internet.password();
    const email = faker.internet.email();
    wrapper.setData({ password, email });
    expect(wrapper.vm.email).toBe(email);
    expect(wrapper.vm.password).toBe(password);
    wrapper.vm.submitLoginForm();
    expect(wrapper.vm.clearPassword).toHaveBeenCalledTimes(1);
    expect(wrapper.vm.error).toBe(true);
  });
});
