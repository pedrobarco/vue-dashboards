<template>
  <nav
    data-cy="bottom-navbar"
    class="relative flex justify-center items-center bg-white border-t-2 border-gray-200"
  >
    <div class="absolute left-0 ml-4">
      <img class="h-6 w-6" src="/img/logo-mini.svg" alt="Lintifor" />
    </div>
    <div class="flex items-center">
      <router-link
        class="group flex items-center py-3 px-4 border-t-4 border-white hover:bg-gray-200 hover:border-gray-200"
        active-class="bg-gray-200 border-primary-500 hover:border-primary-500"
        v-for="route in appRoutes"
        :key="route.name"
        :to="route.path"
        :data-cy="`bottom-${route.path}-link`"
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
export default class BottomNavbar extends Vue {
  appRoutes = appRoutes;
}
</script>
