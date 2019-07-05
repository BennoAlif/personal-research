import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index.vue'
import AddSmothie from './components/AddSmoothie.vue';
import EditSmoothie from './components/EditSmoothie.vue';

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/add-smoothie',
      name: 'AddSmoothie',
      component: AddSmothie
    },
    {
      path: '/edit-smoothie/:smoothie_slug',
      name: 'EditSmoothie',
      component: EditSmoothie
    }
  ]
})
