<template>
  <div class="app-comment">
   <h3>评论子组件</h3>
   <textarea v-model="msg" placeholder="请吐槽,限制120字" maxlength="120"></textarea>
   <mt-button size="large" @click="postComment">发表评论</mt-button>
   <div class="cmt-list">
     <div	class="cmt-item" v-for="item in list" >
       <div class="cmt-info">
         第 {{item.id}} 楼: 用户名:{{item.user_name}}
         <p>发表时间:{{item.ctime | datetimeFilters}}</p>
         <div class="cmt-body">
           ---{{item.content}}
         </div>
       </div>
     </div>
   </div>
   <mt-button @click="getMore" type="primary" size="large">加载更多</mt-button>
  </div>
</template>
<script>
import {Toast} from "mint-ui"
  export default{
    created() {
      this.getMore()
    },
    methods:{ 	 
      getMore(){
        var nid=this.id;
        this.pno ++;
        var pno=this.pno;
        var pageSize=this.pageSize;
				var hasMove = this.pno <= this.pageCount;
				if(!hasMove){
					return;
				}
        var url=`getcomment?nid=${nid}&pno=${pno}&pageSize=${pageSize}`;
        this.$http.get(url).then(result=>{
            //console.log(result)
          var rows=this.list.concat(result.body.data);
          this.list=rows;
          // console.log(this.list)
          this.pageCount=result.body.pageCount;
        })
      },
      postComment(){
        var msg=this.msg;
        var nid=this.id;
        // var user_name="nieming";
        // console.log("msg:"+msg+"nid:"+nid)
        var size=msg.trim().length;
        if(size==0){
          Toast("评论不能为空");
          return;
        }
        //
        // var url="addcomment";
        // var obj={nid:nid,user_name:user_name,content:msg};
        // this.$http.post(url,obj).then(result=>{
        //   console.log(result);
        //   var obj=result.body;
        //   if(obj.code==1){
        //     Toast("评论发表成功");
        //     this.pno=0;
        //     this.data=[];
        //     this.getMore();
        //   }else{
        //     Toast("评论发表失败")
        //   }
        // })
        var url="http://127.0.0.1:3000/addcomment";
        var param=`nid=${nid}&content=${msg}`;
        this.axios.post(url,param).then(result=>{
          //console.log(result);
          //console.log(result.body)
          if(result.data.code==1){
            Toast("评论发表成功");
            this.pno=0;
            this.data=[];
            this.getMore();
          }else{
            Toast("评论发表失败")
          }
        })
        this.msg=""
      }
    },
    data(){
      return {
        list:[],
        pno:0,
        pageSize:7,
        pageCount:1,
        // nid:this.$route.query.id,
        msg:"",
        user_name:""
      }
    },
     props:["id"]
  }
</script>
<style>
  .app-comment h3{
    font-size: 18px;
  }
  .app-comment textarea{
    font-size: 14px;
    height:80px;
    margin: 0;
  }
  .app-comment .cmt-list{
    margin: 5px 0;
  }
  /* .app-comment .cmt-list .cmt-item{
    /* border: 1px solid #000; 
  } */
  .app-comment .cmt-list .cmt-info{
    margin-top: 5px;
    line-height: 30px;
    background: #ccc;
  }
</style>