import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'
// import { axios } from 'vue/types/umd'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
            
    
  },
  {
    path: '/profile',
    name: 'Profile',
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
      
  },
  {
    path: '/login',
    name: 'Login',
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let authenticated = store.state.User.user || localStorage.getItem('access_token') && localStorage.getItem('access_token').length > 20
  if (to.name !== 'Login'  && !authenticated) next({ name: 'Login' })
  if (to.name === 'Login' && authenticated) next(from)
  
  else next()

})

export default router
