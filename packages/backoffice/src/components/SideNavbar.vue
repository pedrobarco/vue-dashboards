<template>
  <nav
    data-cy="side-navbar"
    class="bg-white flex flex-col border-r-2 border-gray-200 w-16 lg:w-48"
  >
    <div class="mt-8 flex flex-col items-center justify-center">
      <img class="h-10 lg:h-16" src="/img/logo-mini.svg" alt="Lintifor" />
      <div class="hidden lg:block mt-2 text-2xl font-semibold">
        <span class="text-primary-600 capitalize">Lit</span>
        <span class="text-secondary-600 lowercase">infor</span>
      </div>
    </div>
    <div class="flex flex-col mt-32 lg:mt-24">
      <router-link
        class="flex items-center justify-center lg:justify-start py-3 px-6 mb-4 text-gray-700 border-r-4 border-white hover:bg-gray-200 side-navbar-link"
        active-class="text-primary-600 bg-gray-200 border-primary-500"
        v-for="route in appRoutes"
        :key="route.name"
        :to="route.path"
        :data-cy="`side-${route.path}-link`"
      >
        <div v-html="route.metadata.icon" class="side-navbar-link--icon" />
        <span class="hidden lg:block capitalize ml-4 font-medium">{{
          route.name
        }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { appRoutes } from "@/plugins/router";

@Component
export default class SideNavbar extends Vue {
  appRoutes = appRoutes;
}
</script>

<style lang="postcss">
.side-navbar-link:hover:not(.router-link-exact-active) {
  @apply border-gray-200 text-primary-600;
}

.side-navbar-link--icon > svg {
  @apply h-5 w-5 text-gray-600 opacity-50;
}

.side-navbar-link.router-link-exact-active > .side-navbar-link--icon > svg,
.side-navbar-link:hover > .side-navbar-link--icon > svg {
  @apply text-primary-600 opacity-100;
}
</style>
