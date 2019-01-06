import Vue from 'vue'
import App from './App.vue'
import router from './router'
import'mint-ui/lib/style.css'


Vue.config.productionTip = false

// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'

//x引入Vuex
import Vuex from "vuex"
//x2注册Vuex组件
Vue.use(Vuex)
//创建vuex实例对象
var store = new Vuex.Store({
  state:{
    cartCount:0    //购物车数量
  },
  mutations:{
    increment(state,count){state.cartCount += count},
    substract(state){state.cartCount--},
    clear(state){state.cartCount=0}
  },
  getters:{
    optCartCount:function(state){
      return state.cartCount;
    }
  }
})
//将vuex对象注册vue对象



//引入mint-ui
import {Header,Swipe,SwipeItem,Button} from "mint-ui"
//5.注册Header组件
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Button.name,Button)
//引入axios库(VueResource)
import axios from 'axios'
//跨域保存session值
axios.defaults.withCredentials=true
//注册组件
Vue.prototype.axios=axios
//引入vue-resource库
import VueResource from "vue-resource"
//注册
Vue.use(VueResource)
//6.1: 设置请求的根路径 
Vue.http.options.root = "http://127.0.0.1:3000/";
//6:全局设置post 时候表单的数据组织格式为 
//application/x-www-form-url encoded
//将提交数据进行转码操作:
Vue.http.options.emulateJSON = true;
//7,创建日期类型过滤器
// 跨域访问保存session只选项
Vue.http.options.withCredentials=true;
//val:原先日期对象
Vue.filter("datetimeFilters",function(val){
//创建日期对象
var date=new Date(val);
//获取年月日时分秒
var y=date.getFullYear();var m=date.getMonth()+1;var d=date.getDate();
var h=date.getHours();var mi=date.getMinutes();var s=date.getSeconds();
//月日格式判断
m<10&&(m="0"+m);
d<10&&(d="0"+d);
//拼接字符串返回
return `${y}-${m}-${d}  ${h}:${mi}:${s}`
})

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
