import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Contact from './components/contact/Contact.vue';
import MonProfil from './components/profil/MonProfil.vue';
import Portfolio2 from './components/portfolio/Portfolio2.vue'
import DevDay from './components/portfolio/details/DevDay.vue'
import FormationGitHub from './components/portfolio/details/FormationGitHub.vue'
import FormationLinux from './components/portfolio/details/FormationLinux.vue'
import NodeJsFormation from './components/portfolio/details/NodeJsFormation.vue'
import ReactNativeFormation from './components/portfolio/details/ReactNativeFormation.vue'
import JefJobDay from './components/portfolio/details/JefJobDay.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MonProfil},
        { path: '/portfolio', component: Portfolio2},
        { path: '/contact', component: Contact},
        { path: '/portfolio/devDay', component: DevDay},
        { path: '/portfolio/github', component: FormationGitHub},
        { path: '/portfolio/linux', component: FormationLinux},
        { path: '/portfolio/nodeJs', component: NodeJsFormation},
        { path: '/portfolio/reactNative', component: ReactNativeFormation},
        { path: '/portfolio/jef', component: JefJobDay}
    ]
});
const app = createApp(App)
app.use(router);
app.mount('#app');


