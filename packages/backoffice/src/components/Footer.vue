<template>
  <p class="text-center text-gray-500 text-xs">
    &copy;2020 PP. {{ $t("components.Footer.text") }}.
  </p>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>
