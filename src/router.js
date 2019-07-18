import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Edit from './views/EditCompany.vue';
import View from './views/ViewCompany.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/company/edit/:id',
      name: 'Edit Company',
      component: Edit,
    },
    {
      path: '/company/:id',
      name: 'CompanyList',
      component: View,
    },
  ],
});
