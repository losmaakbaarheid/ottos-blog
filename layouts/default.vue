<template>
  <div
    class="max-w-2xl px-4 py-10 m-auto bg-white sm:px-8 sm:shadow dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 sm:rounded-lg"
  >
    <main
      class="max-w-none prose dark:prose-invert prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900 hover:prose-a:text-primary-400 prose-a:font-normal prose-a:no-underline prose-a:border-dashed prose-a:border-b hover:prose-a:border-solid hover:prose-a:border-primary-400"
    >
      <HyvorCommentCount v-if="!disableComments" />
      <slot />
    </main>
    <PrevNext />
  </div>
  <div v-if="!disableComments" class="max-w-2xl mt-2 m-auto">
    <HyvorComments />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const disableComments = ref(false);

watchEffect(async () => {
  const page = await queryCollection("content").path(route.path).first();
  disableComments.value = page?.disableComments ?? false;
});
</script>
