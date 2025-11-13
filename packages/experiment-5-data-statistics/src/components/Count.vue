<script setup lang="ts">
import { useCounterStore } from '../store';
const store = useCounterStore();
</script>

<template>
  <div class="m-4">Count: {{ store.count }}</div>
</template>

<style scoped>

</style>
