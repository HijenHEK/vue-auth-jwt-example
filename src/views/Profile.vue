<template>
  <div class="about">
    <h1>{{user.name}}</h1>
    <div>
      
    </div>
  </div>
</template>

<script>
export default {
  computed : {
    user (){
      return this.$store.state.user
    }
  }
}
</script>
