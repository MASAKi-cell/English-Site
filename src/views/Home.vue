<template>
  <div class="home">
    <addresses />
  </div>
</template>

<script>
// @ is an alias to /src
// webpackのaliasのこと、@componentsでpathの一部として設定できる。
// 別のモジュールから関数やオブジェクトを読み込む時にimportを使用する。
// import 読み込んだオブジェクトを参照する変数名 from 読み込むモジュールのパス
import Addresses from "@/components/Addresses.vue";

// export defultでそのモジュールが別のモジュールから読み込まれた時に返すデフォルトの内容を定義するもの
export default {
  name: "Home",
  components: {
    Addresses,
  },
};
</script>
