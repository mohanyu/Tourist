<template>
  <ul class="list">
    <li class="item"
        v-for="(item) of letters"
        :key="item"
        :ref="item"
        @click="handleLetterClick"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
    >
      {{item}}
    </li>
    <!--<li class="item">A</li>-->
    <!--<li class="item">B</li>-->

  </ul>
</template>
<!------------------------------------------------>
<script>
export default{
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
      //  ['A','B','C']
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0, // 用于获取offsetTop
      timer: null //  用于函数节流
    }
  },
  updatad () {
    //  获取A字符所在的距离屏幕顶部的距离（固定值）
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      //  当你手指触摸的时候
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        //  const startY = this.$refs['A'][0].offsetTop
        // 函数节流：每16ms获取一次touch的移动,减少计算，提高性能
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          //  console.log(index)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      //  当你手指结束滑动的时候
      this.touchStatus = false
    }
  }
}

</script>
<!------------------------------------------------>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    right: 0
    top: 1.58rem
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor

</style>
