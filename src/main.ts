import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import miniVueBarrage from 'minivuebarrage';
import 'minivuebarrage/lib/index.css';
import 'normalize.css';
import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App)
app.use(miniVueBarrage)
app.use(ElementPlus)
app.mount('#app')
