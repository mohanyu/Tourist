<template>
  <div>
    <!--<home-header :city="city"></home-header>-->
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <HomeIcons :list="iconList"></HomeIcons>
    <HomeRecommend :list="recommendList"></HomeRecommend>
    <Weekend :list="weekendList"></Weekend>
  </div>

</template>

<script>
//  引入局部组件
import HomeHeader from './components/header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/icons.vue'
import HomeRecommend from './components/recommend.vue'
import Weekend from './components/Weekend.vue'
import axios from 'axios'
import { mapState } from 'vuex'
//  import {mounted} from "../../../../../vue网易旋之华/源码/ES6、Vue/03-Vue2.x进阶篇/03-Vue-脚手架开发/资料/Lib/vue/types/options";

export default {// 导出一个对象
  name: 'Home',
  components: {//  使用局部组件
    //  HomeHeader:HomeHeader,
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    Weekend

  },
  data () {
    return {
      //  city: '',
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) { //  如果后端正确的返回了结果
        const data = res.data
        //  this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    //  console.log('mounted')
    this.lastCity = this.city
    this.getHomeInfo()
  },
  //  当我们使用keepalive标签后，我们会多出一个生命周期函数，叫做 activated
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
    console.log('activated')
  }
}
</script>

<style>
</style>
