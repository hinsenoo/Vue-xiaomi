<template>
    <div class="ali-pay">
        <loading v-if="loading"></loading>
        <div class="form" v-html="content">

        </div>
    </div>
</template>
<script>
    import Loading from './../components/Loading'
    export default {
        name: 'alipay',
        components:{
            Loading
        },
        data(){
            return {
                orderId: this.$route.query.orderNo,
                // 返回的 html 源码
                content: '',
                loading: true, // 动画显示
            }
        },
        mounted(){
            this.paySubmit();
        },
        methods: {
            paySubmit(){
                this.axios.post('/pay',{
                    orderId: this.orderId,
                    orderName: 'Vue 高仿小米商城',
                    amount: 0.01,   // 单位元
                    payType: 1 // 1 支付宝 2 微信
                }).then((res)=>{
                    this.content = res.content;
                    setTimeout(()=>{
                        document.forms[0].submit();
                    },100);
                })
            }
        }
    }
</script>