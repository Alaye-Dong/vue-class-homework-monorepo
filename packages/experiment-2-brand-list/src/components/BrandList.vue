<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

// 定义品牌类型
interface Brand {
  id: string
  name: string
  createdAt: string
}

// 响应式数据
const id = ref('')
const name = ref('')
const searchKeyword = ref('')

// 品牌列表数据
const brands = ref<Brand[]>([])

// 计算属性：过滤后的品牌列表
const filteredBrands = computed(() => {
  if (!searchKeyword.value) {
    return brands.value
  }
  return brands.value.filter(brand => 
    brand.name.toLowerCase().includes(searchKeyword.value.toLowerCase())
  )
})

// 添加品牌
const addBrand = () => {
  if (!id.value || !name.value) {
    alert('请填写完整信息')
    return
  }
  
  // 检查ID是否已存在
  if (brands.value.some(brand => brand.id === id.value)) {
    alert('ID已存在')
    return
  }
  
  brands.value.push({
    id: id.value,
    name: name.value,
    createdAt: new Date().toLocaleString()
  })
  
  // 清空输入框
  id.value = ''
  name.value = ''
}

// 删除品牌
const deleteBrand = (id: string) => {
  brands.value = brands.value.filter(brand => brand.id !== id)
}

// 初始化示例数据
onMounted(() => {
  brands.value = [
    {
      id: '1',
      name: 'Apple',
      createdAt: new Date().toLocaleString()
    },
    {
      id: '2',
      name: 'Samsung',
      createdAt: new Date().toLocaleString()
    }
  ]
})
</script>

<template>
  <div class="brand-list">
    <h2>添加品牌</h2>
    
    <div class="form-section">
      <div class="form-group">
        <label>Id:</label>
        <input v-model="id" type="text" placeholder="请输入品牌ID">
      </div>
      
      <div class="form-group">
        <label>Name:</label>
        <input v-model="name" type="text" placeholder="请输入品牌名称">
        <button @click="addBrand">添加</button>
      </div>
      
      <div class="form-group">
        <label>搜索名称关键字:</label>
        <input v-model="searchKeyword" type="text" placeholder="请输入搜索关键字">
      </div>
    </div>

    <table class="brand-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>创建时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="brand in filteredBrands" :key="brand.id">
          <td>{{ brand.id }}</td>
          <td>{{ brand.name }}</td>
          <td>{{ brand.createdAt }}</td>
          <td>
            <button @click="deleteBrand(brand.id)" class="delete-btn">删除</button>
          </td>
        </tr>
        <tr v-if="filteredBrands.length === 0">
          <td colspan="4" class="no-data">暂无数据</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.brand-list {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.form-section {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  gap: 10px;
}

.form-group label {
  width: 120px;
  font-weight: bold;
}

.form-group input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-group button {
  padding: 8px 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-group button:hover {
  background: #0056b3;
}

.brand-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.brand-table th,
.brand-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.brand-table th {
  background: #f8f9fa;
  font-weight: bold;
}

.delete-btn {
  padding: 6px 12px;
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.delete-btn:hover {
  background: #c82333;
}

.no-data {
  text-align: center;
  color: #666;
  font-style: italic;
}
</style>