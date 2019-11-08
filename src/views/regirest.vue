<template>
    <div class="regirest">
        <div class="header">
            <p><span>back</span>圈子注册</p>
        </div>
        <div class="main">
            <input type="text" placeholder="用户名" v-model="username">
            <input type="text" placeholder="登录密码" v-model="userpwd">
            <button @click="regirest">注册</button>
        </div>
    </div>
</template>
<script>
// import {regirest} from '../service/index'
import {regirest} from '../service/my'
export default {
    data() {
        return {
            username:'',
            userpwd:''
        }
    },
    methods: {
        async regirest(){
            let {username,userpwd}=this;
            let res=await regirest({userName:username,userPwd:userpwd})
            console.log('res.....',res);
            if(res.status===200){
                console.log(1);
                this.$router.push({
                    path:"/login"
                })
            }
            // if(result&&result.data.code===0)
            // {
            //     alert(result.data.msg)
            // }else{
            //     window.history.back();
            // }
        }
    },
}
</script>
<style lang="scss" scoped>
    
</style>