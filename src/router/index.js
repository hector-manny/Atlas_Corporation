// router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue'; // Asegúrate de que la ruta de importación sea correcta

const routes = [
 
  {
    path: '/login',
    name: 'Login',
    component: LoginView, // Agrega el componente LoginForm a las rutas
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
