<template>
  <div class="relative">
    <button
      v-on-clickaway="closeDropdown"
      @click="toggleDropdown"
      class="flex items-center focus:outline-none"
      data-cy="account-dropdown"
    >
      <div
        class="h-8 w-8 md:h-10 md:w-10 ml-6 rounded-full overflow-hidden border-2 border-gray-200"
      >
        <img
          class="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
          alt
        />
      </div>
      <div class="hidden md:flex flex-col text-gray-800 text-left ml-2">
        <span class="font-medium">Jack Finnigan</span>
        <span class="text-sm text-gray-700 opacity-50 -mt-1">Super Admin</span>
      </div>
      <div class="md:ml-2">
        <svg
          class="h-4 w-4 text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </button>
    <div
      v-show="isDropdownOpen"
      class="absolute right-0 mt-2 py-3 w-48 bg-white rounded-md shadow"
      data-cy="account-dropdown--dropdown"
    >
      <div class="md:hidden flex flex-col text-gray-800 text-left ml-6 mb-4">
        <span class="font-medium">Jack Finnigan</span>
        <span class="text-sm text-gray-700 opacity-50 -mt-1">Super Admin</span>
      </div>
      <hr class="block md:hidden text-gray-200 mx-8 mb-2" />
      <div class="flex flex-col">
        <router-link
          class="group flex items-center py-3 px-6 border-r-4 border-white hover:bg-gray-200 hover:border-gray-200"
          active-class="bg-gray-200 border-primary-500 hover:border-primary-500"
          v-for="route in accountRoutes"
          :key="route.name"
          :to="route.path"
          :data-cy="`${route.path}-link`"
        >
          <div class="h-5 w-5">
            <component
              class="h-5 w-5 text-gray-600 group-hover:text-primary-500 group-hover:opacity-100"
              :class="[
                $route.name === route.name
                  ? ['opacity-100', 'text-primary-500']
                  : ['opacity-50', 'text-gray-600']
              ]"
              :is="`${route.name}-icon`"
            />
          </div>
          <span
            class="capitalize ml-4 group-hover:text-primary-600"
            :class="[
              $route.name === route.name
                ? ['text-primary-600']
                : ['text-gray-700']
            ]"
            >{{ route.name }}</span
          >
        </router-link>
        <a
          @click="logout"
          class="cursor-pointer group flex items-center py-3 px-6 border-r-4 border-white hover:bg-gray-200 hover:border-gray-200"
          data-cy="logout-link"
        >
          <div class="h-5 w-5">
            <component
              class="h-5 w-5 text-gray-600 opacity-50 text-gray-600 group-hover:text-primary-500 group-hover:opacity-100"
              :is="`logout-icon`"
            />
          </div>
          <span
            class="capitalize ml-4 text-gray-700 group-hover:text-primary-600"
            >Log out</span
          >
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { mixin as clickaway } from "vue-clickaway";
import { Vue, Component } from "vue-property-decorator";
import { accountRoutes } from "@/plugins/router";
import ProfileIcon from "@/assets/img/icons/profile-icon.svg";
import SettingsIcon from "@/assets/img/icons/settings-icon.svg";
import LogoutIcon from "@/assets/img/icons/logout-icon.svg";

@Component({
  mixins: [clickaway],
  components: {
    ProfileIcon,
    SettingsIcon,
    LogoutIcon
  }
})
export default class AccountDropdown extends Vue {
  accountRoutes = accountRoutes;
  isDropdownOpen = false;

  openDropdown() {
    this.isDropdownOpen = true;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    this.$store.dispatch("account/logout");
    this.$router.push("/login");
  }
}
</script>
