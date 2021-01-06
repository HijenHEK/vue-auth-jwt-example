<template>
  <div id="app">
    <div id="nav">
      <div v-if="user" class="views">
        <router-link to="/">Home</router-link> 
        <router-link to="/profile">Profile</router-link>
      </div>
      <div v-if="! user" class="auth">
        <router-link to="/login">Login</router-link> 
        <router-link to="/resigter">Register</router-link>
      </div>
      <div v-if="user" class="auth">
        <a @click.prevent="logout">Logout</a>
      </div>
    </div>
    <router-view class="content" />
  </div>
</template>
<script >
import {mapGetters} from 'vuex'
import axios from './axios'
  export default {
    computed : {
      ...mapGetters({
        user : 'User/user'
      })
    },
    watch: {
    user(newValue) {
      
      if (!newValue) this.getUser()
      
    },
    },
    methods : {
      logout(){
          // axios.defaults.headers.common['Authorization'] = 'bearer ' + localStorage.getItem('access_token');
          // axios.post('auth/logout').then((response)=>{
          // console.log(response)
          localStorage.setItem('access_token' , '')
          this.$store.dispatch('User/user' , null)
          this.$router.push("/login")
        // }).catch(()=>{
            // this.getUser()
            
        // })


      },
      getUser(){
        axios.post('auth/me').then((response) => {
        this.$store.dispatch('User/user' , response.data);
        }).catch(()=>{
          if(localStorage.getItem('access_token'))  this.refreshUser()
        })
      },
      refreshUser(){
         axios.post('auth/refresh').then((response) => {
                localStorage.setItem('access_token' , response.data.access_token)
                localStorage.setItem('token_type' , response.data.token_type)
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;

                this.refreshUser()

          }).catch(()=>{
          localStorage.setItem('access_token' , '')
          })
      }
    },
    mounted(){
        if(localStorage.getItem('access_token') && localStorage.getItem('access_token').length > 20) {
                 this.getUser()
        }
      
    }
  }
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

#nav {
  background-color: #e3e3e3;
  display : flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem ;
}
.views , .auth {
  display: flex;
  align-items: center;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 0.5rem;
  padding : 1rem;
}
#nav a:hover {
  color: #e3e3e3;
  background-color: #2c3e50;
  transition: all 0.2s ease-in-out;
}
#nav a.router-link-exact-active {
   color: #e3e3e3;
  background-color: #2c3e50;
}
.content {
  padding: 2rem 5rem;
}
</style>
