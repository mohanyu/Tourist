<template>
  <div class="wrapper">
    <!--当axios传递过来的数组是空时，list.length为0(false)
    以下的标签将不会显示，更不会循环，这样写不优雅，尽量别在标签页中出现逻辑性的代码，还是使用methods吧-->
    <!--<swiper :options="swiperOption" v-if="list.length">-->
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item in list" :key="item.id">
        <img
          class="swiper-img"
          v-bind:src="item.imgUrl" >
      </swiper-slide>

      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: true

      }
    }
  },
  methods: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 31.25%
    background-color: #eeeeee
    .swiper-img
      width:100%
</style>
