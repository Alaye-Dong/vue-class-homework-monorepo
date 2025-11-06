<script setup lang="ts">
import Channel from './components/Channel.vue';
import ChannelPage from './pages/ChannelPage.vue';
import RankingList from './components/RankingList.vue';
</script>

<template>
<Channel />
  <div class="flex">
    <ChannelPage class="flex-1" />
    <RankingList class="w-80 ml-4" />
  </div>
</template>

<style scoped>

</style>
