<template>
    <div class="index">
        <div class="container">
            <!-- 轮播 -->
            <div class="swiper-box">
                <!-- 侧边菜单栏 -->
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children">
                                <ul v-for="(item,index) in menuList" :key="index">
                                    <li v-for="(sub,i) in item" :key="i">
                                        <a :href="sub ? '/#/product/' + sub.id : ''">
                                            <img :src="sub ? sub.img : '/imgs/item-box-1.png'">
                                            {{sub ? sub.name : '小米9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电视 盒子</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 平板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 插线板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">出行 穿戴</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">生活 箱包</a>
                        </li>
                    </ul>
                </div>
                <!-- 轮播图 -->
                <swiper v-bind:options="swiperOption">
                    <swiper-slide v-for="(item,index) in slideList" :key="index">
                        <a v-bind:href="'/#/product/' + item.id"><img :src="item.img"></a>
                    </swiper-slide>
                    <!-- 分页器 -->
                    <div class="swiper-pagination"  slot="pagination"></div>
                    <!-- 导航按钮 -->
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <!-- 广告位 -->
            <div class="ads-box">
                <a :href="'/#/product/' + item.id" v-for="(item,index) in adsList" :key="index">
                    <img :src="item.img" alt="">
                </a>
            </div>
            <div class="banner-box">
                <a href="/#/product/30">
                    <img src="/imgs/banner-1.png" alt="">
                </a>
            </div>
            <div class="product-box"></div>
        </div>
        <service-bar></service-bar>
    </div>
</template>
<script>
    import ServiceBar from './../components/ServiceBar'
    import { swiper,swiperSlide } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
    export default {
        name: 'index',
        components: {
            swiper,
            swiperSlide,
            ServiceBar
        },
        data(){
            return {
                // 轮播图插件设置
                swiperOption: {
                    // 自动播放
                    autoplay: true,
                    // 头尾循环
                    loop: true,
                    // 动画
                    effect: 'cube',
                    // cube 动画设置
                    cubeEffect: {
                        slideShadows: true,
                        shadow: true,
                        shadowOffset: 100,
                        shadowScale: 0.6
                    },
                    // 注册分页器
                    pagination: {
                        el: '.swiper-pagination',
                        // 点击切换
                        clickable :true,
                    },
                    // 前进后退按钮
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
                // 轮播图数据
                slideList: [
                    {
                        id: '42',
                        img: '/imgs/slider/slide-1.jpg'
                    },
                    {
                        id: '45',
                        img: '/imgs/slider/slide-2.jpg'
                    },
                    {
                        id: '46',
                        img: '/imgs/slider/slide-3.jpg'
                    },
                    {
                        id: '',
                        img: '/imgs/slider/slide-4.jpg'
                    },
                    {
                        id: '',
                        img: '/imgs/slider/slide-5.jpg'
                    }
                ],
                // 菜单栏数据
                menuList: [
                    [
                        {
                            id: '30',
                            img: '/imgs/item-box-1.png',
                            name: '小米CC9',
                        },
                        {
                            id: '31',
                            img: '/imgs/item-box-2.png',
                            name: '小米8青春版',
                        },
                        {
                            id: '32',
                            img: '/imgs/item-box-3.jpg',
                            name: 'Redmi K20 Pro',
                        },
                        {
                            id: '33',
                            img: '/imgs/item-box-4.jpg',
                            name: '移动4G+专区',
                        }
                    ],
                    [0,0,0,0],[0,0,0,0], [0,0,0,0],[0,0,0,0],[0,0,0,0],
                ],
                // 广告位数据
                adsList: [
                    {
                        id: 33,
                        img: '/imgs/ads/ads-1.png',
                    },
                    {
                        id: 48,
                        img: '/imgs/ads/ads-2.jpg',
                    },
                    {
                        id: 45,
                        img: '/imgs/ads/ads-3.png',
                    },
                    {
                        id: 47,
                        img: '/imgs/ads/ads-4.jpg',
                    }
                ]
            }
        }
    }
</script>
<style lang="scss">
    @import './../assets/scss/mixin.scss';
    @import './../assets/scss/config.scss';
    @import './../assets/scss/base.scss';
    .index{
        .swiper-box{
            .nav-menu{
                box-sizing: border-box;
                position: absolute;
                width: 264px;
                height: 451px;
                z-index: 9;
                padding: 26px 0;
                background-color: rgba(85, 88, 90, 0.5);
                .menu-wrap{
                    .menu-item{
                        height: 50px;
                        line-height: 50px;
                        a{
                            position: relative;
                            display: block;
                            font-size: 16px;
                            color: #fff;
                            padding-left: 30px;
                            &:after{
                                position: absolute;
                                right: 30px;
                                top: 17.5px;
                                content: ' ';
                                @include bgImg(10px,15px,'/imgs/icon-arrow.png');
                            }
                        }
                        &:hover{
                            background-color: $colorA;
                            .children{
                                display: block;
                            }
                        }
                        .children{
                            display: none;
                            width: 962px;
                            height: 451px;
                            background-color: $colorG;
                            position: absolute;
                            left: 264px; 
                            top: 0;
                            border: 1px solid $colorH;
                            ul{
                                @include flex();
                                height: 75px;
                                li{
                                    flex: 1;
                                    height: 75px;
                                    line-height: 75px;
                                    padding-left: 23px;
                                    a{
                                        color: $colorB;
                                        font-size: $fontJ;
                                    }
                                    img{
                                        width: 42px;
                                        height: 35px;
                                        vertical-align: middle;
                                        margin-right: 15px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .swiper-container {
                height: 451px;
                img{
                    width: 100%;
                    height: 100%;
                }
                .swiper-button-prev{
                    left: 274px;
                }
            }  
        }
        .ads-box{
            @include flex();
            margin-top: 14px;
            margin-bottom: 31px;
            a{
                width: 296px;
                height: 167px;
            }
        }
        .banner-box{
            margin-bottom: 50px;
        }
    }
</style>