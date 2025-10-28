<script setup lang="ts">

</script>

<template>
  <div class="text-center">
    <h1 class="text-3xl">APP根组件</h1>
    <nav class="tabs tabs-border flex justify-center">
      <RouterLink to="/" class="tab">首页</RouterLink>
      <RouterLink to="/about" class="tab">关于</RouterLink>
    </nav>
    <div class="divider"></div>
    <main class="card">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
