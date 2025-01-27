<script setup lang="ts">
const route = useRoute();
const children = await queryCollection("content")
  .where("path", "<>", route.path)
  .where("path", "LIKE", `${route.path}%`)
  .all();
</script>

<template>
  <nav v-if="children" v-for="link in children" :key="link.id">
    <NuxtLink :to="{ path: link.path }">
      {{ link.title }}
    </NuxtLink>
  </nav>
</template>
