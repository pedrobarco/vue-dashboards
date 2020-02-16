<template>
  <div class="flex items-center bg-gray-200 h-screen">
    <div class="w-full max-w-xs mx-auto">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Email
          </label>
          <input
            class="bg-gray-200 apperance-none border-2 border-gray-200 w-full py-2 px-3 text-gray-700 leading-tight"
            id="username"
            type="text"
            placeholder="Email"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="bg-gray-200 apperance-none border-2 border-gray-200 w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            {{ $t("views.Login.signInButton") }}
          </button>
        </div>
      </form>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Footer
  }
})
export default class Login extends Vue {}
</script>
