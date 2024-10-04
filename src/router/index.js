import { createRouter, createWebHistory } from 'vue-router';
import ContactForm from '../components/ContactForm.vue';
import DataForm from '../components/DataForm.vue'; // Asegúrate de importar el DataForm

const routes = [
  { path: '/', component: ContactForm }, // Ruta para ContactForm
  { path: '/data', component: DataForm }, // Ruta para DataForm
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
