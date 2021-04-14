import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Memory from "../views/Memory.vue";
import Video from "../views/Video.vue";
import Artical from "../views/Artical.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";

//Homeは先にimportされている。
//その他のページはcomponentで返す様にして、そのリンクがclickされて始めて
//動作するようにすれば、サーバーの負担が軽くなる。(画面の表示に時間がかからなくなる。)
//webpackChunkNameは 複数のファイルをまとめて一つのファイルに作成出来る。
// App.vueでナビゲーションを表示する。
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home, // viewsフォルダ内のコンポーネント名。
  },
  {
    path: "/memory",
    name: "memory",
    component: Memory,
  },
  {
    path: "/video",
    name: "video",
    component: Video,
  },
  {
    path: "/artical",
    name: "artical",
    component: Artical,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/signin",
    name: "signin",
    component: Signin,
  },
];

//modeはパスの持ち方を定義している。
//historyの場合は通常の/でpathを定義する。
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
