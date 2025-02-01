<script setup lang="ts">
defineProps<{ citationUrl?: string }>();
</script>

<template>
  <blockquote :cite="citationUrl" class="p-3 bg-gray-200 dark:bg-gray-500">
    <slot mdc-unwrap="p" />
  </blockquote>
</template>
