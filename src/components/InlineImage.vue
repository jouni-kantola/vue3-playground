<template>
  <img :src="blob" :alt="alt" />
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import { useFetchBlob } from '../fetch'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  }
})

const { blob, error } = useFetchBlob(props.src)
</script>