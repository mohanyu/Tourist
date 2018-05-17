<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    ></detail-banner>
    <detail-header
    ></detail-header>
    <!--需要元素撑开页面宽高-->
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>
<!------------------------JS------------------------>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'
export default{
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      /* 获取jsonp文件中的detail.json中的属性名 */
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
    //  axios.get('/api/detail.json？id=' + this.$route.params.id)
      axios.get('/api/detail.json', {
        params: {id: this.$route.params.id}
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        /* 将获取的数据 */
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  //  页面加载完自动执行
  mounted () {
    this.getDetailInfo()
  }
}

</script>
<!------------------------Style------------------------>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .content
    height: 50rem

</style>
