<template>
   <div>
        <h2>
            login
        </h2>

        <form @submit.prevent="login">
        <div>
            <input type="text"  v-model="form.email"/>
            <small v-if="form.errors.has('email')">{{form.errors.get('email')}}</small>            
        </div>
        <div>
            <input type="password"  v-model="form.password"/>
            <small v-if="form.errors.has('password')">{{form.errors.get('password')}}</small>
        </div>
            <button type="submit">login</button>
        </form>
   </div>
</template>

<script>
import Form from 'vform'
import axios from '../axios'
export default {
    
    data(){
        return {
            form : new Form({
                email : '' ,
                password : ''
            }),
            token : ''
        }
    },
    methods : {
        login(){
            this.form.post('http://www.jwtexample.test/api/auth/login').then((response) => {
                localStorage.setItem('access_token' , response.data.access_token)
                localStorage.setItem('token_type' , response.data.token_type)
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;

                    this.form.post('http://www.jwtexample.test/api/auth/me').then((response) => {
                        this.$store.dispatch('User/user' , response.data)
                        this.$router.push('/')
                    })
                           
              

            })
        }
        
    }
}
</script>

<style>

</style>