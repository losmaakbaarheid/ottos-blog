<template>
  <ClientOnly>
    <div id="hyvorComments">
      <Comments
        @comment:deleted="onCommentChange"
        @comment:published="onCommentChange"
        :website-id="12602"
        :page-id="route.path"
        :colors="colorMode"
      />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { Comments } from "@hyvor/hyvor-talk-vue";
import { CommentCounts } from "@hyvor/hyvor-talk-base";

const route = useRoute();

const colors = useColorMode();

const colorMode = computed(() => colors.value as "light" | "dark");

const onCommentChange = () => {
  CommentCounts.load({
    "website-id": 12602,
  });
};
</script>
