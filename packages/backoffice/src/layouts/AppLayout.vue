<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Side Navbar -->
    <nav class="bg-white h-full flex flex-col border-r-2 border-gray-200">
      <div class="mt-8 ">
        <img class="h-10 mx-auto" src="/img/logo-mini.svg" alt="Lintifor" />
      </div>
      <div class="flex flex-col mt-32">
        <router-link
          class="sidebar-desktop-link"
          active-class="sidebar-desktop-link-active"
          v-for="route in appRoutes"
          :key="route.name"
          :to="route.path"
        >
          <div
            v-html="route.metadata.icon"
            class="ml-4 mr-6 sidebar-link--icon"
          />
        </router-link>
      </div>
    </nav>
    <!-- TopNav -->
    <div class="flex-1 flex flex-col">
      <div class="flex items-center justify-end my-8 px-8">
        <button class="block focus:outline-none">
          <div class="relative">
            <svg
              class="text-gray-800 h-6 w-6"
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
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            <div class="absolute right-0 top-0">
              <svg
                class="fill-current h-2 w-2 text-secondary-500 mr-1"
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
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
          </div>
        </button>
        <AccountDropdown />
      </div>
      <div class="ml-12 mt-8 md:mt-0">
        <h1 class="text-3xl font-medium">
          {{ $route.name }}
        </h1>
      </div>
      <!-- Content -->
      <div class="h-full mx-12 my-8 border-dotted border-4">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { appRoutes } from "@/plugins/router";
import AccountDropdown from "@/components/AccountDropdown.vue";

@Component({
  components: {
    AccountDropdown
  }
})
export default class AppLayout extends Vue {
  appRoutes = appRoutes;
}
</script>

<style lang="postcss">
.sidebar-desktop-link {
  @apply flex items-center px-2 py-4 mb-4 font-medium text-gray-700 border-l-4 border-white;
}

.sidebar-desktop-link-active {
  @apply text-primary-600 border-primary-500;
}

.sidebar-mobile-link {
  @apply block px-4 py-2 ml-4;
}

.sidebar-mobile-link-active {
  @apply text-primary-600 bg-primary-100 border-primary-500 border-t-4;
}

.sidebar-link--icon > svg {
  @apply text-gray-600 opacity-50 mx-auto;
}

.router-link-exact-active > .sidebar-link--icon > svg {
  @apply text-primary-600 opacity-100;
}

.sidebar-desktop-link:hover > .sidebar-link--icon > svg {
  @apply text-primary-600 opacity-100;
}
</style>
