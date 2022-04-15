<template>
  <slot v-if="blob" :blob="blob" />
  <slot v-if="error" name="error" :message="error" />
</template>

<script setup lang="ts">
import { useFetchBlob } from "../fetch";

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
});

const { blob, error } = useFetchBlob(props.src);
</script>
