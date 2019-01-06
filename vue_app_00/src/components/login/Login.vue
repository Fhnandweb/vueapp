<template>
  <div class="app-login">
    <div class="mui-card">
				<div class="mui-card-header">登录</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <!-- <form action="#"> -->
              <span>用户名:</span><input type="text" v-model="uname" value="" placeholder="请输入用户名">
              <span>密 码:</span><input type="password" v-model="upwd" value="" placeholder="请输入密码">
              <mt-button @click="handleLogin" type="primary" size="large">登录</mt-button>
            <!-- </form> -->
					</div>
				</div>
				<div class="mui-card-footer">{{uname}}</div>
			</div>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
  export default{
    data(){
      return{
        uname:"",
        upwd:""
      }
    },
    methods:{
      handleLogin(){
        //获取参数
        var u=this.uname;
        var p=this.upwd;
      //  var url="login?uname="+u+"&upwd="+p;
      //  this.$http.get(url).then(result=>{
      //     console.log(result.body)
      //     var obj=result.body;
      //     if(obj.code==-1){
      //       Toast(obj.msg)
      //     }else{
      //       this.$router.push("/home")
      //     }
      //   })
        //换兼容性好的axios
        var url="http://127.0.0.1:3000/login?uname="+u+"&upwd="+p;
        this.axios.get(url).then(result=>{
          //  console.log(result)
           if(result.data.code==-1){
            Toast(result.data.msg)
          }else{
            this.$router.push("/home")
          }
          }
        )
      }
    }
  }
</script>
<style>
  
</style>