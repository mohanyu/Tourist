<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <!-- slides -->
        <swiper-slide
          v-for="(item, index) in imgs"
          :key="index"
        >
          <img
            class="gallary-img"
           :src='item'>
        </swiper-slide>

        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<!------------------------JS------------------------>

<script>
export default{
  name: 'CommonGallary',
  //  从父组件获取数据，imgs对象，类型必须是Array
  props: {
    imgs: {
      type: Array,
      default () {
        return []
        //  return ['http://img1.qunarzz.com/sight/p0/1412/39/1855821aedbb0cc51665814ad9e43331.water.jpg_r_800x800_5f1b84d4.jpg','http://img1.qunarzz.com/sight/p0/1709/21/21776addd29e0fca3.img.jpg_r_800x800_75c6ebf8.jpg']
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  },
  data () {
    return {
      swiperOptions: {
        //  选择DOM
        pagination: '.swiper-pagination',
        //  选择滚动tip类型（小圆点？2/11）
        paginationType: 'fraction',
        //  swiper插件监听到.swiper-pagination此元素或者父元素发生dom结构的变化，会重新刷新一次页面，以解决swiper宽度计算的问题
        observeParents: true,
        observer: true

      }
    }
  }
}

</script>
<!------------------------Style------------------------>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .container >>> .swiper-container
    overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background-color: #000
  .wrapper
    /*overflow: hidden*/
    height: 0
    width: 100%
    padding-bottom: 100%
    /*background-color: cyan*/
    .gallary-img
      width: 100%
    .swiper-pagination
      color: white
      bottom: -1rem

</style>
