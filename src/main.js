import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; // Importa de esta manera
import LoginView from './views/LoginView.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/login',
        name: 'login',
        component: LoginView,
      },
  ],
});

const app = createApp(App);
app.use(router); // Usa el router en la app

app.mount('#app');
