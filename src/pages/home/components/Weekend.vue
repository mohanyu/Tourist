<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="(item) in list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img"
               :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<!------------------------------------------------>

<script>
export default{
  name: 'Weekend',
  props: {
    list: Array
  }
//  data () {
//    return {
//      recommendList: [{
//        id: '001',
//        title: '古水北镇',
//        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
//        desc: '京师以北，千年古镇！'
//      }, {
//        id: '002',
//        title: '古水北镇',
//        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
//        desc: '京师以北，千年古镇！'
//      }, {
//        id: '003',
//        title: '古水北镇',
//        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
//        desc: '京师以北，千年古镇！'
//      } ]
//    }
//  }
}

</script>
<!------------------------------------------------>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipse()
    .item-desc
      line-height: .4rem
      ellipse()

</style>
