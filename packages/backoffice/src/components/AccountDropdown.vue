<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      class="flex items-center focus:outline-none"
    >
      <div
        class="h-10 w-10 ml-6 rounded-full overflow-hidden border-2 border-gray-200 focus:outline-none"
      >
        <img
          class="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
          alt
        />
      </div>
      <div class="flex flex-col text-gray-800 text-left ml-2">
        <span class="font-medium">Jack Finnigan</span>
        <span class="text-sm text-gray-700 opacity-50 -mt-1">Super Admin</span>
      </div>
      <span class="ml-2">
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
      </span>
    </button>
    <div
      v-if="isDropdownOpen"
      class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl"
    >
      <router-link
        @click.native="toggleDropdown"
        class="block px-4 py-2 text-gray-800 hover:bg-primary-500 hover:text-white"
        v-for="route in userRoutes"
        :key="route.name"
        :to="route.path"
      >
        {{ route.name }}
      </router-link>
      <hr />
      <a
        @click="logout"
        class="block cursor-pointer px-4 py-2 text-gray-800 hover:bg-primary-500 hover:text-white"
      >
        Sign out
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { userRoutes } from "@/plugins/router";

@Component
export default class AccountDropdown extends Vue {
  userRoutes = userRoutes;
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    this.$store.dispatch("logout");
    this.$router.push("/login");
  }
}
</script>
