<template>
  <div id="app">
    <!-- 所有的视图路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage/index';

export default {
  name: 'App',
  data(){
    return {

    }
  },
  mounted(){
    storage.setItem('a',1);
    // storage.setItem('user',{a:1});
    // storage.setItem('abc ',{a:1},'user');
    // storage.clear('a');
    // storage.clear('a','user');
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
