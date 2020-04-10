<template>
  <nav class="bg-white flex flex-col border-r-2 border-gray-200">
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
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { appRoutes } from "@/plugins/router";

@Component
export default class Sidenav extends Vue {
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
</style>
