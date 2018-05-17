<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩/主题</div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont">&#xe6c5;</span>
      </div>
    </router-link>

  </div>
</template>

<script>
import { mapState } from 'vuex'
//  import { mapGetters } from 'vuex'
export default{
  name: 'HomeHeader',
  computed: {
    //  将city计算属性映射到city之中
    ...mapState({
      city: 'city'
    })
    //  类似于计算属性
    //  ...mapGetters(['doubleCity'])
  }
  //  props: {
  //  city: String
  //  }

}

</script>

<style lang="stylus" scoped>
  //scoped仅对当前组件有效，不会影响其他组件
  //样式之中引入样式用@import
  /*@import '../../../assets/styles/varibles.styl'*/
  @import '~styles/varibles.styl'
  .header
    display flex
    line-height: $headerHeight
    background-color: $bgColor
    color: #fff

    .header-left
      width:.64rem
      float:left

    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      background-color: #fff
      -webkit-border-radius: .1rem
      -moz-border-radius: .1rem
      border-radius: .1rem
      margin-left: .2rem
      color: #cccccc

    .header-right
      min-width: 1.04rem
      padding: 0 0.1rem
      float:right
      text-align: center
      color: white

</style>
