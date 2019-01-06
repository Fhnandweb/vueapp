<template>
  <div class="app-home">  
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in list">
        <img :src="item.img_url" />
      </mt-swipe-item>
    </mt-swipe>
    <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/newlist">
		                    <img src="../../img/1.png" alt="">
		                    <div class="mui-media-body">新闻</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/goodslist">
		                    <img src="../../img/2.png" alt="">
		                    <div class="mui-media-body">游戏商城</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../img/3.png" alt="">
		                    <div class="mui-media-body">格斗</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../img/4.png" alt="">
		                    <div class="mui-media-body">益智</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/5.png" alt="">
		                    <div class="mui-media-body">竞速</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/6.png" alt="">
		                    <div class="mui-media-body">更多</div></a></li>
		            
		        </ul> 
		</div>
  </div>
</template>
<script>
  export default{
    created(){
      this.getImages();
    },
    methods:{
      getImages(){
        this.$http.get("imagelist").then(result=>{
          //console.log(result);
          //console.log(result.body);
          this.list=result.body
        })
        //console.log(123)
      }
    },
    data(){
      return {
        list:[]
      }
    }
  }
</script>
<style >    
    .app-home .mint-swipe{
      /* margin-top: 40px; */
      height:210px
    }
    .app-home img{
      width: 100%;
    }
    .mui-content ul img{
      width: 60px;
      height: 60px;
    }
    .app-home .mui-grid-view.mui-grid-9{
      background:#fff;
    }
    .app-home .mui-grid-view.mui-grid-9 li{
      border:0;
    }
   .app-home .mui-content>.mui-table-view:first-child{
     margin-top: 0;
   }
</style>