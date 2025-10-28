import { createMemoryHistory, createRouter } from 'vue-router'

import LoginView from './components/LoginView.vue'
import RegisterView from './components/RegisterView.vue'

const routes = [
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router