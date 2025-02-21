import { createApp } from 'vue'
import App from './App.vue'
import store from './store'  // import the Vuex store

const app = createApp(App)
app.use(store)  // register the store with your Vue app
app.mount('#app')
