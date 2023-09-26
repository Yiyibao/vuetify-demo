<script setup lang="ts">
import { Vue3Lottie } from "vue3-lottie";
const props = defineProps({
  size: {
    type: Number,
    default: 100,
  },
});
</script>

<template>
    <Vue3Lottie
      animationLink="https://assets2.lottiefiles.com/packages/lf20_cr9slsdh.json"
    />
</template>

<style scoped></style>
