<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
import axios from 'axios'
// import jsonp from 'jsonp'

export default {
  name: 'App',
  // data(){
  //   return {
  //     data: ''
  //   }
  // },
  mounted(){
    let url="/api/common/adver-getadver";
    axios.get(url).then(()=>{});
    // axios.get('https://www.imooc.com/common/adver-getadver').then(()=>{});
    // jsonp(url,(err,res)=>{
    //   let result = res;
    //   this.data = result;
    // })
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
