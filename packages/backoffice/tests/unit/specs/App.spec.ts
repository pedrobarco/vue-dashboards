import { createLocalVue, shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import VueRouter from "vue-router";

describe("app", () => {
  function initWrapper() {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter();
    return shallowMount(App, {
      localVue,
      router
    });
  }

  it("is a Vue instance", () => {
    expect.assertions(1);
    const wrapper = initWrapper();
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
