<template>
  <div class="home">
    <img src="../assets/logo.png" alt="">
    <HelloWorld msg="Welcome to your vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
export default {
  name:'Home',
  components:{
    HelloWorld
  },
  mounted(){
    console.log('home')
  }
}
</script>
