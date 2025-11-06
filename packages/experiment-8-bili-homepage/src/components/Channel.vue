<template>
  <div class="p-4 bg-white">
    <!-- 第一行 -->
    <div class="flex flex-wrap gap-2 mb-2">
      <button
        v-for="item in firstRow"
        :key="item"
        class="w-20 px-2 py-2 text-sm font-medium rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-center"
      >
        {{ item }}
      </button>
    </div>

    <!-- 第二行 -->
    <div class="flex flex-wrap gap-2">
      <button
        v-for="item in secondRow"
        :key="item"
        class="w-20 px-2 py-2 text-sm font-medium rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-center"
      >
        {{ item }}
      </button>
      
      <!-- 更多按钮 -->
      <button
        class="w-20 px-2 py-2 text-sm font-medium rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center gap-1"
      >
        更多
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
// 数据模拟
const channels = [
  '番剧', '国创', '综艺', '动画', '鬼畜', '舞蹈', '娱乐', '科技', '美食',
  '电影', '电视剧', '纪录片', '游戏', '音乐', '影视', '知识', '资讯'
];

// 分成两行（每行最多10个）
const firstRow = channels.slice(0, 9);
const secondRow = channels.slice(9);
</script>

<style scoped>

</style>