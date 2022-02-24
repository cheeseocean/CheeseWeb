import {createApp} from 'vue'
import 'amfe-flexible'
import {Form, CellGroup, Field, Button} from "vant"
import '@/assets/css/base.scss'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(store).use(router).mount('#app')
;[Form, CellGroup, Field, Button].forEach(component => app.use(component))
