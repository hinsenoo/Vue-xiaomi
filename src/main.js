import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

// 根据前端的跨域方式做调整  /a/b：/api/a/b => /a/b
axios.defaults.baseURL = '/api';
// 超时设置 8s
axios.defaults.timeout = 8000;
// 接口错误拦截
axios.interceptors.response.use(function (response){
  let res = response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    window.location.href = '/#/login';
  }else{
    alert(res.msg);
  }
});
// 挂载 axios
Vue.use(VueAxios,axios);
// 生产环境提示
Vue.config.productionTip = false

new Vue({
  // router: router
  router,
  render: h => h(App),
}).$mount('#app')
