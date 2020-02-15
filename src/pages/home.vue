<template>
    <div>
        <!-- 复用头部 尾部 -->
        <nav-header></nav-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
    import NavHeader from './../components/NavHeader'
    import NavFooter from './../components/NavFooter'
    export default {
        // 组件名称
        name: 'nav-home',
        // 加载多个组件
        components: {
            // 标签引用的是 组件内定义的名称
            // 大写会被解析为 xx-xx
            NavHeader,
            NavFooter
        }
    }
</script>