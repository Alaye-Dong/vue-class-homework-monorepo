<script setup lang="ts">
import { ref } from 'vue'

const books = ref([
    { id: 1, title: 'Vue无难事' },
    { id: 2, title: 'VC++深入详解' },
    { id: 3, title: 'Servlet/Jsp深入详解' }
])

const newBook = ref({
    id: 0,
    title: ''
})

const selectedBooks = ref<number[]>([])

const addBook = () => {
    if (newBook.value.id !== null && newBook.value.id !== undefined && newBook.value.title) {
        books.value.push({
            id: newBook.value.id,
            title: newBook.value.title
        })
        newBook.value = { id: 0, title: '' }
    }
}

const toggleSelection = (id: number) => {
    const index = selectedBooks.value.indexOf(id)
    if (index > -1) {
        // 如果已选中，则取消选中
        selectedBooks.value.splice(index, 1)
    } else {
        // 如果未选中，则选中
        selectedBooks.value.push(id)
    }
}


const handleCheckboxChange = (id: number, event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
        // 如果复选框被选中，且ID不在选中列表中，则添加
        if (!selectedBooks.value.includes(id)) {
            selectedBooks.value.push(id)
        }
    } else {
        // 如果复选框被取消选中，则从选中列表中移除
        const index = selectedBooks.value.indexOf(id)
        if (index > -1) {
            selectedBooks.value.splice(index, 1)
        }
    }
}

const deleteSelected = () => {
    if (selectedBooks.value.length > 0) {
        books.value = books.value.filter(book => !selectedBooks.value.includes(book.id))
        selectedBooks.value = []
    }
}
</script>

<template>
    <div>
        <div>
            <div>
                <label>ID: </label>
                <input type="number" v-model.number="newBook.id" class="input" />
            </div>
            <div>
                <label>书名: </label>
                <input type="text" v-model="newBook.title" class="input" />
            </div>
            <button @click="addBook" class="btn btn-primary">添加</button>
        </div>

        <div class="actions">
            <button @click="deleteSelected" class="btn btn-error" :disabled="selectedBooks.length === 0">
                删除选中项 ({{ selectedBooks.length }})
            </button>
        </div>

        <ul class="list">
            <li 
                v-for="book in books" 
                :key="book.id" 
                class="list-row"
                :class="{ selected: selectedBooks.includes(book.id) }"
                @click="toggleSelection(book.id)"
            >
                <input 
                    type="checkbox" 
                    :checked="selectedBooks.includes(book.id)"
                    @change="handleCheckboxChange(book.id, $event)"
                />
                ID: {{ book.id }} - 书名: {{ book.title }}
            </li>
        </ul>
    </div>
</template>

