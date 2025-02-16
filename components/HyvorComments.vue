<template>
  <ClientOnly>
    <div id="hyvorComments">
      <Comments :website-id="12602" :page-id="route.path" :colors="colorMode" />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { Comments } from "@hyvor/hyvor-talk-vue";

const route = useRoute();

const colors = useColorMode();

const colorMode = computed(() => colors.value as "light" | "dark");
</script>
