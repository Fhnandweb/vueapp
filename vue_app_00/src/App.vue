<template>
 <div class="app-container">
    <!-- //1顶部信息 -->
    <mt-header fixed title="游点 GAMEBASE"></mt-header>
    <!-- 2 -->
      <router-view></router-view>
      <!-- 3,bar -->
   <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item mui-active" to="/">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/login">
				<span class="mui-icon mui-icon-person"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
            <span class="mui-badge">{{$store.getters.optCartCount}}</span></span>
            <!-- <span class="mui-badge"></span> -->
				<span class="mui-tab-label" >购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜素</span>
			</router-link>
		</nav> 
 </div>
</template>

<style>
    .app-container .mui-bar .mui-tab-item .mui-badge{
       background: #f00;
       color: #fff
    }
   .app-container .mint-header{
      background: rgb(27, 26, 25);
      font-size: 15px;
    }
   .app-container{
     padding-top:40px;
     padding-bottom:50px;
     overflow-x:hidden;
   }

</style>
