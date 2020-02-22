<template>
  <div class="flex items-center bg-gray-200 h-screen">
    <div class="w-2/3 min-w-screen-sm max-w-screen-xl mx-auto px-5 lg:w-full">
      <div class="flex bg-white shadow-md rounded-lg border-8 border-white">
        <div
          class="hidden w-1/2 bg-cover bg-center rounded-l lg:block"
          style="background-image: url(./img/login-bg.jpg);"
        />
        <div class="w-full px-12 py-24 lg:w-1/2 lg:px-24 lg:py-32">
          <h3 class="text-gray-800 text-4xl font-bold">
            {{ $t("views.Login.title") }}
          </h3>
          <p class="w-2/3 mt-1 text-gray-500">
            {{ $t("views.Login.description") }}
          </p>
          <form class="mt-8">
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                {{ $t("views.Login.form.email.label") }}
              </label>
              <input
                class="bg-gray-200 apperance-none border-2 border-gray-200 w-full py-3 px-3 text-gray-700 leading-tight rounded"
                id="email"
                type="email"
                :placeholder="$t('views.Login.form.email.placeholder')"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                {{ $t("views.Login.form.password.label") }}
              </label>
              <input
                class="bg-gray-200 apperance-none border-2 border-gray-200 w-full py-3 px-3 text-gray-700 mb-3 leading-tight tracking-widest rounded"
                id="password"
                type="password"
                :placeholder="$t('views.Login.form.password.placeholder')"
              />
            </div>
            <button
              class="bg-gray-800 hover:bg-gray-900 text-white text-sm font-bold uppercase tracking-wide py-4 focus:outline-none focus:shadow-outline w-full rounded"
              type="button"
            >
              {{ $t("views.Login.button") }}
            </button>
          </form>
        </div>
      </div>
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
