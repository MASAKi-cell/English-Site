<template>
  <div class="main">
    <div class="main_inner">
      <h1 class="main_ttl">新規会員登録</h1>
      <form class="main_form">
        <div class="main_input">
          <label for="email">メールアドレス</label>
          <input
            type="email"
            placeholder="メールアドレス"
            id="email"
            v-model="email"
          />
          <!--v-modelで結びつける-->
        </div>
        <div class="main_input">
          <label for="password">パスワード</label>
          <input
            type="password"
            placeholder="パスワード"
            id="password"
            v-model="password"
          />
          <!--v-modelで結びつける-->
        </div>
        <div class="main_input">
          <button type="button" @click="signUp">新規登録</button>
          <!--axios クリックしたらSignUpが発火-->
          <!--firebase クリックしたらregister()が発火-->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
//firebase 新規会員登録機能の実装
import firebase from "firebase";
export default {
  name: "signUp",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signUp: function () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          alert("アカウントを作成しました", user.email);
          this.$router.push("/video");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};

//axiosでの新規会員登録する際のコード
/*
import axios from "../axios-for-auth.js";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      axios
        .post("/accounts:signUp?key=AIzaSyC3djUoEHS718FiTZnfTyGzz0VPPH6pkzU", {
          email: this.email,
          password: this.password,
          returnSecureToken: true, //常にture
        })
        .then((response) => {
          console.log(response);
        });
      this.email = "";
      this.password = "";
    },
  },
};
*/
</script>

<style scoped lang="sass">
.main
  max-width: 600px

  &_inner
    margin: 0 auto
</style>