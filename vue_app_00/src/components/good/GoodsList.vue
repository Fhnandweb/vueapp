<template>
  <div class="app-goodslist">
    <div class="goods-item" v-for="item in list">
      <img :src="item.img_url" @click="jumpDetail" :data-id="item.id" />
      <h3 class="title">{{item.title}}</h3>
      <div class=info>
        <div class="price">
          <span class="now">{{item.new}}</span>
          <span class="old">{{item.old}}</span>
        </div>
      </div>
      <div class="sell">
        <span>热卖中</span>
        <span>仅剩 1 件</span>
      </div>
    </div>
   
  </div>
</template>
<script>
  export default{
    data(){
      return {
        list:[]
      }
    },
    methods:{
      getMore(){
        var url="http://127.0.0.1:3000/goodslist";
        this.$http.get(url).then(result=>{
          this.list=result.body;
          // console.log(result.body)
        })
      },
    jumpDetail(even){
      // console.log(even)
      var id=even.target.dataset.id;
      this.$router.push("/goodsinfo/"+id)
    }
    },
    created(){
      this.getMore()
    }
  }
</script>
<style>
  .app-goodslist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 7px;
  }
  .app-goodslist .goods-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 40px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    min-height: 210px;
    justify-content: space-around
  }
  .app-goodslist .goods-item h3{
    font-size: 18px;
  }
  .app-goodslist .goods-item img{
    width: 100%
  }
  .app-goodslist .goods-item .now{
    color:#f00;font-weight: bold;
    font-size: 25px;
  }
   .app-goodslist .goods-item .old{
    font-size: 16px;
    text-decoration: line-through
  }
</style>
