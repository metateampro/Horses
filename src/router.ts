import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Event from './views/Event.vue';
import Admin from './views/Admin.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,

    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    },
    {
      path: '/event/:text',
      name: 'event',
      component: Event,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
