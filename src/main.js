import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'//全局注册element-plus
import * as ElementPlusIconsVue from '@element-plus/icons-vue'//使用element-plus图标


const app = createApp(App)
//全局注册element-plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)
app.mount('#app')
