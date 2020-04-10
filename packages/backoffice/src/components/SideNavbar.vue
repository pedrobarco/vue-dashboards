<template>
  <nav class="bg-white flex flex-col border-r-2 border-gray-200">
    <div class="mt-8 ">
      <img class="h-10 mx-auto" src="/img/logo-mini.svg" alt="Lintifor" />
    </div>
    <div class="flex flex-col mt-32">
      <router-link
        class="flex items-center px-6 py-4 mb-4 font-medium text-gray-700 border-r-4 border-white hover:bg-gray-200 side-navbar-link"
        active-class="text-primary-600 bg-gray-200 border-primary-500"
        v-for="route in appRoutes"
        :key="route.name"
        :to="route.path"
      >
        <div v-html="route.metadata.icon" class="side-navbar-link--icon" />
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
  @apply border-gray-200;
}

.side-navbar-link--icon > svg {
  @apply text-gray-600 opacity-50;
}

.side-navbar-link.router-link-exact-active > .side-navbar-link--icon > svg,
.side-navbar-link:hover > .side-navbar-link--icon > svg {
  @apply text-primary-600 opacity-100;
}
</style>
