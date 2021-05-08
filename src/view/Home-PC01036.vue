<template>
  <v-container text-xs-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1 class="main_ttl">English Tube</h1>
        <p>
          English-Siteをご利用の方は、新規会員登録もしくはGoogleアカウントでログインをお願いします。
        </p>
      </v-flex>
      <v-flex>
        <!--googleアカウントログイン機能呼び出し-->
        <v-btn color="info" @click="login">Googleアカウントでログイン</v-btn>
      </v-flex>
      <v-flex>
        <!--ログイン機能-->
        <div class="container">
          <h2>メールアドレス、パスワードでログイン</h2>
          <form class="login_form">
            <div class="input_group">
              <label for="email">メールアドレス</label>
              <input
                type="email"
                id="email"
                v-model="email"
                placeholder="メールアドレス"
              />
              <!--v-modelで結びつける-->
            </div>
            <div class="input_group">
              <label for="password">パスワード</label>
              <input
                type="password"
                id="password"
                v-model="password"
                placeholder="パスワード"
              />
              <!--v-modelで結びつける-->
            </div>
            <v-btn color="info" @click="signin">ログイン</v-btn>
          </form>
        </div>
        <!--新規会員登録機能-->
        <div class="container">
          <h2>今すぐ登録</h2>
          <RouterLink to="/signup">
            <v-btn color="info">新規会員登録</v-btn>
          </RouterLink>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// webpackのalias、@componentsでpathの一部として設定できる。
// 別のモジュールから関数やオブジェクトを読み込む時にimportを使用する。
// import 読み込んだオブジェクトを参照する変数名 from 読み込むモジュールのパス
import { mapActions } from "vuex";

//firebase ログイン機能の実装
import firebase from "firebase";

// export defultでそのモジュールが別のモジュールから読み込まれた時に返す内容を定義
export default {
  name: "signin",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
    signin: function () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("アカウントにログインしました");
          this.$router.push("/video");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
  //mapActionsを利用してstore.jsのlogin()メゾットを呼び出す。
};
</script>

<style scoped lang="scss">
.text-xs-center {
  text-align: center;
  .main_ttl {
    font-size: 3rem;
  }
}
</style>