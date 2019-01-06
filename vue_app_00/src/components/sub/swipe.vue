<template>
  <div class="app-swipe">
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in list" :key="item.id">
        <img :src="item.img_url" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        list:[]
      }
    },
    created(){
      this.getMore()
    },
    // props:["list"],
    methods:{
      getMore(){
        this.$http.get("imagelist").then(result=>{
          // console.log(result)
          this.list=result.body
        })
      }
    }
  }
</script>
<style>
  .app-swipe .mint-swipe{
    /* margin-top: 40px; */
    height:160px;
  }
  .app-swipe .mint-swipe img{
    width: 100%;
  }
</style>