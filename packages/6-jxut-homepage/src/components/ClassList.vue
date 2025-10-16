<script setup lang="ts">
const classNames = [
    'PHP从入门到精通',
    'C#从入门到精通',
    'C++从入门到精通',
    'C从入门到精通',
    'Python从入门到精通',
    'Android从入门到精通',
    'Web从入门到精通',
    'PS从入门到精通'
]
</script>

<template>
    <div class="bg-[#62ACD8] w-[280px]">
        <div v-for="(item, index) in classNames" :key="index">
            <div class="p-[24px] pl-[25px] pr-[20px] flex justify-between">
                <p class="text-white">{{item}}</p>
                <p class="text-white"> > </p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
