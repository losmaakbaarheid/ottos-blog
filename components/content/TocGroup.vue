<script setup lang="ts">
const { path: pathProps, rootPath = "/blog" } = defineProps<{
  path?: string;
  rootPath?: string;
}>();

const route = useRoute();

const path = computed(() => pathProps ?? route.path);

const structuredContent = await getStructuredContent();
</script>

<template>
    <nav>
        
    </nav>

</template>
