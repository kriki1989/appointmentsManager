import { createRouter, createWebHistory } from 'vue-router'
import ListAppointmentsView from '../views/ListAppointmentsView.vue'
import LoginView from '../views/LoginView.vue'
import { useAuthStore } from '../stores/auth';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/list-appointments' },
    { path: '/list-appointments', name: 'listAppointments', component: ListAppointmentsView, meta: { requiresAuth: true } },
    { path: '/create-appointment', name: 'createAppointment', component: () => import('../views/CreateAppointmentView.vue'), meta: { requiresAuth: true } },
    { path: '/auth', component: LoginView, meta: { requiresUnauth: true } },
  ]
})

router.beforeEach(function(to, _, next) {
  const store = useAuthStore();
  console.log(to.meta.requiresUnauth, store.getIsAuthenticated)
  if (to.meta.requiresAuth && !store.getIsAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getIsAuthenticated) {
    next('/list-appointments');
  } else {
    next();
  }
});

export default router
