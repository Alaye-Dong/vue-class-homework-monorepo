<!-- RankingList.vue -->
<template>
    <div class="bg-white rounded-lg shadow-sm p-4">
        <h2 class="text-xl font-bold mb-4">排行榜</h2>

        <ul class="space-y-3">
            <li v-for="(item, index) in ranking" :key="item.id"
                class="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md transition-colors group">
                <!-- 排名数字 -->
                <span :class="[
                    'w-6 h-6 flex items-center justify-center text-xs font-bold rounded-full',
                    index === 0 ? 'bg-yellow-400 text-black' :
                        index === 1 ? 'bg-gray-300 text-gray-800' :
                            index === 2 ? 'bg-amber-700 text-white' :
                                'bg-gray-100 text-gray-700'
                ]">
                    {{ index + 1 }}
                </span>

                <!-- 封面图 -->
                <img v-if="item.cover" :src="item.cover" :alt="item.title" class="w-12 h-12 object-cover rounded" />

                <!-- 标题 -->
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium truncate group-hover:text-blue-600 transition-colors"
                        :title="item.title">
                        {{ item.title }}
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
// 模拟数据
const ranking = [
    {
        id: 1,
        title: '离谱！华语乐坛...',
        cover: 'https://via.placeholder.com/120x80?text=封面1'
    },
    {
        id: 2,
        title: '【翻唱】ドライフラワー / cover...',
        cover: 'https://via.placeholder.com/120x80?text=封面2'
    },
    {
        id: 3,
        title: '午夜煽动子-【人间不普通指南】(O...',
        cover: 'https://via.placeholder.com/120x80?text=封面3'
    },
    {
        id: 4,
        title: '【4K60FPS】姆爷、蕾哈娜、天灰...',
        cover: 'https://via.placeholder.com/120x80?text=封面4'
    },
    {
        id: 5,
        title: 'Dancing tonight (战双帕弥什) 翻...',
        cover: 'https://via.placeholder.com/120x80?text=封面5'
    },
    {
        id: 6,
        title: '【魔乃】翻唱《被劈腿了可我还是...',
        cover: 'https://via.placeholder.com/120x80?text=封面6'
    },
    {
        id: 7,
        title: '【原创曲】FREAK',
        cover: 'https://via.placeholder.com/120x80?text=封面7'
    },
    {
        id: 8,
        title: '教科书演唱 影视剧系列之 仙剑奇侠...',
        cover: 'https://via.placeholder.com/120x80?text=封面8'
    },
    {
        id: 9,
        title: '【力丸】创造营2021三公舞台「壁...',
        cover: 'https://via.placeholder.com/120x80?text=封面9'
    },
    {
        id: 10,
        title: '【周杰伦x火星哥】真·梦幻联动-本...',
        cover: 'https://via.placeholder.com/120x80?text=封面10'
    }
];
</script>

<style scoped>

</style>