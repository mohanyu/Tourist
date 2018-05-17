<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :cities="cities"
      :hot="hotCities"
      :letter="letter"
    ></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>

  </div>
</template>
<!------------------------------------------------>

<script>
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'

import axios from 'axios'
export default{
  name: 'city',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  //  数据初始化
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () { //  使用这个方法去发送ajax请求
      axios.get('/api/city.json')
      //  axios.get的返回值是一个promise，Promise 实例生成以后，可以用then 方法分别指定resolved状态和rejected状态的回调函数。
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) { //  判断一下接受结果
      //  console.log(res)
      res = res.data
      if (res.ret && res.data) {
        // ret = return返回结果，多用在函数返回结果,res = resource资源，多用在ajax返回的结果
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }

  },
  mounted () { // 利用生命周期函数（挂载完成后执行）getcityinfo函数
    this.getCityInfo()
  }
}

</script>
<!------------------------------------------------>

<style lang="stylus" scoped>

</style>
