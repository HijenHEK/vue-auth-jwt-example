<template>
  <div class="home">
    <new-post></new-post>
    <div class="posts-list">
      <div v-for="p in posts" :key="p.index" class="post">
        {{p.body}}
      </div>
    </div>
   
  </div>
</template>

<script>
import NewPost from '../components/NewPost.vue';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    NewPost
    // HelloWorld
  },
  computed : {
    posts(){
      return this.$store.state.Posts.posts
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
  
}
</style>