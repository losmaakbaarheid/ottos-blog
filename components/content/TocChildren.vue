<script setup lang="ts">
import type { ContentCollectionItem } from "@nuxt/content";
import TocChildrenItem from "./TocChildrenItem.vue";

const children = await getChildrenRecursivly("/blog");
</script>

<script lang="ts">
const getChildrenRecursivly = async (path: string) => {
  const children = await queryCollection("content")
    .where("path", "<>", path)
    .where("path", "LIKE", `${path}/%`)
    .where("path", "NOT LIKE", `${path}/%/%`)
    .all();

  if (children.length === 0) return [] as Content[];

  const result: Content[] = [];

  for (const child of children) {
    const childChildren = await getChildrenRecursivly(child.path);
    result.push({
      children: childChildren,
      item: child,
    });
  }

  return result;
};

export type Content = {
  item: ContentCollectionItem;
  children: Content[];
};
</script>

<template>
  <nav class="text-sm leading-7">
    <div
      class="[&>a]:font-bold my-2 first:mt-0 last:mb-0"
      v-if="children?.length"
      v-for="link in children"
      :key="link.item.id"
    >
      <TocChildrenItem :content="link" />
    </div>
  </nav>
</template>
