import Vue from 'vue'
import Router from 'vue-router'
//  import HelloWorld from '@/components/HelloWorld'
//  @代表根目录
import Home from '../pages/home/Home.vue'
import City from '../pages/city/City.vue'
import Detail from '../pages/detail/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/', //  当用户访问根路径时，展示以下组件
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }],
  /* 每次做路由切换的时候，新进入的页面x轴和y轴的初始位置都是0 */
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
