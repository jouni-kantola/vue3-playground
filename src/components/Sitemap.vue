<template>
  <ul>
    <li v-for="node in nodes" :key="node.id">
      <span v-if="node.parent === parent">{{ node.name }}</span>
      <Sitemap v-else :nodes="nodes.filter(n => node.parent === n.parent)" :parent="node.parent" />
    </li>
  </ul>
</template>
<script setup lang="ts">
type Node = {
  id: number;
  parent: number | undefined;
  name: string;
  type: "folder" | "page";
};

defineProps<{
  nodes: Array<Node>;
  parent?: undefined | number;
}>();
</script>
