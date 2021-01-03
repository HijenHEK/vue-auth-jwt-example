<template>
  <div class="home">
    
    <div>
      {{posts}}
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
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
