<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Side Navbar -->
    <nav
      class="bg-white h-full flex flex-col justify-between border-r-2 border-gray-200"
    >
      <div class="mt-8 ">
        <img class="h-10 mx-auto" src="/img/logo-mini.svg" alt="Lintifor" />
      </div>
      <div class="flex flex-col">
        <router-link
          class="sidebar-desktop-link"
          active-class="sidebar-desktop-link-active"
          v-for="route in allRoutes"
          :key="route.name"
          :to="route.path"
        >
          <div
            v-html="route.metadata.icon"
            class="ml-4 mr-6 sidebar-link--icon"
          />
        </router-link>
      </div>
      <button @click="logout" class="sidebar-desktop-link focus:outline-none">
        <div class="ml-4 mr-6 sidebar-link--icon">
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
      </button>
    </nav>
    <!-- TopNav -->
    <div class="flex-1 flex flex-col">
      <div class="hidden md:flex items-center justify-end my-8 px-8">
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
        <div class="ml-12 flex flex-col text-gray-800 text-right">
          <span class="font-medium">Peter Boat</span>
          <span class="text-sm text-gray-700 opacity-50 -mt-1"
            >Super Admin</span
          >
        </div>
        <div
          class="h-8 w-8 md:h-10 md:w-10 ml-4 rounded-full overflow-hidden border-2 border-gray-200 focus:outline-none"
        >
          <img
            class="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
            alt=""
          />
        </div>
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
import { appRoutes, userRoutes } from "@/plugins/router";

@Component
export default class AppLayout extends Vue {
  allRoutes = [...appRoutes, ...userRoutes];

  logout() {
    this.$store.dispatch("logout");
    this.$router.push("/login");
  }
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
