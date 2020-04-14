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
        class="group flex items-center justify-center lg:justify-start py-3 lg:px-6 mb-4 border-r-4 border-white hover:bg-gray-200 hover:border-gray-200"
        active-class="bg-gray-200 border-primary-500 hover:border-primary-500"
        v-for="route in appRoutes"
        :key="route.name"
        :to="route.path"
        :data-cy="`side-${route.path}-link`"
      >
        <component
          class="h-5 w-5 text-gray-600 group-hover:text-primary-500 group-hover:opacity-100"
          :class="[
            $route.name === route.name
              ? ['opacity-100', 'text-primary-500']
              : ['opacity-50', 'text-gray-600']
          ]"
          :is="`${route.metadata.icon}-icon`"
        />
        <span
          class="hidden lg:block capitalize ml-4 font-medium group-hover:text-primary-600"
          :class="[
            $route.name === route.name
              ? ['text-primary-600']
              : ['text-gray-700']
          ]"
        >
          {{ route.name }}
        </span>
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { appRoutes } from "@/plugins/router";
import PieChartIcon from "@/assets/img/icons/pie-chart.svg";
import ShoppingBagIcon from "@/assets/img/icons/shopping-bag.svg";
import PackageIcon from "@/assets/img/icons/package.svg";
import UsersIcon from "@/assets/img/icons/users.svg";

@Component({
  components: {
    PieChartIcon,
    ShoppingBagIcon,
    PackageIcon,
    UsersIcon
  }
})
export default class SideNavbar extends Vue {
  appRoutes = appRoutes;
}
</script>
