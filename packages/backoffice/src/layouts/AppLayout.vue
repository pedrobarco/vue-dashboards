<template>
  <div>
    <h1 class="text-5xl font-bold text-center text-gray-700">App Layout</h1>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class Private extends Vue {}
</script>
