<template>
  <div id="app">
    <div id="nav">
      <div class="views">
        <router-link to="/">Home</router-link> 
        <router-link to="/profile">Profile</router-link>
      </div>
      <div class="auth">
        <router-link to="/login">Login</router-link> 
        <router-link to="/resigter">Register</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script >
import axios from './axios'
  export default {
    
    mounted(){
      axios.post('auth/me').then((response) => {
        this.$store.dispatch('User/user' , response.data);
        })
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display : flex;
  justify-content: space-between;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 0.5rem;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
