import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Contact from './components/contact/Contact.vue';
import MonProfil from './components/profil/MonProfil.vue';
import Portfolio2 from './components/portfolio/Portfolio2.vue'
import DevDay from './components/portfolio/details/DevDay.vue'
import FormationLinux from './components/portfolio/details/FormationLinux.vue'
import ReactNativeFormation from './components/portfolio/details/ReactNativeFormation.vue'
import JefJobDay from './components/portfolio/details/JefJobDay.vue'


const router = createRouter({
    history: createWebHistory(),
    baseUrl: '/portfolio',
    routes: [
        { path: '/portfolio', component: MonProfil},
        { path: '/portfolio/travaux', component: Portfolio2},
        { path: '/contact', component: Contact},
        { path: '/portfolio/travaux/jef', component: DevDay},
        { path: '/portfolio/travaux/linux', component: FormationLinux},
        { path: '/portfolio/travaux/reactNative', component: ReactNativeFormation},
        { path: '/portfolio/travaux/devDay', component: JefJobDay}
    ]
});
const app = createApp(App)
app.use(router);
app.mount('#app');


