<template>
  <div class="flex h-screen bg-gray-100">
    <SideNavbar class="hidden md:block" />
    <div class="flex-1 flex flex-col">
      <TopNavbar />
      <!-- Content -->
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
