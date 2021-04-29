<template>
  <div class="main">
    <v-flex>
      <!--ログイン機能-->
      <div class="container">
        <div class="main_inner_ttl">
          <h2 class="main_ttl">ログイン</h2>
          <img class="card_img" src="../assets/sub_icon04.jpg" />
        </div>
        <form class="main_form">
          <div class="main_input form-fieldset ui-input">
            <label for="email"></label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="メールアドレス"
            />
            <!--v-modelで結びつける-->
          </div>
          <div class="main_input form-fieldset ui-input">
            <label for="password"></label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="パスワード"
            />
            <!--v-modelで結びつける-->
          </div>
          <div class="main_input">
            <button type="button" class="btn" @click="signin">ログイン</button>
          </div>
        </form>
      </div>
      <!--googleアカウントログイン機能呼び出し-->
      <div class="main_input">
        <h2>Googleアカウントをお持ちの方</h2>
        <button class="btn" @click="login">Googleアカウントでログイン</button>
      </div>
    </v-flex>
  </div>
</template>

<script>
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

<style scoped lang="sass">
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
  background: #fafafa;
  margin: 50px auto 0;
  text-align: center;
  margin-bottom: 20px;
  .main_inner_ttl {
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: flex-start;
    align-items: flex-end;
    .card_img {
      width: 20vw;
      height: auto;
    }
    .main_ttl {
      color: #000;
      font-weight: 500;
      letter-spacing: 4px;
      font-size: 28px;
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
  font-family: $base-font-family;
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
  text-transform: capitalize;
  letter-spacing: 0.0875em;
  font-weight: 500;
  color: #ffffff;
  font-family: $base-font-family;
  outline: 0;
  margin-top: 20px;
  transition: background-color $time $bezier, color $time $bezier;
}

.btn:hover {
  background-color: #3c60c7;
  color: white;
}
</style>