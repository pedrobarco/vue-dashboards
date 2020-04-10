<template>
  <div class="flex h-screen bg-gray-100">
    <SideNavbar class="hidden md:block" />
    <div class="flex-1 flex flex-col">
      <div class="flex md:block justify-between mx-12 my-8 md:mb-0">
        <!-- Content -->
        <TopNavbar class="order-last" />
        <div class="md:mt-8">
          <h1 class="capitalize text-3xl font-medium">
            {{ $route.name }}
          </h1>
        </div>
      </div>
      <main class="h-full mb-8 md:my-8 mx-12 border-dotted border-4">
        <router-view />
      </main>
      <BottomNavbar class="md:hidden" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SideNavbar from "@/components/SideNavbar.vue";
import TopNavbar from "@/components/TopNavbar.vue";
import BottomNavbar from "@/components/BottomNavbar.vue";

@Component({
  components: {
    SideNavbar,
    TopNavbar,
    BottomNavbar
  }
})
export default class AppLayout extends Vue {}
</script>
