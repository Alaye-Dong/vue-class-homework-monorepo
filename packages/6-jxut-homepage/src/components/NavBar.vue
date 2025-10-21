<script setup lang="ts">
const navLinks = [
  { name: '首页', url: '#' },
  { name: '本科招生', url: '#' },
  { name: '专科招生', url: '#' },
  { name: '人才招聘', url: '#' },
  { name: '招生公示信息', url: '#' },
  { name: '信息公开', url: '#' },
  { name: '智慧校园', url: '#' }
];
</script>

<template>
  <div class="navbar bg-purple-800 p-[20px] pl-[30px] justify-between">
    <div class="flex items-center max-w-[290px]">
      <img src="../assets/jxut.png" alt="jxut" class="h-[80px]">
      <p class="text-white ml-2 text-xl font-bold italic font-[宋体] tracking-widest w-full text-center">江西科技学院</p>
    </div>
    <div class="flex items-center space-x-[33px]">
      <a 
        v-for="link in navLinks" 
        :key="link.name"
        :href="link.url" 
        class="text-white"
      >
        {{ link.name }}
      </a>
    </div>
  </div>
</template>

<style scoped></style>