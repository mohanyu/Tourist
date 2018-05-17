<template>
  <div class="icons">
    <!-------1------>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon"
             v-for="item in page"
             v-bind:key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<!------------------------------------------------>
<script>
export default{
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        //  禁止自动滚动
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        //  根据index决定在第几页（0页?1页？）
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
  //  data () {
//    return {
//      iconList: [{
//        id: '001',
//        imgUrl: require('../../../assets/imgs/1.png'),
//        desc: '签证'
//      }, {
//        id: '002',
//        imgUrl: require('../../../assets/imgs/2.png'),
//        desc: '出境游'
//      }, {
//        id: '003',
//        imgUrl: require('../../../assets/imgs/3.png'),
//        desc: '一日游'
//      }, {
//        id: '004',
//        imgUrl: require('../../../assets/imgs/4.png'),
//        desc: '美食林'
//      }, {
//        id: '005',
//        imgUrl: require('../../../assets/imgs/5.png'),
//        desc: '汽车票'
//      }, {
//        id: '006',
//        imgUrl: require('../../../assets/imgs/6.png'),
//        desc: '国内游'
//      }, {
//        id: '007',
//        imgUrl: require('../../../assets/imgs/7.png'),
//        desc: '超级巴士'
//      }, {
//        id: '008',
//        imgUrl: require('../../../assets/imgs/8.png'),
//        desc: '攻略'
//      }, {
//        id: '009',
//        imgUrl: require('../../../assets/imgs/8.png'),
//        desc: '签证'
//      }
//      ]
//    }
//  },
}
</script>
<!------------------------------------------------>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
