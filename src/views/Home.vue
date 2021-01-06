<template>
  <div class="home">
    <new-post :edit="edit" @edited="edit=null"></new-post>
    <div class="posts-list">
      <div v-for="p in posts" :key="p.index" class="post">
        <span>{{p.body}}</span> <span> <button @click="edit=p">edit</button> <button @click="del(p)">del</button> </span>
      </div>
    </div>
   
  </div>
</template>

<script>
import axios from '../axios';
import NewPost from '../components/NewPost.vue';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    NewPost
    // HelloWorld
  },
  data (){
    return {
      edit : null
    }
  },
  computed : {
    posts(){
      return this.$store.state.Posts.posts
    }
  },
  methods: {
    del(p) {
      axios.delete('/posts/'+p.id).then(()=>{
        this.$store.dispatch('Posts/getPosts')
      })
    }
  },
  mounted () {
      this.$store.dispatch('Posts/getPosts');
    
  }
}
</script>

<style scoped>
.post {
  padding: 0.5rem;
  min-width: 100px;
  max-width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>