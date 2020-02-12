import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import AliPay from './pages/alipay'

Vue.use(Router);

export default new Router({
    routes: [
        {
            // 
            // 路由路径
            path: '/',
            // 路由名称
            name: 'home',
            // 路由组件
            component: Home,
            redirect: '/index',
            // 子路由（二级路由）
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Index,
                },
                {
                    // 产品页，动态路由
                    path: '/product/:id',
                    name: 'product',
                    component: Product,
                },
                {
                    // 产品详情
                    path: '/detail/:id',
                    name: 'detail',
                    component: Detail,
                }
            ]
        },
        {
            // 购物车页面
            path: '/cart',
            name: 'cart',
            component: Cart,
        },
        {
            // 订单页面
            path: '/order',
            name: 'order',
            component: Order,
            children: [
                {
                    // 订单列表
                    path: 'list',
                    name: 'order-list',
                    component: OrderList,
                },
                {
                    // 订单确认
                    path: 'confirm',
                    name: 'order-confirm',
                    component: OrderConfirm,
                },
                {
                    // 订单支付
                    path: 'pay',
                    name: 'order-pay',
                    component: OrderPay,
                },
                {
                    // 订单支付
                    path: 'alipay',
                    name: 'alipay',
                    component: AliPay,
                },
            ]
        },
    ]
});