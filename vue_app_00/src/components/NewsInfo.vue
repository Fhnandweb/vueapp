<template>
  <div class="app-info">
    <h2>新闻详情</h2>
    <h3>{{info.title}}</h3>
    <textarea></textarea>
    <h3>{{info.content}}</h3>
    <h3>{{info.ctime | datetimeFilters}}</h3>
    <h3>{{info.point}}</h3> 
     <comment-box :id="id"></comment-box>
  </div>
</template>
<script>
//引入子组件
import comment from './sub/comment.vue'

  export default{
    
    data(){
      return {
        id:this.$route.query.id,
        info:{}
      }
    },
    created(){
     this.getNewsInfo()
    },
    methods:{
      getNewsInfo(){
        var id=this.$route.query.id;
        this.$http.get("newsinfo?id="+id).then(
          result=>{
          // console.log(result.body.data[0])
           this.info=result.body.data[0]
          }
        )
      }
    },
    components:{
        "comment-box":comment
        }
  }
</script>
<style>
  h3{
    background: 0;
  }
</style>