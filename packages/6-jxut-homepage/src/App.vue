<script setup lang="ts">
import ClassList from './components/ClassList.vue';
import Container from './components/Container.vue';
import NavBar from './components/NavBar.vue'
import SchoolList from './components/SchoolList.vue';
import HeroContent from './components/HeroContent.vue';
</script>

<template>
  <NavBar />
  <Container class="flex justify-between">
    <ClassList></ClassList>
    <HeroContent>
      <SchoolList></SchoolList>
    </HeroContent>
  </Container>
</template>

<style scoped></style>
