<template>
  <v-app>
    <!--ここからheader-->
    <v-app-bar color="primary" dark app>
      <!--Responsive Design   [to="/" v-if="$vuetify.breakpoint.xsOnly"] -->
      <v-app-bar-nav-icon @click="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline">
        <span>EnglishTube</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-item>
          <RouterLink to="/video">
            <!--videoリンク-->
            <v-btn small text> Voice Learning </v-btn>
          </RouterLink>
          <RouterLink to="/artical">
            <!--articalリンク-->
            <v-btn small text> Article Learning </v-btn>
          </RouterLink>
        <RouterLink to="/">
          <v-btn small text>Record</v-btn>
        </RouterLink>
        <v-btn icon>
          <v-icon>mdi-github</v-icon>
        </v-btn>
        <v-item v-if="$store.state.login_user">
          <!--app.vueからstateのプロパティをアクセスする-->
          <v-btn small text @click="logout">log out</v-btn>
        </v-item>
      </v-toolbar-item>
    </v-app-bar>
    <SideNav />
    <!--ここまでheader-->

    <v-main>
      <!--ルート毎に設定したコンポーネントを表示する。-->
      <v-container fluid fill-height align-start>
        <router-view />
      </v-container>
    </v-main>
    <!--ここからfooter-->
    <v-footer>
      <span>EnglishTube</span>
    </v-footer>
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
          this.$router.push({ name: "about" }, () => {});
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