<template>
  <div class="app-search">
    <div class="mui-card">
     
				<div class="mui-card-header">
          <div>关键字: <input type="text" name="keyword" value="" v-model="keyword"></div>  
        </div>
        <div class="mui-card-header">
          <span>价格上限: <input type="text" name="high" value="" v-model="high"></span> 
           <span>价格下限: <input type="text" name="low"  value="" v-model="low"></span> 
        </div>
        <div class="mui-card-header">
          <mt-button @click="handleSearch" size="large" type="primary">搜素</mt-button>
        </div>
        
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            
            <ol>
              <li v-for="item in list">{{item.lname}}---价格￥{{item.price}}</li>
            </ol>
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
			</div>
    
  </div>
</template>
<script>
import {Toast} from "mint-ui"
  export default{
    data(){
      return{
        keyword:"",
        low:"",
        high:"",
        list:[]
      }
    },
    methods:{
      handleSearch(){
        var keyword=this.keyword;
        var low=this.low;
        var high=this.high;
        if(high==""){
          high=2100000000;
        }
         if(low==""){
          low=0;
        }
        var url="http://127.0.0.1:3000/search?keyword="+keyword+"&low="+low+"&high="+high;
        this.axios.get(url).then(result=>{
          console.log(result)
          if(result.data.code==-1){
            Toast("2")
          }
          this.list=result.data.data;
        })
      }
    }
  }
</script>
<style>

</style>
