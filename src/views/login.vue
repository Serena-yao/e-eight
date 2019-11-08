<template>
    <div class="login">
        <div class="main">
            <input type="text" placeholder="用户名" v-model="username" >
            <input type="text" placeholder="登陆密码" v-model="userpwd" id="">
            <button @click="login" >登录</button>
            <router-link to="/regirest">没有密码，快速注册</router-link>
        </div>
    </div>
</template>
<script>
import {login} from '../service/index'
export default {
    data() {
        return {
            username:'',
            userpwd:''
        }
    },
    methods: {
        async login(){
            let {username,userpwd}=this;
            let result=await login({userName:username,userPwd:userpwd});
            console.log('result',result)
            if(result&&result.data.code===1)
            {
                window.sessionStorage.setItem('isLogin','true');
                this.$router.replace('/');
            }
        },
        // checkUserName(){
        //     if(/\w{3,20}/.test(this.username)){
        //         this.$toast('请输入正确的用户名');
        //     }
        // }
    },
}
</script>
<style lang="scss" scoped>
    *{
        list-style-type: none;
        padding:0;
        margin:0;
    }
    html{
        font-size: .32rem;
    }
    html,body{
        width:100%;
        height: 100%;
    }
    .login{
        width:100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .main{
        width:100%;
        flex:1;
        input{
            width:7rem;
            height: .8rem;
            margin-left: .2rem;
            border:none;
            background: #f2f2f2;
            font-size: .32rem;
        }
        button{
            width:7rem;
            height: .8rem;
            margin-left: .2rem;
            border:none;
            background: orange;
            color:#fff;
            font-size: .32rem;
        }
        a{
            display: block;
            font-size: .28rem;
            color:#101010;
            margin-top: .3rem;
            margin-left: .2rem;
        }
    }
    
</style>