import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router';
import store from './store'
const app = createApp(App);

app.use(Antd);
app.use(store);
app.use(router);

app.mount('#app');
