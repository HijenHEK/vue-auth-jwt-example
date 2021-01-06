<template>
  <form @submit.prevent="handleSubmit">
     
     <input  type="text" v-model="body" placeholder="enter your post here">
     <button type="submit">post it </button>
     <div class="errors" v-if="errors['body']">
        <span v-for="e in errors.body" :key="e.index">{{e}}</span>
     </div>
  </form>
</template>
<script>
import axios from '../axios'
export default {
    data(){
        return{
            body : '',
            errors : {}
        }
    },
    methods : {
        handleSubmit(){
            axios.post('/posts' , {
                body : this.body
            }).then(() => {
                this.$store.dispatch('Posts/getPosts')
                this.body = ''
            }).catch((err)=>{
                this.errors = err.response.data.errors
            })
        }
    }
}
</script>
<style scoped>
form {
    margin : 1rem 0
}
    input {
        border : none ;
        outline: none;
        padding : 0.5rem 1rem;
        min-width: 100px;
        margin: 1rem;
        background: #e3e3e3e3;
    }
    button {
        border : none ;
        outline: none;
        margin: 1rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }
    .errors {
        margin: 0 1rem;

        font-size: 0.8rem;
        color: rgb(236, 85, 85) ;
    }
</style>