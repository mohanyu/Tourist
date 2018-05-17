<template>

  <div class="list" ref="wrapper"><!--ref帮助我们获取dom-->
    <div>

      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
          <!--<div class="button-wrapper">-->
            <!--<div class="button">北京</div>-->
          <!--</div>-->
        </div>
      </div>
<!--------------------热门城市---------->
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="item in hot"
               :key="item.id"
               @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
          <!--<div class="button-wrapper">-->
            <!--<div class="button">北京</div>-->
          <!--</div>-->
        </div>
      </div>
<!--------------------城市列表---------->
      <div
        class="area"
        v-for="(item, key) in cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
          <div class="item-list">
            <div class="item border-buttom"
                 v-for="innerItem in item"
                 :key="innerItem.id"
                 @click="handleCityClick(innerItem.name)"
            >
              {{innerItem.name}}
            </div>
            <!--<div class="item border-buttom">阿拉尔</div>-->
            <!--<div class="item border-buttom">阿拉尔</div>-->
            <!--<div class="item border-buttom">阿拉尔</div>-->

          </div>
      </div>
    </div>

  </div>

</template>
<!------------------------------------------------>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default{
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })

  },

  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  //  利用生命周期函数
  methods: {
    handleCityClick (city) {
      //  this.$store.dispatch('changeCity', city)
      //  this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    //  监听letter的变化，变化后就执行之后的函数
    letter () {
      //  console.log(this.letter)
      if (this.letter) { //  如果letter不为空
        const element = this.$refs[this.letter][0]
        //  console.log(element);
        this.scroll.scrollToElement(element)
      }
    }
  }
}

</script>
<!------------------------------------------------>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      background-color: #ccc
    &:after
      background-color: #ccc
  .border-bottom
    &:before
      background-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
  .title
    line-height: .54rem
    background: #eeeeee
    padding-left: .26rem
    color: #666
    font-size: .26rem
  .button-list
    overflow: hidden
    padding: .1rem .6rem .1rem 0.1rem
    .button-wrapper
      width: 33.33%
      float:left
      .button
        margin: .1rem
        padding: .1rem 0
        border: .02rem solid #cccccc
        text-align: center
        border-radius: .06rem
  .item-list
    .item
      line-height: .76rem
      padding-left: .2rem

</style>
