<template>
  <v-container>
    <div class="main_inner_ttl">
      <h1 class="main_ttl">記録</h1>
    </div>
    <v-layout justify-center>
      <v-flex xs5 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
              <v-text-field v-model="name" label="日時"></v-text-field>
              <v-text-field v-model="comment" label="内容"></v-text-field>
              <v-text-field v-model="measure" label="学習量"></v-text-field>
              <v-text-field v-model="time" label="時間"></v-text-field>
              <button class="btn" @click="createComment" color="#235180">
                保存
              </button>
              <button
                @click="$router.push({ name: 'memory' })"
                class="btn"
                color="#235180"
              >
                キャンセル
              </button>
            </v-form>
            <div v-for="post in posts" :key="post.name">
              <div>{{ post.fields.name.stringValue }}</div>
              <div>{{ post.fields.comment.stringValue }}</div>
              <div>{{ post.fields.mesure.stringValue }}</div>
              <div>{{ post.fields.time.stringValue }}</div>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "../axios-auth";

export default {
  data() {
    return {
      name: "",
      comment: "",
      mesure: "",
      time: "",
      posts: [],
    };
  },
  created() {
    //getとpostメゾットを使ってデータのやり取りをおこなう。
    //Rest APIを使用して 何が起こっているか分かりやすい。
    axios.get("/comments").then((response) => {
      this.posts = response.data.documents;
    });
  },
  methods: {
    createComment() {
      axios.post("/comments", {
        fields: {
          name: {
            stringValue: this.name,
          },
          comment: {
            stringValue: this.comment,
          },
          mesure: {
            stringValue: this.mesure,
          },
          time: {
            stringValue: this.time,
          },
        },
      });
      this.name = "";
      this.comment = "";
      this.mesure = "";
      this.time = "";
    },
  },
};
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

h1 {
  background-color: #fff;
}

.main_inner_ttl {
  .main_ttl {
    color: #000;
    font-weight: 500;
    letter-spacing: 4px;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 30px;
  }
}

.btn {
  border: 0;
  background-color: #235180;
  padding: 8px 30px;
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

.btn:first-of-type {
  margin-right: 20px;
}

.btn:focus,
.btn:active,
.btn:hover {
  background-color: #235180;
  color: white;
}
</style>
