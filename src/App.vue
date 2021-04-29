<template>
  <v-app class="v-app">
    <!--ここからheader-->
    <v-app-bar color="#3c60c7" dark app style="z-index:10000;">
      <!--Responsive Design   [to="/" v-if="$vuetify.breakpoint.xsOnly"] -->
      <v-app-bar-nav-icon @click="toggleSideMenu" to="/" v-if="$vuetify.breakpoint.xsOnly"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline">
        <RouterLink to="/">
          <span>StudyTube</span>
        </RouterLink>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-item>
        <RouterLink to="/signin" v-if="$vuetify.breakpoint.smAndUp">
          <!--articalリンク-->
          <v-btn small text> ログイン </v-btn>
        </RouterLink>
        <RouterLink to="/signup" v-if="$vuetify.breakpoint.smAndUp">
          <v-btn small text>新規会員登録</v-btn>
        </RouterLink>
        <v-item v-if="$store.state.login_user">
          <RouterLink to="/video" v-if="$vuetify.breakpoint.smAndUp">
            <!--videoリンク-->
            <v-btn small text> 動画検索 </v-btn>
          </RouterLink>
        </v-item>
        <v-item v-if="$store.state.login_user">
          <RouterLink to="/memory" v-if="$vuetify.breakpoint.smAndUp">
            <!--videoリンク-->
            <v-btn small text> 学習記録 </v-btn>
          </RouterLink>
        </v-item>
        <v-item v-if="$store.state.login_user">
          <!--app.vueからstateのプロパティをアクセスする-->
          <v-btn small text @click="logout">ログアウト</v-btn>
        </v-item>
        <a href="https://github.com/MASAKi-cell/Study-Tube" target="_blank" v-if="$vuetify.breakpoint.smAndUp">
          <v-btn icon>
            <v-icon>mdi-github</v-icon>
          </v-btn>
        </a>
      </v-toolbar-item>
    </v-app-bar>
    <SideNav />
    <!--ここまでheader-->

    <v-main style="padding: 0px">
      <!--ルート毎に設定したコンポーネントを表示する。-->
      <v-container fluid fill-height align-start>
        <router-view />
      </v-container>
    </v-main>
    <!--ここからfooter-->
    <!--
    <v-footer>
      <span>Study-Tube</span>
    </v-footer>
    -->
    <!--ここまでfooter-->
  </v-app>
</template>

<script>
import firebase from "firebase";
import SideNav from "./components/SideNav";
import { mapActions } from "vuex";
//stateにアクセスする場合、mapstateをインポートする。(mapstateヘルパー利用)
//actionを実行する場合はdispatchを使うが、mapActionをimportし
//mapAction(['~'])を使えば効率的になる。

export default {
  //子コンポーネントからimportし、export defuault内で囲う
  name: "App",
  components: {
    SideNav,
  },
  created() {
    //firebase.auth().onAuthStateChangedメゾットで
    //ユーザーのログイン状態が変わるたびに呼び出されるメゾット。
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        //ログイン
        this.setLoginUser(user);
        this.fetchAddresses();
        if (this.$router.currentRoute.name === "home") {
          //ユーザーがログインしかつhomeの画面の場合、下記ページに移動する。
          this.$router.push({ name: "home" }, () => {});
        }
      } else {
        //ログアウトした場合、home画面に移動する事ができる。
        this.deleteLoginUser();
        this.$router.push({ name: "home" });
      }
    });
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions([
      "toggleSideMenu", //sidemenu
      "setLoginUser", //login
      "logout", //logout
      "deleteLoginUser", //loginを削除
      "fetchAddresses",
    ]),
  },
};
</script>
<style scoped lang="scss">
.v-app {
  z-index: 1000;
}

a {
  text-decoration: none;
}

span {
  color: #fff;
  text-align: center;
  margin: 0 auto;
}
</style>