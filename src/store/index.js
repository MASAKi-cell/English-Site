import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false
  },
  mutations: { //actionから受け取ったデータを格納する
    toggleSideMenu( state ){
      state.drawer = !state.drawer
    }
  },
  actions: { //データの取得の指示を受ける
    toggleSideMenu({ commit }){
      commit('toggleSideMenu')
      //commitメゾット、mutationのメゾットを呼び出す際に使用される。
    }
  },
  modules: { 
  }
})
