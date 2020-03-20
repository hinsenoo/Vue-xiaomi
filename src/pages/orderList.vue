<template>
    <div class="order-list">
        <order-header title="订单列表">
            <!-- 插槽传递 -->
            <template v-slot:tip>
                <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
            </template>
        </order-header>
        <div class="wrapper">
            <div class="container">
                <div class="order-box">
                    <div class="order" v-for="(order,index) in list" :key="index">
                        <div class="order-title">
                            <div class="item-info fl">
                                {{order.createTime}}
                                <span>|</span>
                                {{order.receiverName}}
                                <span>|</span>
                                订单号：{{order.orderNo}}
                                <span>|</span>
                                {{order.paymentTypeDesc}}
                            </div>
                            <div class="item-money fr">
                                <span>应付金额：</span>
                                <span class="money">{{order.payment}}</span>
                                <span>元</span>
                            </div>
                        </div>
                        <div class="order-content clearfix">
                            <div class="good-box fl">
                                <div class="good-list" v-for="(item,i) in order.orderItemVoList" :key="i"> 
                                    <div class="good-img">
                                        <img v-lazy="item.productImage" alt="">
                                    </div>
                                    <div class="good-name">
                                        <div class="p-name">{{item.productName}}</div>
                                        <div class="p-money">{{item.totalPrice + ' 元 ' + ' X ' + item.quantity}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="good-state fr" v-if="order.status == 20">
                                <a href="javascript:;">{{order.statusDesc}}</a>
                            </div>
                            <div class="good-state fr" v-else>
                                <a href="javascript:;" @click="goPay(order.orderNo)">{{order.statusDesc}}</a>
                            </div>
                        </div>
                    </div>
                    <!-- 1. 分页器 -->
                    <el-pagination
                    v-if="false"
                        class="pagination"
                        background
                        layout="prev, pager, next"
                        :pageSize="pageSize"
                        :total="total"
                        @current-change="handleChange"
                        >
                    </el-pagination>
                    <loading v-if="loading"></loading>
                    <!-- 2. 点击加载更多 -->
                    <div class="load-more" v-if="false">
                        <el-button type="primary" :loading="loading" @click="loadMore">加载更多</el-button>
                    </div>
                    <!-- 3. 滚动加载 -->
                    <div class="scroll-more"
                        v-infinite-scroll="scrollMore"
                        infinite-scroll-disabled="busy"
                        infinite-scroll-distance="410"
                    >
                        <img src="/imgs/loading-svg/loading-spinning-bubbles.svg" alt="" v-if="showScroll">
                    </div>
                    <no-data v-if="!loading && list.length == 0"></no-data>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import OrderHeader from './../components/OrderHeader';
    import Loading from './../components/Loading';
    import NoData from './../components/NoData';
    import { Pagination,Button } from 'element-ui';
    // 滚动加载插件
    import infiniteScroll from 'vue-infinite-scroll';
    export default {
        name: 'order-list',
        components: {
            OrderHeader,
            Loading,
            NoData,
            // elementui 组件名称 
            // Pagination.name = el-pagination
            [Pagination.name]: Pagination,
            [Button.name]: Button
        },
        // 配置滚动加载组件的指令
        directives: {
            infiniteScroll 
        },
        data(){
            return {
                loading:false,
                list: [],
                pageSize: 10, // 每页数量
                pageNum: 1, // 页码
                total: 0, // 订单总数
                busy: false, // 滚动加载，是否触发
                showNextPage: true, // 加载更多，是否显示按钮
                showScroll: true, // 滚动加载图案显示
            }
        },
        mounted(){
            this.getOrderList();
        },
        methods: {
            getOrderList(){
                // loading 加载图标
                this.loading = true;
                // 初始化的时候 滚动加载禁用 
                this.busy = true;
                // 滚动加载图标
                this.showScroll = false;
                this.axios.get('/orders',{
                    params: {
                        // 指定每页数量
                        pageSize: 10,
                        // 指定页码数
                        pageNum: this.pageNum
                    }
                }).then((res)=>{
                    this.loading = false;

                    // 1. 分页器
                    // this.list = res.list;

                    // 2. 加载更多,数据累加
                    this.list = this.list.concat(res.list);
                    this.total = res.total;
                    // 是否显示加载更多
                    this.showNextPage = res.hasNextPage;
                    // 页面第一次加载完毕后再打开滚动加载
                    // 且有下一页列表再显示
                    this.busy = !res.hasNextPage;
                }).catch(()=>{
                    this.loading = false;
                })
            },
            goPay(orderNo){
                // 三种路由跳转方式
                // this.$router.push('/order/pay');

                // this.$router.push({
                //     naem: 'order-pay',
                //     query:{
                //         orderNo
                //     }
                // });

                this.$router.push({
                    path: '/order/pay',
                    query:{
                        orderNo
                    }
                });
            },
            // 1. 分页器
            handleChange(pageNum){
                // 当前页
                this.pageNum = pageNum;
                this.getOrderList();
            },
            // 2. 加载更多按钮
            loadMore(){
                // 页数累加
                this.pageNum++;
                this.getOrderList();
            },
            // 3. 滚动加载，通过 npm 插件实现
            scrollMore(){
                // 显示滚动图标
                this.showScroll = true;
                // 开启滚动加载
                this.busy = true;
                setTimeout(()=>{
                    this.pageNum++;
                    this.getList();
                },500)
            },
            // 专门给 scrollMore 使用 
            getList(){
                this.showScroll = true;
                this.axios.get('/orders',{
                    params: {
                        // 指定每页数量
                        pageSize: 10,
                        // 指定页码数
                        pageNum: this.pageNum
                    }
                }).then((res)=>{
                    this.list = this.list.concat(res.list);
                    this.showScroll = false;
                    // 判断是否有下一页
                    if(res.hasNextPage){
                        this.busy = false;
                    }else{
                        this.busy = true;
                    }
                }).catch(()=>{
                })
            },
        }
    }
</script>
<style lang="scss">
    @import './../assets/scss/config.scss';
    @import './../assets/scss/mixin.scss';
    .order-list{
        .wrapper{
            background-color: $colorJ;
            padding-top: 33px;
            padding-bottom: 110px;
            .order-box{
                .order{
                    @include border();
                    background-color:$colorG;
                    margin-bottom:31px;
                    &:last-child{
                        margin-bottom:0;
                    }
                    .order-title{
                        @include height(74px);
                        background-color:$colorK;
                        padding:0 43px;
                        font-size:16px;
                        color:$colorC;
                        .item-info{
                            span{
                                margin:0 9px;
                            }
                        }
                        .money{
                            font-size:26px;
                            color:$colorB;
                        }
                    }
                    .order-content{
                        padding: 0 43px;
                        .good-box{
                            width: 88%;
                            .good-list{
                                display: flex;
                                align-items: center;
                                height:145px;
                                .good-img{
                                    width:112px;
                                    img{
                                        width:100%;
                                    }
                                }
                                .good-name{
                                    font-size:20px;
                                    color:$colorB;
                                }
                            }
                        }
                        .good-state{
                            @include height(145px);
                            font-size: 20px;
                            color:$colorA;
                            a{
                                color:$colorA;
                            }
                        }
                    }
                }
                .pagination{
                    text-align: right;
                }
            }
            .pagination{
                text-align:right;
            }
            .el-pagination.is-background .el-pager li:not(.disabled).active{
                background-color: #FF6600;
            }
            .el-button--primary{
                background-color: #FF6600;
                border-color: #FF6600;
            }
            .load-more,.scroll-more{
                text-align:center;
            }
        }
    }
</style>