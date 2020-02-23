<template>
  <div
    class="flex items-center bg-white sm:bg-gray-200 h-screen border-t-8 border-gray-800 sm:border-none"
  >
    <div class="w-full sm:w-2/3 lg:w-full max-w-screen-xl mx-auto sm:px-5">
      <div
        class="flex sm:bg-white sm:shadow-md sm:rounded-lg sm:border-8 sm:border-white"
      >
        <div
          class="hidden w-1/2 bg-cover bg-center rounded-l lg:block"
          style="background-image: url(./img/login-bg.jpg);"
        />
        <div class="w-full px-8 sm:px-12 sm:py-24 lg:w-1/2 lg:px-24 lg:py-32">
          <h3 class="text-gray-800 text-4xl font-bold">
            {{ $t("views.Login.title") }}
          </h3>
          <p class="w-2/3 mt-1 text-gray-500">
            {{ $t("views.Login.description") }}
          </p>
          <form @submit.prevent="submitLoginForm" class="mt-8">
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
                required
                v-model.trim="email"
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
                required
                v-model="password"
              />
            </div>
            <button
              class="bg-gray-800 hover:bg-gray-900 text-white text-sm font-bold uppercase tracking-wide py-4 focus:outline-none focus:shadow-outline w-full rounded"
              type="submit"
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

@Component
export default class Login extends Vue {
  private email = "";
  private password = "";
  private error = false;

  private async submitLoginForm() {
    try {
      await this.$store.dispatch("account/login", {
        email: this.email,
        password: this.password
      });
      this.$router.push("/");
    } catch (e) {
      this.error = true;
    }
  }
}
</script>
