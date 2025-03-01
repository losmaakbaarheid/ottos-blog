<script setup lang="ts">
import type { DeepReadonly } from "vue";
import ThisComponent from "./TocChildrenItem.vue";

defineProps<{ content: DeepReadonly<Content> }>();
</script>

<template>
  <NuxtLink
    :class="
      $route.path === content.item.path
        ? '!font-black'
        : $route.path.startsWith(content.item.path)
        ? '!font-bold'
        : undefined
    "
    :to="{ path: content.item.path }"
  >
    {{ content.item.title }}
  </NuxtLink>
  <ol v-if="content.children.length">
    <li v-for="child in content.children" :key="child.item.id">
      <ThisComponent :content="child" />
    </li>
  </ol>
</template>
