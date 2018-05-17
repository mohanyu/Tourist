<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs"
    >
      <span class="iconfont header-abs-back">&#xe624;</span>
    </router-link>
    <div class="header-fixed"
         v-show="!showAbs"
         :style="opacityStyle"
    >
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<!------------------------JS------------------------>

<script>
export default{
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  //  利用生命周期函数activated，页面展示的时候去绑定scroll事件
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  //  页面隐藏的时候，利用生命周期函数deactivated，对scroll事件进行解绑

  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      //  console.log(scroll)
      //  获取此页面被顶部卷曲的高度
      const top = document.documentElement.scrollTop
      //  如果高度超过60 就显示fixed的顶部
      if (top > 60) {
        let opacity = top / 100
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity: opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  }
}

</script>
<!------------------------Style------------------------>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius: .4rem
    background-color: rgba(0, 0, 0, .8)
    text-align: center
    .header-abs-back
      color: #ffffff
      font-size: .4rem
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background-color: $bgColor
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: 0.63rem
      text-align: center
      font-size: .4rem
      color: #fff

</style>
