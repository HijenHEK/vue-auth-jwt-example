import Vue from 'vue'
import Vuex from 'vuex'
import Posts from './modules/posts.js'
import User from './modules/user.js'


Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    Posts,
    User
  },
  
})

export default store
