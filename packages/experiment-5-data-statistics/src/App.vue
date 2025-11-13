<script setup lang="ts">
import Count from './components/Count.vue'
import { useCounterStore } from './store';
const store = useCounterStore();
</script>

<template>
  <div>
    <p class="text-3xl font-bold">Home-View</p>
    <Count />
    <Count />
    <button class="btn btn-primary" @click="store.increment()">count+1</button>
  </div>
</template>

<style scoped></style>
