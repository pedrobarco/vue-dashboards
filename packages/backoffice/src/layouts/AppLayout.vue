<template>
  <div class="flex min-h-screen">
    <div class="w-56 bg-gray-100 shadow border-r">
      <img class="h-12 mx-auto mt-8" src="/img/logo.svg" alt="Lintifor" />
      <div class="flex flex-col mt-8">
        <router-link
          class="flex items-center mb-4 px-2 py-4 rounded-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-200"
          active-class="text-primary-600 bg-gray-200 border-r-4 border-primary-500 route-icon-active"
          v-for="route in appRoutes"
          v-bind:key="route.name"
          :to="route.path"
        >
          <div
            v-html="route.metadata.icon"
            class="h-6 w-6 route-icon ml-4 mr-6"
          />
          {{ route.name }}
        </router-link>
      </div>
    </div>
    <div class="bg-gray-200 flex-1"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { appRoutes } from "@/plugins/router";

@Component
export default class AppLayout extends Vue {
  appRoutes = appRoutes;
}
</script>

<style lang="postcss">
.route-icon > svg {
  @apply text-primary-400;
}
.route-icon-active > div > svg {
  @apply text-primary-500;
}
</style>
