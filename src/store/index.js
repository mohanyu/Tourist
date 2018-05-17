import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  //  actions  state 和外部传来的city参数
  //  借助ctx可以拿到commit这个方法

  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },

  //  mutations有两个参数  state 和外部传来的city参数
  //  执行此方法需要调用commit 释义：承诺保证
  //  state指的是所有的公用数据
  mutations: mutations, //  mutations 释义：变动！
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
