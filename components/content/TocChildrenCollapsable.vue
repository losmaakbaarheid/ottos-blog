<script setup lang="ts">
const expanded = defineModel<boolean>();
</script>

<template>
  <details :open="expanded" @toggle="expanded = !expanded">
    <summary class="font-bold">Show complete blog content</summary>
    <TocChildren />
  </details>
</template>
