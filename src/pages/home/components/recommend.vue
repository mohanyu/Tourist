<template>
  <!--recommend 释义：推荐-->
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="(item) in list"
        :key="item.id"
        :to="'/detail/' + item.id"
      ><!--跳转时带到detail文件夹下，和标签所属id-->
          <img class="item-img"
               :src="item.imgUrl">
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
      </router-link>

    </ul>
  </div>
</template>
<!------------------------------------------------>

<script>
export default{
  name: 'HomeRecommend',
  props: {
    list: Array
  }

//  data () {
//    return {
//      recommendList: [{
//        id: '001',
//        title: '古水北镇',
//        imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/c8/c88bb5e69c9a9c5ea3.img.jpg_200x200_740720ff.jpg',
//        desc: '京师以北，千年古镇！'
//      }, {
//        id: '002',
//        title: '古水北镇',
//        imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/c8/c88bb5e69c9a9c5ea3.img.jpg_200x200_740720ff.jpg',
//        desc: '京师以北，千年古镇！'
//      }, {
//        id: '003',
//        title: '古水北镇',
//        imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/c8/c88bb5e69c9a9c5ea3.img.jpg_200x200_740720ff.jpg',
//        desc: '京师以北，千年古镇！'
//      }, {
//        id: '004',
//        title: '古水北镇',
//        imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/c8/c88bb5e69c9a9c5ea3.img.jpg_200x200_740720ff.jpg',
//        desc: '京师以北，千年古镇！'
//      }]
//    }
//  }
}

</script>
<!------------------------------------------------>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin-top: .2rem
  line-height: .8rem
  background: #eee
  text-indent: .2rem
.item
  display: flex
  height: 1.9rem
  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: .1rem
  .item-info
    flex: 1
    padding: .1rem
    min-width: 0
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipse()
    .item-desc
      line-height: .4rem
      ellipse()
    .item-button
      line-height: .44rem
      margin-top: .16rem
      background-color: #ff9300
      padding: 0 0.2rem
      border-radius: .06rem
      color: #fff
</style>
