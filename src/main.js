import Vue from "vue";
import App from "./App.vue";
import router from "./router"; //routerをインポート
import store from "./store"; //storeをインポート
import vuetify from './plugins/vuetify'; //vuetifyをインポート


Vue.config.productionTip = false;
// ストアというデータの入れ物を作り、各コンポーネントからストアにアクセスしてデータの出し入れを行う。
//vue-routerとApp.vueをimportしている。
//vue-routerがページを振り分ける(画面の切り替え作業をしてくれる。)
//どのページでも共通に使うような部品(メニューやフッター)はApp.vueに書いておく。

//render関数はtemplateタグと同様にhtml文をブラウザに表示させることができる関数
/*
 var app = new Vue({
   el: '#app',
   data: {
     message: 'Hello World'
   },
   render: function(createElement){
     return createElement('h1',this.message)
   }
 })
*/

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
