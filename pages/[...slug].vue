<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});
</script>

<template>
  <div>
    <NuxtLayout>
      <ContentRenderer v-if="page" :value="page" />
    </NuxtLayout>
  </div>
</template>
