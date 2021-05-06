<template>
  <div class="main">
    <div class="main_inner">
      <div class="main_inner_ttl">
        <h1 class="main_ttl">新規会員登録</h1>
        <img class="card_img" src="../assets/sub_icon01.jpg" />
      </div>
      <form class="main_form">
        <div class="main_input form-fieldset ui-input">
          <label for="email"></label>
          <input
            type="email"
            placeholder="メールアドレス"
            id="email"
            v-model="email"
          />
          <!--v-modelで結びつける-->
        </div>
        <div class="main_input form-fieldset ui-input">
          <label for="password"></label>
          <input
            type="password"
            placeholder="パスワード"
            id="password"
            v-model="password"
          />
          <!--v-modelで結びつける-->
        </div>
        <div class="main_input">
          <button type="button" @click="signUp" class="btn">新規登録</button>
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

<style scoped lang="scss">
$base-font-family: "Avenir Next", "Avenir", "Helvetica Neue", Helvetica, Arial,
  sans-serif;

@mixin animated($time: 300ms, $fillmode: both, $count: 1) {
  animation-duration: $time;
  animation-fill-mode: $fillmode;
  animation-iteration-count: $count;
}

$bezier: cubic-bezier(0.215, 0.61, 0.355, 1);
$time: 300ms;

.main {
  font-family: $base-font-family;
  background: #fafafa;
  margin: 0 auto;
  text-align: center;
  .main_inner_ttl {
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: flex-start;
    align-items: flex-end;
    .card_img {
      margin-top: 50px;
      width: 20vw;
      height: auto;
    }
    .main_ttl {
      color: #000;
      font-weight: 500;
      letter-spacing: 4px;
      text-align: left;
      margin-bottom: 20px;
    }
  }
}
.main_input {
  margin-bottom: 2rem;
  text-align: left;
}
.main_input input {
  background: #fafafa;
  border: none;
  border-bottom: 2px solid #e9e9e9;
  color: #666;
  font-size: 1em;
  height: 50px;
  transition: border-color 0.3s;
  width: 90vw;
}
.main_input input:focus {
  border-bottom: 2px solid #3c60c7;
  outline: none;
}

.btn {
  border: 0;
  background-color: #235180;
  padding: 10px 50px;
  font-size: 14px;
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: 0.0875em;
  font-weight: 500;
  color: #ffffff;
  outline: 0;
  margin-top: 20px;
  transition: background-color $time $bezier, color $time $bezier;
}

.btn:focus,
.btn:active,
.btn:hover {
  background-color: #235180;
  color: white;
}
</style>