import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter : (from , to ,next) => {
        if(!store.state.User.user) {
          next('/login');
        } else {

          next()
        }
        
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
    beforeEnter : (from , to ,next) => {
      if(!store.state.User.user) {
        next('/login');
      } else {
        next()
      }
      
  }
  },
  {
    path: '/login',
    name: 'Login',
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    beforeEnter : (from , to , next) => {
      if(store.state.User.user || localStorage.getItem('access_token')) {
        next(from)
      }else {
        next()
      }
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
