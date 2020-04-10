<template>
  <nav class="bg-white flex justify-between border-t-2 border-gray-200">
    <div class="ml-8 my-auto">
      <img class="h-8" src="/img/logo-mini.svg" alt="Lintifor" />
    </div>
    <div class="flex mx-auto">
      <router-link
        class="flex items-center py-3 px-6 text-gray-700 border-t-4 border-white hover:bg-gray-200 bottom-navbar-link"
        active-class="text-primary-600 bg-gray-200 border-primary-500"
        v-for="route in appRoutes"
        :key="route.name"
        :to="route.path"
      >
        <div v-html="route.metadata.icon" class="bottom-navbar-link--icon" />
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { appRoutes } from "@/plugins/router";

@Component
export default class BottomNavbar extends Vue {
  appRoutes = appRoutes;
}
</script>

<style lang="postcss">
.bottom-navbar-link:hover:not(.router-link-exact-active) {
  @apply border-gray-200;
}

.bottom-navbar-link--icon > svg {
  @apply h-5 w-5 text-gray-600 opacity-50;
}

.bottom-navbar-link.router-link-exact-active > .bottom-navbar-link--icon > svg,
.bottom-navbar-link:hover > .bottom-navbar-link--icon > svg {
  @apply text-primary-600 opacity-100;
}
</style>
