<script setup lang="ts">
import { computed } from 'vue'

const datalist = [
    { title: "手机", state: 2 },
    { title: "衣服", state: 3 },
    { title: "小米", state: 0 },
    { title: "华为", state: 2 },
    { title: "遥遥领先", state: 1 },
]

function computedState(state: number) {
    switch (state) {
        case 0:
            return "未付款";
        case 1:
            return "待发货";
        case 2:
            return "已完成";
        case 3:
            return "已取消";
        default:
            return "未知";
    }
}

const processedDataList = computed(() => {
    return datalist.map(item => ({
        ...item,
        stateText: computedState(item.state)
    }))
})
</script>

<template>
    <div>
        <ul class="list">
            <li class="list-row" v-for="item in processedDataList" :key="item.title">
                <div>{{ item.title }}</div>
                <div>{{ item.stateText }}</div>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>