<script setup lang="ts">

</script>

<template>
  <div>
    <nav class="tabs tabs-border">
      <RouterLink to="/login" class="tab">登录</RouterLink>
      <RouterLink to="/register" class="tab">注册</RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
