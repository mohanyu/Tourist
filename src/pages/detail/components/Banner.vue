<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">
          {{this.sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe63b;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="bannerImgs"
                      v-show='showGallary'
                      @close="handleGallaryClose"
      >
      </common-gallary>
    </fade-animation>
  </div>

</template>
<!------------------------JS------------------------>

<script>
//  import CommonGallary from '../../../common/gallary/gallary.vue'
import CommonGallary from 'common/gallary/Gallary.vue'
import FadeAnimation from 'common/fade/FadeAnimation.vue'
export default{
  name: 'DetailBanner',
  components: {
    CommonGallary,
    FadeAnimation
  },
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array

  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}

</script>
<!------------------------Style------------------------>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
        color: white
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-number
        heigth: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        line-height: .32rem
        border-radius: .2rem
        font-size: .24rem
        background-color: rgba(0, 0, 0, 0.8)
        color: white
        .banner-icon
          font-size: .24rem
          color: white
</style>
