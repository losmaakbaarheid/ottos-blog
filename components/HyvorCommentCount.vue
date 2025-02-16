<template>
  <ClientOnly>
    <a href="#hyvorComments"><CommentCount :page-id="route.path" /></a>
  </ClientOnly>
</template>

<script setup lang="ts">
import { CommentCount } from "@hyvor/hyvor-talk-vue";
import { CommentCounts } from "@hyvor/hyvor-talk-base";

const route = useRoute();

if (import.meta.client) {
  onMounted(() => {
    CommentCounts.load({
      "website-id": 12602,
    });
  });
}
</script>
