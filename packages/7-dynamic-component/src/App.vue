<script setup lang="ts">
import MyLeft from './components/MyLeft.vue';
import MyRight from './components/MyRight.vue';
import Count from './components/Count.vue';

import { ref } from 'vue'
 
type TabKey = 'MyLeft' | 'MyRight'

const currentTab = ref<TabKey>('MyLeft')

const tabs: Record<TabKey, any> = {
  MyLeft,
  MyRight
}

</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-wrap gap-2">
      <button
        v-for="(_, tab) in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        class="btn"
        @click="currentTab = tab"
      >
        展示{{ tab }}组件
      </button>
    </div>
    <component :is="tabs[currentTab]"></component>
    <Count/>
  </div>
</template>

<style scoped>

</style>
