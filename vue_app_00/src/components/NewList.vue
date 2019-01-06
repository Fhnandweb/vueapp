<template>
	<div id="app-new">
		<ul class="mui-table-view">
					<li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
						<router-link :to="'/newsinfo?id='+item.id">
							<img class="mui-media-object mui-pull-left" :src="item.img_url">
							<div class="mui-media-body">
								{{item.title}}
								<p class='mui-ellipsis'><span>{{item.ctime | datetimeFilters}}</span><span>点击次数{{item.point}}</span></p>
							</div>
						</router-link>
					</li>
		</ul>
		<mt-button @click="getMore" type="primary" size="large">加载更多</mt-button>
	</div>
</template>
<script>
  export default{
    data(){
      return {
				list:[],
				pno:0,
				pageCount:1,
				pageSize:7
      }
		},
		created(){
			this.getMore();

		},
		methods:{
			getMore(){
				this.pno ++;
				var hasMove = this.pno <= this.pageCount;
				if(!hasMove){
					return;
				}
				var url="newlist?pno="+this.pno+"&pageSize="+this.pageSize;	
				this.$http.get(url).then(result=>{
					//this.list=result.body.data;
					// console.log(result.body)
						var rows = this.list.concat(result.body.data);
						// console.log(rows)
						this.list=rows;
						//
						this.pageCount=result.body.pageCount;
				})
			}
		}
	}
	
</script>
<style>
	#app-new .mui-ellipsis{
		display: flex;
		justify-content:space-between;
		font-size: 12px;
		color:black
	}

</style>
