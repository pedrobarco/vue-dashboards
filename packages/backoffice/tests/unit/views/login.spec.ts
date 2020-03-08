import { shallowMount } from "@vue/test-utils";
import Login from "@/views/Login.vue";

describe("login page", () => {
  function initWrapper() {
    return shallowMount(Login, {
      mocks: {
        $t: (msg: string) => msg
      }
    });
  }
  it("is a Vue instance", () => {
    expect.assertions(1);
    const wrapper = initWrapper();
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
