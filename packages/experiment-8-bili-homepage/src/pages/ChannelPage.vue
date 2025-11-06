<template>
    <div class="p-6 min-h-screen">
        <!-- 标题 -->
        <h2 class="text-3xl font-semibold text-gray-800 mb-4">🎧 音乐</h2>

        <!-- 视频卡片网格 -->
        <div class="grid gap-6 grid-cols-4">
            <VideoCard v-for="(video, index) in videos" :key="index" :video="video" />
        </div>
    </div>
</template>

<script setup>
import VideoCard from '../components/VideoCard.vue';

const videos = [
    {
        cover: '/cover/001.avif',
        title: '【微隐于市】秋日电台 · Adele 专辑 · 深夜抒情曲 | 阿黛尔 | Autumn Playlist',
        author: '微隐于市',
        date: '11-04',
        views: '1675',
        comments: '0',
        duration: '43:54'
    },
    {
        cover: '/cover/002.avif',
        title: '【顶级干货】沉浸式看吴师练琴',
        author: '真如KaelWu',
        date: '11-04',
        views: '1058',
        comments: '0',
        duration: '37:40'
    },
    {
        cover: '/cover/003.avif',
        title: '【宝藏歌单合集】“我从未走远 只是你靠近了别人”',
        author: '音乐分享君',
        date: '11-01',
        views: '6.9万',
        comments: '0',
        duration: '33:45'
    },
    {
        cover: '/cover/004.avif',
        title: '【emo歌曲合集】“音乐一响，回忆登场”',
        author: '鱿鱼丝音乐',
        date: '11-03',
        views: '2.6万',
        comments: '2',
        duration: '35:51'
    },
    {
        cover: '/cover/005.avif',
        title: '循环歌单 | 无敌少侠的小曲【VemVem】你这迷人的小夜猫，来吧放松一下！',
        author: '若勿忘我_毅心',
        date: '10-31',
        views: '9.4万',
        comments: '10',
        duration: '40:01'
    },
    {
        cover: '/cover/006.avif',
        title: '一人一首成名曲《鬼迷心窍》《我只在乎你》《同桌的你》《是否我真的一无所有》《偏偏喜欢你》《老人与海》《慢慢喜欢你》《黄种人》《漂洋过海来看你》《无赖》',
        author: '音乐美食家',
        date: '10-30',
        views: '2475',
        comments: '0',
        duration: '41:19'
    },
    {
        cover: '/cover/007.avif',
        title: '【高质英文歌曲合集】那些前奏一秒绝杀的单曲循环！',
        author: 'CAL音梦空间',
        date: '11-01',
        views: '1804',
        comments: '19',
        duration: '33:46'
    },
    {
        cover: '/cover/008.avif',
        title: 'The Rolling Stones《Some Girls》1978年专辑精选',
        author: 'HiRes无损体验馆',
        date: '10-30',
        views: '2063',
        comments: '0',
        duration: '40:44'
    },
    {
        cover: '/cover/009.avif',
        title: '华语金曲回忆杀《以后的以后》《再回到从前》《不要再来伤害我》',
        author: '爱吃肉的小JQQ',
        date: '10-30',
        views: '1370',
        comments: '58',
        duration: '43:28'
    },
    {
        cover: '/cover/010.avif',
        title: '《相思》越剧版和《凌美地》reaction，美国老师的惊喜反应',
        author: '929星球的爱丽丝',
        date: '10-30',
        views: '1.7万',
        comments: '75',
        duration: '27:12'
    }
]
</script>
