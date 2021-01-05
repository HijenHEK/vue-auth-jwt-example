<template>
  <div class="about">
    <h1 v-if="user">{{user.name}}</h1>
    <div>
      
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed : {
    ...mapGetters({
      
      user :'User/user'
      })
    
  }
}
</script>
