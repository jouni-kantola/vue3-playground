<template>
  <Blob :src="src">
    <template #default="{ blob }">
      <div v-html="decodeDataUrl(blob)"></div>
    </template>
    <template #error="{ message }">
      <p>{{ message }}</p>
    </template>
  </Blob>
</template>

<script setup lang="ts">
import Blob from "./Blob.vue";

defineProps({
  src: {
    type: String,
    required: true,
  },
});

const decodeDataUrl = (url: string) => atob(url.split("base64,")[1]);
</script>
