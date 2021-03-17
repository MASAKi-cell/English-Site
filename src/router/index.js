import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//VueとVue-routerのライブラリをインポートしている
//Vue-routerの機能を有効化している。
//Homeは先にimportされている。
//about.vueはcomponentで返す様にして、そのリンクがclickされて始めて
//動作するようにすれば、サーバーの負担が軽くなる。(画面の表示に時間がかからなくなる。)
//webpackChunkNameは 複数のファイルをまとめて一つのファイルに作成出来る。
// App.vueでナビゲーションを表示する。

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

//modeはパスの持ち方を定義している。
//historyの場合は通常の/でpathを定義する。
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
