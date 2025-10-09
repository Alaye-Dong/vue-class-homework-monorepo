<script setup lang="ts">
import { ref, computed } from "vue";

const number1 = ref(0);
const number2 = ref(0);
const operator = ref('+');

const result = computed(() => {
  switch (operator.value) {
    case '+':
      return add(number1.value, number2.value);
    case '-':
      return subtract(number1.value, number2.value);
    case '*':
      return multiply(number1.value, number2.value);
    case '/':
      if (number2.value === 0) {
        return 'Error: Division by zero';
      }
      return divide(number1.value, number2.value);
    default:
      return 0;
  }
});

function add(a: number, b: number) { 
    return a + b;
}

function subtract(a: number, b: number) { 
    return a - b;
}

function multiply(a: number, b: number) { 
    return a * b;
}

function divide(a: number, b: number) { 
    return a / b;
}
</script>

<template>
  <div class="flex items-center gap-2 md:gap-4 p-4 md:p-5 justify-center">
    <input 
      class="input w-24 md:w-32" 
      type="number" 
      v-model.number="number1" 
    />
    
    <select class="select w-16 md:w-20">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">×</option>
      <option value="/">÷</option>
    </select>
    
    <input 
      class="input w-24 md:w-32" 
      type="number" 
      v-model.number="number2" 
    />
    
    <div class="font-bold text-xl md:text-2xl min-w-[100px] text-center">
      = {{ result }}
    </div>
  </div>
</template>

<style scoped>
</style>