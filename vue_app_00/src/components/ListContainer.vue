<template>
 <div class="app-list">
   <h3>数据列表</h3>
   <ul>
     <li v-for="item in list" :key="item.uid">
       {{item.uid}}--{{item.uname}}
     </li>
   </ul>
 </div>
</template>
<script>
  export default {
    data(){
      return {
        list:[
          {uid:1,uname:"Tom"},
          {uid:2,uname:"Yom"},
          {uid:3,uname:"Zom"}
          ]
      }
    }
  }
</script>
<style>
 
</style>