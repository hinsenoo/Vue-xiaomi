<template>
    <div class="list">
        <order-header title="订单列表">
            <!-- 插槽传递 -->
            <template v-slot:tip>
                <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
            </template>
        </order-header>
    </div>
</template>
<script>
    import OrderHeader from './../components/OrderHeader';
    export default {
        name: 'order-list',
        components: {
            OrderHeader,
        }
    }
</script>