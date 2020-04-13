<template>
  <button
    v-on-clickaway="closeDropdown"
    @click="toggleDropdown"
    class="relative focus:outline-none"
    data-cy="account-dropdown"
  >
    <div class="flex items-center">
      <div
        class="h-10 w-10 ml-6 rounded-full overflow-hidden border-2 border-gray-200"
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
      <div class="ml-2 focus:outline-none">
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
    </div>
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
          class="flex items-center py-3 px-4 text-gray-700 border-l-4 border-white hover:bg-gray-200 hover:text-primary-600 account-dropdown-link"
          active-class="text-primary-600 bg-gray-200 border-primary-500"
          v-for="route in accountRoutes"
          :key="route.name"
          :to="route.path"
          :data-cy="`${route.path}-link`"
        >
          <div
            v-html="route.metadata.icon"
            class="account-dropdown-link--icon"
          />
          <span class="capitalize ml-4">{{ route.name }}</span>
        </router-link>
        <a
          @click="logout"
          class="cursor-pointer flex items-center py-3 px-4 text-gray-700 border-l-4 border-white hover:bg-gray-200 hover:text-primary-600 account-dropdown-link"
          data-cy="logout-link"
        >
          <div class="account-dropdown-link--icon">
            <svg
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
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </div>
          <span class="ml-4">Log out</span>
        </a>
      </div>
    </div>
  </button>
</template>
<script lang="ts">
import { mixin as clickaway } from "vue-clickaway";
import { Vue, Component } from "vue-property-decorator";
import { accountRoutes } from "@/plugins/router";

@Component({
  mixins: [clickaway]
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

<style lang="postcss">
.account-dropdown-link:hover:not(.router-link-exact-active) {
  @apply border-gray-200;
}

.account-dropdown-link--icon > svg {
  @apply h-5 w-5 text-gray-600 opacity-50;
}

.account-dropdown-link.router-link-exact-active
  > .account-dropdown-link--icon
  > svg,
.account-dropdown-link:hover > .account-dropdown-link--icon > svg {
  @apply text-primary-600 opacity-100;
}
</style>
