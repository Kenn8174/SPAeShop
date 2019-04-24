import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ProductsComponent from './components/ProductsComponent.vue'
import DetailComponent from './components/DetailComponent.vue'
import BasketComponent from './components/BasketComponent.vue'
import Bitcoin from './views/Bitcoin.vue'
import DeleteComponent from './components/DeleteComponent.vue'
import EditComponent from './components/EditComponent.vue'
import Create from './views/Create.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    {
      path: '/ProductsComponent',
      name: 'ProductsComponent',
      component: ProductsComponent
    },
    {
      path: '/DetailComponent/:id',
      name: 'DetailComponent',
      component: DetailComponent
    },
    {
      path: '/BasketComponent',
      name: 'BasketComponent',
      component: BasketComponent
    },
    {
      path: '/Bitcoin',
      name: 'Bitcoin',
      component: Bitcoin
    },
    {
      path: '/DeleteComponent/:id',
      name: 'DeleteComponent',
      component: DeleteComponent
    },
    {
      path: '/EditComponent/:id',
      name: 'EditComponent',
      component: EditComponent
    },
    {
      path: '/Create',
      name: 'Create',
      component: Create
    }
  ]
})
