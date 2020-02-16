<template>
  <div>
    <h1>App layout</h1>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class Private extends Vue {}
</script>
