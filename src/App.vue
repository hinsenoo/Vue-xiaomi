<template>
  <div id="app">
    <!-- 所有的视图路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage/index';

export default {
  name: 'App',
  data(){
    return {
      res: {}
    }
  },
  mounted(){
    // 本地加载请求静态 json 文件的形式
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res = res;
    // });
    // 通过 easy-mock 平台实现数据 mock
    // this.axios.get('/user/login').then((res)=>{
    //   this.res = res;
    // });
    // 本地集成 mockjs 实现数据 mock
    this.axios.get('/user/login').then((res)=>{
      this.res = res;
    });
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
