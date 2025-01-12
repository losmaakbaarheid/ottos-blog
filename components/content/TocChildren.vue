<script setup lang="ts">
const { page } = useContent();
const children = await useAsyncData("children", () =>
  queryContent({
    where: {
      _path: { $contains: page.value._path },
    },
  }).find()
);

console.log(children);
</script>

<template>
  <div>
    test test
    <ul v-if="children?.data.value">
      <li v-for="link in children.data.value" :key="link._id">
        <NuxtLink :to="{ path: link._path }">
          {{ link.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
