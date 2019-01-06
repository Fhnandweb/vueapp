import Vue from 'vue'
import Router from 'vue-router'
import Test from "./components/Test.vue"
import NewList from "./components/NewList.vue"
import ListContainer from "./components/ListContainer.vue"
import Home from "./components/tabbar/Home.vue"
import NewsInfo from "./components/NewsInfo.vue"
import GoodsList from "./components/good/GoodsList.vue"
import GoodsInfo from "./components/good/GoodsInfo.vue" 
import Login from "./components/login/Login.vue" 
import Cart from "./components/tabbar/Cart.vue"
import Search from "./components/tabbar/Search.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:"/Home"},
    {path:'/text',component:Test},
    {path:'/list',component:ListContainer},
    {path:'/home',component:Home},
    {path:'/newlist',component:NewList},
    {path:"/newsinfo",component:NewsInfo},
    {path:"/goodslist",component:GoodsList},
    {path:"/goodsinfo/:id",component:GoodsInfo},
    {path:"/login",component:Login},
    {path:"/cart",component:Cart},
    {path:"/search",component:Search},
  ]
})
