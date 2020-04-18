<template>
  <div class="flex flex-row justify-between mx-12 my-8 md:mb-0">
    <div class="">
      <h1
        class="capitalize text-2xl md:text-3xl font-semibold text-primary-700"
      >
        {{ $route.name }}
      </h1>
    </div>
    <div class="flex items-center justify-end">
      <button class="block focus:outline-none">
        <div class="relative">
          <svg
            class="text-gray-800 h-5 w-5 md:h-6 md:w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <div class="hidden md:block absolute right-0 top-0">
            <svg
              class="fill-current h-2 w-2 text-secondary-500 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
        </div>
      </button>
      <AccountDropdown />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { accountRoutes } from "@/plugins/router";
import AccountDropdown from "@/components/AccountDropdown.vue";

@Component({
  components: {
    AccountDropdown
  }
})
export default class TopNavbar extends Vue {
  accountRoutes = accountRoutes;
}
</script>
