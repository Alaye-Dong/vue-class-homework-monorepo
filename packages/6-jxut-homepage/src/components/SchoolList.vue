<script setup>
const schools = [
    { name: '软件工程学院' },
    { name: '网络工程学院' },
    { name: '新媒体学院' },
    { name: '智能科学学院' }
]
</script>


<template>
    <div class="justify-center items-center flex flex-wrap">
        <div class="bg-white flex flex-col gap-[20px] p-[10px]">
            <div v-for="school in schools" :key="school.name"
                class="bg-purple-800 w-[210px] h-[65px] flex items-center justify-center">
                <p class="text-white text-[30px]">{{ school.name }}</p>
            </div>
        </div>
    </div>
</template>
