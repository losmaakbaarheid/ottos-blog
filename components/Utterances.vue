<template>
  <ClientOnly>
    <div ref="host"></div>
  </ClientOnly>
</template>

<script setup lang="ts">
const hostElement = useTemplateRef("host");
const colorMode = useColorMode();
const theme = computed(() =>
  colorMode.value === "light" ? "github-light" : "icy-dark"
);

if (import.meta.client) {
  watch(
    [theme, hostElement],
    ([theme, hostElement]) => {
      if (!hostElement) return;

      const element = document.createElement("script");
      element.setAttribute("src", "https://utteranc.es/client.js");
      element.setAttribute("repo", "losmaakbaarheid/ottos-blog");
      element.setAttribute("issue-term", "pathname");
      element.setAttribute("theme", theme);
      element.setAttribute("crossorigin", "anonymous");
      element.setAttribute("async", "");

      hostElement.replaceChildren(element);
    },
    {
      immediate: true,
    }
  );
}
</script>
