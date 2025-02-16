<template>
  <a href="#hyvorComments"><CommentCount :page-id="route.path" /></a>
</template>

<script setup lang="ts">
import { CommentCount } from "@hyvor/hyvor-talk-vue";
import { CommentCounts } from "@hyvor/hyvor-talk-base";

const route = useRoute();

onMounted(() => {
  CommentCounts.load({
    "website-id": 12602,
  });
});
</script>
