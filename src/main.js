import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue'

import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import appProfile from "@/components/app-profile.vue";
import appForm from "@/components/templates/app-form.vue";
import postList from './components/post-list.vue'
import Landing from './components/landing.vue'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {path: '/login', component: appForm},
        {path: '/profile', component: appProfile},
        {path: '/news', component: postList},
        {path: '/', component: Landing}
    ]
});

const app = createApp(App)
app.use(router)
app.use(bootstrap)
app.mount('#app')

