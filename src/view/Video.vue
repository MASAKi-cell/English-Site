<template>
  <div class="main">
    <div class="main_ttl">動画検索</div>
    <div class="main_input">
      <input class="main_inputInner" size="40" v-model="keyword" />
      <button @click="search_video" class="btn">検索</button>
    </div>
    <div cellspacing="0" cellpadding="5" v-show="results" class="main_table">
      <div v-for="movie in results" v-bind:key="movie.id.videoId">
        <!-- Video -->
        <ul class="card_list">
          <li class="card_item">
            <div>
              <a
                v-bind:href="
                  'https://www.youtube.com/watch?v=' + movie.id.videoId
                "
              >
                <img
                  class="card_img"
                  v-bind:src="movie.snippet.thumbnails.medium.url"
                />
              </a>
            </div>
            <!-- titleとdescriptionを記入 -->
            <div class="card_txtWrapper">
              <h2 class="card_txt">{{ movie.snippet.title }}</h2>
              <p class="card_txt_inner">{{ movie.snippet.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchVideo",
  data: function () {
    return {
      results: null,
      keyword: "English",
      order: "viewCount", // リソースを再生回数の多い順に並べ替え
      country: "ja",
      params: {
        q: "", // 検索クエリを指定
        part: "snippet",
        type: "video",
        maxResults: "50", // 最大検索数
        key: "AIzaSyBvqKtqgKGsiB_uFiwT8Fm060I1yQaIMa8",
      },
    };
  },
  props: {
    msg: String,
  },
  methods: {
    search_video: function () {
      this.params.q = this.keyword;
      var self = this;
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: this.params,
        })
        .then(function (res) {
          self.results = res.data.items;
        });
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

li {
  list-style: none;
}

.main {
  font-family: $base-font-family;
  width: 100vw;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: -180px;
  left: 0;
}

.main_input {
  width: 100vw;
  text-align: center;
}

.main_inputInner {
  border: 2px solid #3c60c7;
  border-radius: 3px;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-right: 30px;
}

.main_ttl {
  color: #000;
  font-weight: 500;
  letter-spacing: 4px;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
}

.main_table {
  width: 97vw;
  margin-left: 1vw;
  margin-right: 1vw;
  margin-top: 30px;
  border-collapse: collapse;
  border: solid 2px #fff; /*表全体を線で囲う*/
}

.card_list {
  padding-top: 20px;
  padding-left: 3vw;
  padding-right: 3vw;
  width: 95vw;
  margin: 0 auto;
  background: #fdfdfd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.22);
  border-left: solid 6px #3c60c7;
  .card_item {
    margin-bottom: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: flex-start;
    align-items: flex-start;
    .card_img {
      width: 24vw;
      height: auto;
    }
    .card_txtWrapper {
      padding-left: 20px;
      .card_txt {
        border-bottom: 2px dotted #3c60c7;
      }
      .card_txt_inner {
        padding-top: 20px;
      }
    }
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

.btn:focus,
.btn:active,
.btn:hover {
  background-color: #235180;
  color: white;
}
</style>
