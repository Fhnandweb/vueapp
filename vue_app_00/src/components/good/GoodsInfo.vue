<template>
  <div class="app-goodsinfo">
    
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					<swipe-box :list="list"></swipe-box>
          <p>生而竞技</p>
					</div>
				</div>
			</div>
 <!-- //////////////////      -->
    <div class="mui-card">
				<div class="mui-card-header">绝地求生</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
              市场价:<del>98</del> 销售价:<span class="now">78</span></p>
            <p>购买数量</p>
            <div class="mui-numbox">
					<button class="mui-btn mui-btn-numbox-minus" type="button" @click="goodSub">-</button>
					<input class="mui-input-numbox" type="number"  value="0" v-model="val"/>
					<button class="mui-btn mui-btn-numbox-plus" type="button" @click="goodAdd">+</button>
				</div>
					</div>
				</div>
        <div class="mui-card-footer">
           <mt-button type="primary">立即购买</mt-button>
           <mt-button type="danger" @click="addCart">加入购物车</mt-button>
        </div>
         
			</div>
     
<!-- // //////////////////// -->
      <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号:11</p>
            <p>商品货号:11</p>
            <p>商品货号:11</p>
            <p>商品货号:11</p>
					</div>
				</div>
				<div class="mui-card-footer">
          <span>图文介绍</span>
          <span>商品评论</span>
        </div>
			</div>
  </div>
</template>
<script>
import swipe from "../sub/swipe.vue"
import {Toast} from "mint-ui"
///引入mui.js
  export default{
   created(){
    this.getImage()
   },
   data(){
      return{
        nid:this.$route.params.id,
        list:"",
        val:0
      }
    },
    methods:{
      addCart(){
        var uid=3;
        var pid=this.nid;
        var count=this.val;
        //发送请求
        var url="http://127.0.0.1:3000/addCart?pid="+pid+"&count="+count+"&uid="+uid;
        this.axios.get(url).then(result=>{
          //console.log(result)
          if(result.data.code==1){
            //修改全局共享数据cartCount
            this.$store.commit("increment",count);
            Toast("购物车添加成功")
          }else{
            Toast("购物车添加失败")
          }
        })
      },
      getImage(){
        var url="http://127.0.0.1:3000/imagelist";
        this.axios.get(url).then(result=>{
          this.list=result.data
        })
      },
      goodSub(){
        this.val--;
        if(this.val<0){
          this.val=0
        }
      },
      goodAdd(){
        this.val++;
         if(this.val>=999){
          this.val=999;
        }
      },
      
    },
    components:{
      "swipe-box":swipe
    }
  }
</script>
<style>
  .now{
    color: #f00;
    font-size: 20px
  }
</style>