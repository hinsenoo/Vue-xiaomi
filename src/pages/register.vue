<template>
    <div class="register">
        <div class="wrapper">
            <div class="content">
                <div class="logo">
                    <a href="/#/index"></a>
                </div>
                <p class="title">注册小米账号</p>
                <div class="form">
                    <div class="group">
                        <p>账号</p>
                        <input type="text" placeholder="请输入账号" v-model="username">
                    </div>
                    <div class="group">
                        <p>密码</p>
                        <input type="password" placeholder="请输入密码" v-model="password">
                    </div>
                    <div class="group">
                        <p>确认密码</p>
                        <input type="password" placeholder="请确认密码" v-model="passwordConfirm">
                    </div>
                    <div class="group">
                        <p>邮箱</p>
                        <input type="text" placeholder="请输入邮箱" v-model="email">
                    </div>
                    <button class="btn" @click="goRegister">立即注册</button>
                </div>
                <a href="javascript:;"  class="need">已阅读并同意：小米 用户协议和 隐私政策</a>
            </div>
            
            <div class="footer">
                <div class="footer-link">
                    <a href="javascript:;" target="_blank">github主页</a><span>|</span>
                    <a href="javascript:;" target="_blank">掘金主页</a><span>|</span>
                    <a href="javascript:;" target="_blank">全栈项目</a><span>|</span>
                    <a href="javascript:;" target="_blank">Vue项目</a>
                </div>
                <div class="copyright">Copyright ©2019 hinsenoo All Rights Reserved.</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'register',
        data(){
            return {
                username: '',
                password: '',
                passwordConfirm: '',
                email: ''
            }
        },
        methods:{
            goRegister(){
                let errMsg = '';
                // 判断错误类型
                if(!this.username){
                    errMsg = '请输入账号';
                }else if(!this.password){
                    errMsg = '请输入密码';
                }else if(this.password != this.passwordConfirm){
                    errMsg = '两次输入密码不一致';
                }else if(!/^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/.test(this.email)){
                    errMsg = '请输入正确格式的邮箱';
                }
                if(errMsg){
                    this.$message.error(errMsg);
                    return;
                }
                this.axios.post('/user/register',{
                    username: this.username,
                    password: this.password,
                    email: this.email
                }).then(()=>{
                    this.$message.success('注册成功');
                    setTimeout(()=>this.$router.push('/login')
                    ,1000);
                })
            }
        }
    }
</script>

<style lang="scss">
    @import './../assets/scss/mixin.scss';
    .register{
        .wrapper{
            background-color: #F5F5F5;
            padding-top: 30px;
            .content{
                margin: 0 auto;
                max-width: 800px;
                min-height: 600px;
                background-color: white;
                text-align: center;
                position: relative;
                .logo{
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    background-color: #FF6600;
                    a{
                        @include bgImg(55px,55px,'/imgs/mi-logo.png',55px);
                    }
                    margin-bottom: 30px;
                }
                .title{
                    font-size: 30px;
                    font-weight: normal;
                    margin-bottom: 30px;
                }
                .form{
                    width: 250px;
                    height: 60px;
                    margin: 0 auto;
                    .group{
                        width: 100%;
                        height: 60px;
                        text-align: left;
                        margin-bottom: 10px;
                        font-size: 16px;
                        input{
                            width: 100%;
                            height: 40px;
                            padding-left: 10px;
                            border: 1px #d7d7d7 solid
                        }
                    }
                    button{
                        margin-top: 30px;
                        width: 100%;
                        height: 40px;
                    }
                }
                .need{
                    position: absolute;
                    left: 50%;
                    bottom: 30px;
                    transform: translateX(-50%);
                    color: black;
                }
            }
            .footer{
                height: 200px;
                padding-top: 60px;
                color: #999999;
                font-size: 16px;
                text-align: center;
            .footer-link{
                a{
                    color: #999999;
                    display: inline-block;
                }
                span {
                    margin: 0 10px;
                }
                .copyright{
                    margin-top: 13px;
                }
            }
        }
        }
    }
</style>