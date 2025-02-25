<script setup lang="ts">
import type { ContentCollectionItem } from "@nuxt/content";
import TocChildrenItem from "./TocChildrenItem.vue";
import { getStructuredContent } from "~/utils/navigationUtils";

const { path = "/blog" } = defineProps<{ path?: string }>();

const content = await getStructuredContent();

const children = content.map.get(path)!.children;
</script>

<template>
  <ol class="text-sm leading-7">
    <li
      class="[&>a]:font-bold my-2 first:mt-0 last:mb-0"
      v-if="children?.length"
      v-for="link in children"
      :key="link.item.id"
    >
      <TocChildrenItem :content="link" />
    </li>
  </ol>
</template>
