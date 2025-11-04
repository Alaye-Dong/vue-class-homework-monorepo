<template>
  <div class="flex flex-warp mt-4">
    <h2 class="text-xl font-bold mb-4">count 值：</h2>
      <span class="text-2xl font-mono">{{ count }}</span>
      <button 
        @click="increment" 
        class="btn"
      >
        +
      </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}
</script>

<style scoped>
</style>