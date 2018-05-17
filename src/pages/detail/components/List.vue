<template>
    <div>
      <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
        <!--如果判断item下含有children属性的时候，说明它是一个多级菜单-->
      <div v-if="item.children" class="item-children">
        <!--通过组件自身的标签名来递归-->
        <detail-list :list="item.children">
        </detail-list>
      </div>
    </div>
  </div>
</template>
<!------------------------JS------------------------>

<script>
export default{
  name: 'DetailList',
  props: ['list']
}

</script>
<!------------------------Style------------------------>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .item-title-icon
    display: inline-block
    left: .06rem
    top: .06rem
    width: .36rem
    height: .36rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem
    background-size: .4rem 3rem
  .item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
  .item-children
    padding: 0 .4rem
</style>
