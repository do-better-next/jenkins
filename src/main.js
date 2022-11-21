import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/index.css'
import 'animate.css';
// import Loading from './components/Loading'
const app = createApp(App)

app.config.globalProperties.$filter={
    format(str){
        return '#'+str
    }
}
// app.use(Loading)
app.use(router)
app.use(createPinia())
app.use(ElementPlus)
app.mount('#app')
