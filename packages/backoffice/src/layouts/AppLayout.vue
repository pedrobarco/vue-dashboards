<template>
  <div class="flex flex-col md:flex-row min-h-screen bg-white">
    <div class="order-first bg-white md:hidden py-4 shadow-sm border-b-2">
      <div class="flex items-center justify-center">
        <img class="h-8 w-8" src="/img/logo-mini.svg" alt="Logo" />
        <h1 class="ml-4 text-2xl font-semibold text-primary-600">Lintifor</h1>
      </div>
    </div>
    <div class="order-last bg-white md:hidden">
      <div class="flex items-center justify-center">
        <router-link
          class="px-2 py-4 mx-2 rounded-sm hover:bg-gray-200 router-link"
          active-class="bg-gray-200 border-t-4 border-primary-500 route-icon-active"
          v-for="route in appRoutes"
          v-bind:key="route.name"
          :to="route.path"
        >
          <div v-html="route.metadata.icon" class="h-6 w-6 mx-4 route-icon" />
        </router-link>
      </div>
    </div>
    <div class="w-auto lg:w-56 bg-white hidden md:block">
      <img
        class="h-12 w-12 lg:h-16 lg:w-16 mx-auto mt-12"
        src="/img/logo-mini.svg"
        alt="Lintifor"
      />
      <hr class="mt-12 mx-8 border-primary-200" />
      <div class="flex flex-col mt-12">
        <router-link
          class="flex items-center mb-4 px-2 py-4 rounded-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-200 router-link"
          active-class="text-primary-600 bg-gray-200 border-r-4 border-primary-500 route-icon-active"
          v-for="route in appRoutes"
          v-bind:key="route.name"
          :to="route.path"
        >
          <div
            v-html="route.metadata.icon"
            class="h-6 w-6 ml-4 mr-6 route-icon"
          />
          <span class="hidden lg:block">{{ route.name }}</span>
        </router-link>
      </div>
    </div>
    <div class="bg-gray-100 flex-1">
      <router-view />
    </div>
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
  @apply text-gray-600 opacity-50;
}

.router-link:hover > .route-icon > svg {
  @apply text-primary-600 opacity-100;
}

.route-icon-active > .route-icon > svg {
  @apply text-primary-500 opacity-100;
}
</style>
