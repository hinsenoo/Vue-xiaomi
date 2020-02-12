<template>
    <div>
        <!-- 复用头部 尾部 -->
        <nav-header></nav-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
    export default {
        // 组件名称
        name: 'nav-header',
        
    }
</script>