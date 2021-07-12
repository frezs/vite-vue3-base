//import '@/styles/index.css'
import '@/styles/tailwind.css'
import '@/styles/index.less'

import '@/utils/rem'

import { createApp } from 'vue'
import App from './App.vue'
import { router, setupRouter } from './router'
import { setupStore } from './store'

async function bootstrap() {

  const app = createApp(App)

  // 挂载stroe
  setupStore(app)

  // 添加其他逻辑

  // 挂载router
  setupRouter(app)

  await router.isReady()

  app.mount('#app', true)

}

void bootstrap()