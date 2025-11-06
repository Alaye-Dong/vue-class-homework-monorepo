<template>
    <div class="w-64 bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
        <!-- 封面区域 -->
        <div class="relative">
            <img :src="video.cover" alt="cover" class="w-full h-36 object-cover" />
            <!-- 播放量 & 评论数 -->
            <div class="absolute bottom-1 left-2 flex items-center gap-2 text-white text-xs">
                <div class="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path fill="currentColor"
                            d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25Zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25Z" />
                        <path fill="currentColor"
                            d="M6 10.559V5.442a.25.25 0 0 1 .379-.215l4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559" />
                    </svg>
                    <span>{{ video.views }}</span>
                </div>
                <div class="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
                        <path fill="currentColor"
                            d="M3 6v20h9.563l2.718 2.72l.72.686l.72-.687L19.437 26H29V6zm2 2h22v16h-8.406l-.313.28L16 26.563l-2.28-2.28l-.314-.282H5zm4 3v2h14v-2zm0 4v2h14v-2zm0 4v2h10v-2z" />
                    </svg>
                    <span>{{ video.comments }}</span>
                </div>
            </div>
            <!-- 时长 -->
            <div class="absolute bottom-1 right-2 text-white text-xs">
                {{ video.duration }}
            </div>
        </div>

        <!-- 文本内容 -->
        <div class="p-2">
            <p class="text-sm text-gray-800 leading-snug line-clamp-2">
                {{ video.title }}
            </p>
            <div class="mt-1 flex items-center text-xs text-gray-500">
                <span class="bg-gray-100 text-gray-600 px-1 rounded mr-1">UP</span>
                <span class="truncate">{{ video.author }}</span>
                <span class="mx-1">·</span>
                <span>{{ video.date }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    video: {
        type: Object,
        required: true,
        default: () => ({
            cover: 'https://placehold.co/300x180',
            title: '【微隐于市】秋日电台 · Adele 专辑 · 深夜抒情曲 | 阿黛尔 | Autumn Playlist',
            author: '微隐于市',
            date: '11-04',
            views: 1675,
            comments: 0,
            duration: '43:54'
        })
    }
})
</script>

<style scoped>

</style>
