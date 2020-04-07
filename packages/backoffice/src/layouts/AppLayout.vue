<template>
  <div class="font-sans antialiased h-screen flex flex-col md:flex-row">
    <!-- Side Navbar -->
    <div class="bg-white flex-col w-auto hidden lg:w-64 md:flex">
      <img
        class="h-12 w-12 mx-auto mt-12 lg:h-16 lg:w-16 "
        src="/img/logo-mini.svg"
        alt="Lintifor"
      />
      <hr class="my-12 mx-8 border-gray-200" />
      <div class="flex flex-col justify-between h-full">
        <div class="flex flex-col">
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
            <span class="hidden lg:block">{{ route.name }}</span>
          </router-link>
        </div>
        <div class="flex flex-col">
          <router-link
            class="sidebar-desktop-link"
            active-class="sidebar-desktop-link-active"
            v-for="route in userRoutes"
            :key="route.name"
            :to="route.path"
          >
            <div
              v-html="route.metadata.icon"
              class="ml-4 mr-6 sidebar-link--icon"
            />
            <span class="hidden lg:block">{{ route.name }}</span>
          </router-link>
          <hr class="mb-4 mx-8 border-gray-200" />
          <button
            @click="logout"
            class="flex items-center px-2 py-4 mb-4 rounded-sm font-medium text-gray-700 hover:bg-secondary-100 hover:text-secondary-700"
          >
            <svg
              class="ml-4 mr-6"
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
            <span class="hidden lg:block">Logout</span>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile Topbar -->
    <div class="bg-white md:hidden py-3 shadow-sm">
      <div class="flex items-center justify-center">
        <img class="h-4 w-4" src="/img/logo-mini.svg" alt="Logo" />
        <h1 class="ml-2 text-xl font-semibold text-primary-600">Lintifor</h1>
      </div>
    </div>
    <!-- Content -->
    <div class="bg-gray-100 flex-1">
      <router-view />
    </div>
    <!-- Mobile Bottom Navbar -->
    <div class="bg-white md:hidden shadow-sm">
      <div class="flex items-center justify-center">
        <router-link
          class="sidebar-mobile-link"
          active-class="sidebar-mobile-link-active"
          v-for="route in appRoutes"
          :key="route.name"
          :to="route.path"
        >
          <div v-html="route.metadata.icon" class="sidebar-link--icon" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { appRoutes, userRoutes } from "@/plugins/router";

@Component
export default class AppLayout extends Vue {
  appRoutes = appRoutes;
  userRoutes = userRoutes;

  logout() {
    this.$store.dispatch("logout");
    this.$router.push("/login");
  }
}
</script>

<style lang="postcss">
.sidebar-desktop-link {
  @apply flex items-center px-2 py-4 mb-4 rounded-sm font-medium text-gray-700;
}

.sidebar-desktop-link:hover {
  @apply text-primary-600 bg-primary-100;
}

.sidebar-desktop-link-active {
  @apply text-primary-600 bg-primary-100 border-primary-500 border-r-4;
}

.sidebar-mobile-link {
  @apply py-4 px-4;
}

.sidebar-mobile-link > .sidebar-link--icon > svg {
  @apply h-5;
}

.sidebar-link--icon > svg {
  @apply text-gray-600 opacity-50;
}

.router-link-exact-active > .sidebar-link--icon > svg {
  @apply text-primary-600 opacity-100;
}

a:hover > .sidebar-link--icon > svg {
  @apply text-primary-500 opacity-100;
}
</style>
