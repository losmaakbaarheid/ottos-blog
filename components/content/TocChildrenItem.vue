<script setup lang="ts">
import ThisComponent from "./TocChildrenItem.vue";

defineProps<{ content: Content }>();
</script>

<template>
  <NuxtLink
    class=""
    active-class="font-bold before:content-['>'] before:mr-2"
    exact-active-class="font-black"
    :to="{ path: content.item.path }"
  >
    {{ content.item.title }}
  </NuxtLink>
  <ol v-if="content.children.length" class="my-0 flex flex-col">
    <li v-for="child in content.children" :key="child.item.id" class="my-0">
      <ThisComponent :content="child" />
    </li>
  </ol>
</template>
