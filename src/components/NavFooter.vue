<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="javascript:;" target="_blank">github主页</a><span>|</span>
            <a href="javascript:;" target="_blank">掘金主页</a><span>|</span>
            <a href="javascript:;" target="_blank">全栈项目</a><span>|</span>
            <a href="javascript:;" target="_blank">Vue项目</a>
        </div>
        <div class="copyright">Copyright ©2019 <span class="domain">hinsenoo</span> All Rights Reserved.</div>
    </div>
</template>
<script>
    export default {
        // 组件名称
        name: 'nav-footer',
        
    }
</script>
<style lang="scss">
    @import './../assets/scss/config.scss';
    .footer{
        height: 234px;
        border-top: 4px solid $colorA;
        background-color: $colorB;
        color: $colorD;
        font-size: $fontI;
        text-align: center;
        .footer-logo{
            margin-top: 46px;
            margin-bottom: 31px;
            img{
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link{
            a{
                color: $colorD;
                display: inline-block;
            }
            span{
                margin:0 10px;
            }
            margin-bottom: 13px;
        }
        .copyright{
            .domain{
                color: $colorA;
            }
        }
    }
</style>