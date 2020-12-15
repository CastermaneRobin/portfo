import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Contact from './components/contact/Contact.vue';
import MonProfil from './components/profil/MonProfil.vue';
import Portfolio from './components/portfolio/Portfolio.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MonProfil},
        { path: '/portfolio', component: Portfolio},
        { path: '/contact', component: Contact}
    ]
});
const app = createApp(App)
app.use(router);
app.mount('#app');
