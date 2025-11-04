<template>
  <div class="min-h-screen bg-base-200 p-4">
    <div class="max-w-2xl mx-auto">
      <!-- 添加表单 -->
      <div class="bg-base-100 p-6 rounded-box shadow-lg mb-6">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-1">
            <label class="label">
              <span class="label-text">ID</span>
            </label>
            <input 
              v-model="newItem.id" 
              type="text" 
              placeholder="输入ID" 
              class="input input-bordered w-full"
              @keyup.enter="addItem"
            />
          </div>
          
          <div class="flex-1">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input 
              v-model="newItem.name" 
              type="text" 
              placeholder="输入Name" 
              class="input input-bordered w-full"
              @keyup.enter="addItem"
            />
          </div>
          
          <div class="flex items-end">
            <button 
              @click="addItem" 
              class="btn btn-primary"
              :disabled="!newItem.id || !newItem.name"
            >
              添加
            </button>
          </div>
        </div>
      </div>
      
      <!-- 列表显示 -->
      <div class="bg-base-100 rounded-box shadow-lg overflow-hidden">
        <div class="divide-y divide-base-200">
          <transition-group name="list" tag="div" appear>
            <div 
              v-for="item in items" 
              :key="item.id"
              class="p-4 flex justify-between items-center hover:bg-base-200 transition-colors"
            >
              <div>
                <span class="font-bold mr-4">{{ item.id }}</span>
                <span>{{ item.name }}</span>
              </div>
              <button 
                @click="removeItem(item.id)"
                class="btn btn-sm btn-error btn-outline"
              >
                删除
              </button>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 数据模型
const newItem = ref({
  id: '',
  name: ''
})

const items = ref([
  { id: '1', name: '示例1' },
  { id: '2', name: '示例2' }
])

// 添加项目
const addItem = () => {
  if (newItem.value.id && newItem.value.name) {
    // 检查ID是否已存在
    if (items.value.some(item => item.id === newItem.value.id)) {
      alert('ID已存在，请使用其他ID')
      return
    }
    
    items.value.push({
      id: newItem.value.id,
      name: newItem.value.name
    })
    
    // 清空输入框
    newItem.value.id = ''
    newItem.value.name = ''
  }
}

// 删除项目
const removeItem = (id) => {
  items.value = items.value.filter(item => item.id !== id)
}
</script>

<style scoped>
/* 列表项过渡效果 */
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.list-move {
  transition: transform 0.3s ease;
}
</style>