<template>
  <div class="flex items-center bg-gray-200 h-screen">
    <div class="w-full max-w-screen-xl mx-auto">
      <div class="flex bg-white shadow-md rounded-lg border-4 border-white">
        <div
          class="w-1/2 bg-cover bg-center bg-login rounded-l"
          style="background-image: url(./img/login-bg.jpg);"
        />
        <div class="w-1/2 px-24 py-32">
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
                for="username"
              >
                {{ $t("views.Login.form.email.label") }}
              </label>
              <input
                class="bg-gray-200 apperance-none border-2 border-gray-200
              w-full py-2 px-3 text-gray-700 leading-tight rounded"
                id="username"
                type="text"
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
                class="bg-gray-200 apperance-none border-2 border-gray-200 w-full py-2 px-3 text-gray-700 mb-3 leading-tight rounded"
                id="password"
                type="password"
                :placeholder="$t('views.Login.form.password.placeholder')"
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
              >
                {{ $t("views.Login.button") }}
              </button>
            </div>
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
