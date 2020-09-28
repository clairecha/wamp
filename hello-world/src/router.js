import Vue from 'vue';
import Dashboard from './components/Dashboard';
import Jumbotron from './components/Jumbotron';
import VueRouter from 'vue-router';
// import { component } from 'vue/types/umd';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/',
      component: Jumbotron,
    },
  ],
});
