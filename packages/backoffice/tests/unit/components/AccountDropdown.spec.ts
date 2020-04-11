import { shallowMount } from "@vue/test-utils";
import Login from "@/components/AccountDropdown.vue";
import { accountRoutes } from "@/plugins/router";

function initWrapper() {
  return shallowMount(Login, {
    mocks: {
      $t: (msg: string) => msg
    }
  }) as any;
}

describe("account dropdown", () => {
  it("is a Vue instance", () => {
    expect.assertions(1);
    const wrapper = initWrapper();
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("has initial values", () => {
    expect.assertions(2);
    const wrapper = initWrapper();
    expect(wrapper.vm.accountRoutes).toBe(accountRoutes);
    expect(wrapper.vm.isDropdownOpen).toBe(false);
  });
  it("opens the dropdown", () => {
    expect.assertions(2);
    const wrapper = initWrapper();
    wrapper.setData({ isDropdownOpen: false });
    wrapper.vm.openDropdown();
    expect(wrapper.vm.isDropdownOpen).toBe(true);
    wrapper.vm.openDropdown();
    expect(wrapper.vm.isDropdownOpen).toBe(true);
  });
  it("closes the dropdown", () => {
    expect.assertions(2);
    const wrapper = initWrapper();
    wrapper.setData({ isDropdownOpen: true });
    wrapper.vm.closeDropdown();
    expect(wrapper.vm.isDropdownOpen).toBe(false);
    wrapper.vm.closeDropdown();
    expect(wrapper.vm.isDropdownOpen).toBe(false);
  });
  it("toggles the dropdown state", () => {
    expect.assertions(2);
    const wrapper = initWrapper();
    wrapper.setData({ isDropdownOpen: true });
    wrapper.vm.toggleDropdown();
    expect(wrapper.vm.isDropdownOpen).toBe(false);
    wrapper.vm.toggleDropdown();
    expect(wrapper.vm.isDropdownOpen).toBe(true);
  });
});
