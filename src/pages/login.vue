<template>
    <div class="login">
        <div class="container">
            <a href="/#/index"><img src="/imgs/login-logo.png" alt=""></a>
        </div>
        <div class="wrapper">
            <div class="container">
                <div class="container">
                    <div class="login-form">
                        <h3>
                            <span class="checked">帐号登录</span>
                            <span class="sep-line">|</span>
                            <span>扫码登录</span>
                        </h3>
                        <div class="input">
                            <input type="text" placeholder="请输入帐号" v-model="username">
                        </div>
                        <div class="input">
                            <input type="password" placeholder="请输入密码" v-model="password">
                        </div>
                        <div class="btn-box">
                            <a class="btn" @click="login">登录</a>
                        </div>
                        <div class="tips">
                            <div class="sms">手机短信登录/注册</div>
                            <div class="reg"><a href="/#/register">立即注册</a><span>|</span>忘记密码?</div>
                        </div>
                    </div>
                </div>
            </div>
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
</template>
<script>
    import { mapActions } from 'vuex'; 
    export default {
        name: 'login',
        data(){
            return {
                username: '',
                password: '',
                userId: '',
            }
        },
        created(){
            this.keyupSubmit();
        },
        methods:{
            login(){
                let errMsg = '';
                // 判断错误类型
                if(!this.username){
                    errMsg = '请输入账号';
                }else if(!this.password){
                    errMsg = '请输入密码';
                }
                if(errMsg){
                    this.$message.error(errMsg);
                    return;
                }
                // 解构
                let {username, password} = this;
                this.axios.post('/user/login',{
                    username,
                    password
                }).then((res)=>{
                    this.$cookie.set('userId',res.id,{expires: 'Session'});
                    // 派发 触发 action 存储
                    // Vuex 派发 方法一：
                    // this.$store.dispatch('saveUserName',res.username);
                    this.saveUserName(res.username);
                    // 路由 get（query）传参 
                    // this.$router.push({
                    //     路由路径
                    //     path: '/index',
                    //     query: {
                    //         from: 'login'
                    //     }
                    // });
                // })
                    // 路由 post（params）传参 
                    this.$router.push({
                        // 路由名称
                        name: 'index',
                        params: {
                            from: 'login'
                        }
                    });
                })
            },
            // 监听回车事件
            keyupSubmit(){
                document.onkeydown=()=>{
                    let _key=window.event.keyCode;
                    if(_key===13){
                    this.login();
                    }
                }
            },
            // Vuex 派发 方法二： => saveUsername()
            ...mapActions(['saveUserName']),
        }
    }
</script>
<style lang="scss">
    .login{
        &>.container{
            height: 113px;
            img{
                width: auto;
                height: 100%;
            }
        }
        .wrapper{
        background: url('/imgs/login-bg.jpg') no-repeat center;
            .container{
                height: 576px;
                position: relative;
                .login-form{
                    box-sizing: border-box;
                    padding-left: 31px;
                    padding-right: 31px;
                    width: 410px;
                    height: 510px;
                    background-color: #ffffff;
                    position: absolute;
                    bottom: 29px;
                    right: 0;
                    h3{
                        line-height: 23px;
                        font-size: 24px;
                        text-align: center;
                        margin: 40px auto 49px;
                        .checked{
                            color: #FF6600;
                        }
                        .sep-line{
                            margin: 0 32px;
                        }
                    }
                    .input{
                        display: inline-block;
                        width: 348px;
                        height: 50px;
                        border: 1px solid #E5E5E5;
                        margin-bottom: 20px;
                        input{
                            width: 100%;
                            height: 100%;
                            border: none;
                            padding: 18px;
                        }
                    }
                    .btn{
                        width: 100%;
                        line-height: 50px;
                        margin-top: 10px;
                        font-size: 16px;
                    }
                    .tips{
                        margin-top: 14px;
                        display: flex;
                        justify-content: space-between;
                        font-size: 14px;
                        cursor: pointer;
                        .sms{
                            color: #FF6600;
                        }
                        .reg{
                            color: #999999;
                            span{
                                margin: 0 7px;
                            }
                        }
                    }
                }
            }
        }
        .footer{
            height: 100px;
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
</style>