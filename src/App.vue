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

    }
  },
  mounted(){
    this.getUser();
    this.getCartCount();
  },
  methods:{
    getUser(){
      this.axios.get('/user').then(()=>{
        // to-do 保存到 Vuex 里面
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then(()=>{
        // to-do 保存到 Vuex 里面
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
