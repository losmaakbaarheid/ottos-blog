<template>
  <div id="remark42"></div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

if (import.meta.client) {
  watch(
    () => colorMode.value,
    (theme) => {
      // @ts-expect-error
      window.REMARK42.changeTheme(theme);
    },
    {
      immediate: true,
    }
  );
}
</script>
