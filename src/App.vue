<template>
  <div id="app">
    <!-- 所有的视图路由 -->
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {

    }
  },
  mounted(){

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
