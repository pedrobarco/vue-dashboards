<template>
  <div
    class="flex items-center h-screen bg-gray-100 border-t-8 border-primary sm:border-none"
  >
    <img
      class="absolute h-12 top-0 right-0 mt-8 mr-4 sm:hidden"
      src="/img/logo-mini.jpg"
      alt="Logo"
    />
    <div class="w-full sm:w-2/3 lg:w-full max-w-screen-xl mx-auto sm:px-5">
      <div class="flex sm:bg-white sm:shadow-md sm:rounded-lg">
        <div class="hidden w-1/2 rounded-l lg:block">
          <div class="flex items-center h-full">
            <img
              class="ml-5 fill-current"
              src="/img/login-bg.svg"
              alt="Dashboard"
            />
          </div>
        </div>
        <div
          class="w-full px-8 rounded-r relative sm:px-12 sm:py-24 lg:w-1/2 lg:px-24 lg:py-32"
        >
          <img
            class="hidden absolute h-12 top-0 right-0 mt-8 mr-8 md:block"
            src="/img/logo-mini.jpg"
            alt="Logo"
          />
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
                >{{ $t("views.Login.form.email.label") }}</label
              >
              <input
                class="bg-gray-200 apperance-none border-2 border-gray-200 w-full py-3 px-3 text-gray-700 leading-tight rounded outline-none focus:shadow-outline"
                type="email"
                :placeholder="$t('views.Login.form.email.placeholder')"
                required
                v-model.trim="email"
              />
            </div>
            <div class="mb-1">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
                >{{ $t("views.Login.form.password.label") }}</label
              >
              <input
                class="bg-gray-200 apperance-none border-2 border-gray-200 w-full py-3 px-3 text-gray-700 mb-3 leading-tight tracking-widest rounded outline-none focus:shadow-outline"
                type="password"
                :placeholder="$t('views.Login.form.password.placeholder')"
                required
                v-model="password"
              />
            </div>
            <div class="flex items-center justify-between mb-10">
              <div class="flex items-center">
                <input
                  type="checkbox"
                  class="form-checkbox h-4 w-4 text-primary-600 transition duration-150 ease-in-out"
                />
                <label
                  for="remember_me"
                  class="ml-2 block text-sm leading-5 text-gray-900"
                  >{{ $t("views.Login.form.remember.label") }}</label
                >
              </div>
              <div class="text-sm leading-5">
                <a
                  href="#"
                  class="font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                  >{{ $t("views.Login.form.recover.prompt") }}</a
                >
              </div>
            </div>
            <div class="mt-6">
              <button
                class="text-sm font-bold uppercase tracking-wide py-4 w-full rounded border border-transparent text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:border-primary-700 focus:shadow-outline-primary active:bg-primary-700 transition duration-150 ease-in-out"
                type="submit"
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
