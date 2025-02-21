import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Import the router

const app = createApp(App)
app.use(router) // Tell Vue to use the router
app.mount('#app') // Ensure your index.html has a matching element, e.g., <div id="app"></div>
