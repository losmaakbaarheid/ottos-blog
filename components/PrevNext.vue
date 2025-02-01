<script setup lang="ts">
const route = useRoute();
const { data: surroundings } = await useAsyncData("surroundings", () => {
  return queryCollectionItemSurroundings("content", route.path);
});
const [previousItem, nextItem] = surroundings.value!;
</script>

<template>
  <nav class="flex justify-between font-semibold my-4">
    <NuxtLink v-if="previousItem" :to="previousItem.path"
      >&lt; {{ previousItem.title }}</NuxtLink
    >
    <div v-else />
    <NuxtLink v-if="nextItem" :to="nextItem.path"
      >{{ nextItem.title }} &gt;</NuxtLink
    >
  </nav>
</template>
