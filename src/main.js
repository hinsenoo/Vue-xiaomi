import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
// 按需加载
import { Message } from 'element-ui'
// 确保引入样式
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import App from './App.vue'
// import env from './env'

// mock 开关
const mock = false;
if(mock){
  require('./mock/api');
}

// 根据前端的跨域方式做调整  /a/b：/api/a/b => /a/b
axios.defaults.baseURL = '/api';
// 超时设置 8s
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;

// 接口错误拦截
axios.interceptors.response.use(function (response){
  let res = response.data;
  let path = location.hash;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    // 首页 可不用跳转到 登录页面
    if(path != '#/index'){
      window.location.href = '/#/login';
    }
    // 抛出错误，防止未登录进入购物车界面
    return Promise.reject(res);
  }else{
    // 抛出异常
    Message.warning(res.msg);
    return Promise.reject(res);
  }
});
// Element 插件
// 挂载 axios
Vue.use(VueAxios,axios);
// 加载 Cookie
Vue.use(VueCookie);
// 懒加载插件
Vue.use(VueLazyLoad,{
  loading: '/imgs/loading-svg/loading-bars.svg'
});
Vue.prototype.$message = Message;
// 生产环境提示
Vue.config.productionTip = false

new Vue({
  // vuex
  store,
  // router: router
  router,
  render: h => h(App),
}).$mount('#app')
