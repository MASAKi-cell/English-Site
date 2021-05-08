<template>
  <div class="main">
    <div class="main_inner">
      <h1 class="main_ttl">ログイン</h1>
      <form class="main_form">
        <div class="main_input">
          <label for="email">メールアドレス</label>
          <input type="email" id="email" v-model="email" />//v-modelで結びつける
        </div>
        <div class="main_input">
          <label for="password">パスワード</label>
          <input
            type="password"
            id="password"
            v-model="password"
          />//v-modelで結びつける
        </div>
        <div class="main_input">
          <button type="button" @click="register()">新規登録</button
          >//クリックしたらregister()が発火
        </div>
      </form>
    </div>
  </div>
</template>

<script>
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
</script>

<style scoped lang="sass">
.main
  max-width: 600px

  &_inner
    margin: 0 auto
</style>