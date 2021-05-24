<template>
  <div class="artical">
    <div class="artical_main">
      <h1 class="artical_mainttl">News</h1>
    </div>
    <div id="app">
      <div class="artical_list" v-for="article in articles" :key="article.id">
        <a v-bind:href="article.url">
          <div class="artical_item">
            <div>
              <img class="artical_img" v-bind:src="article.urlToImage" />
            </div>
            <div class="artical_txtWrapper">
              <h2 class="artical_ttl">
                {{ article.title }}
              </h2>
              <div class="artical_content">
                {{ article.description }}
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"; //axiosの利用

export default {
  data: function () {
    return {
      articles: [],
    };
  },
  mounted() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c69d666dbbd84706b1cbcc3615d4be26"
      )
      .then((response) => {
        this.articles = response.data.articles;
      });
  },
};
</script>

<style scoped lang="scss">
//return https://www.sejuku.net/blog/28728
//関数内で戻り値を設定する。returnを使わずに処理を行った場合、そのまま終了となる。
//returnを使いその値を使い別の処理を続けることができる。
//例えばif構文の再利用など
//https://b1tblog.com/2019/11/03/vue-axios/
//【Vue.js】axiosについてまとめます（CORS、パラメーター）

a {
  text-decoration: none;
  color: #000;
}

.artical_main {
  width: 100vw;
  .artical_mainttl {
    padding-bottom: 35px;
    text-align: center;
    font-size: 45px;
    padding-top: 100px;
  }
}

.artical_list {
  padding-top: 20px;
  padding-left: 3vw;
  padding-right: 3vw;
  width: 95vw;
  margin: 0 auto;
  background: #fdfdfd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.22);
  border-left: solid 6px #3c60c7;
  .artical_item {
    margin-bottom: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: flex-start;
    align-items: flex-start;
    .artical_img {
      width: 24vw;
      height: auto;
    }
    .artical_txtWrapper {
      padding-left: 20px;
      .artical_ttl {
        border-bottom: 2px dotted #3c60c7;
        color: #000;
      }
      .artical_content {
        padding-top: 20px;
        color: #000;
      }
    }
  }
}

/*.artical_card {
  padding: 20px;
  max-width: 1200px;
  padding: 0px 3vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .artical_item {
    box-shadow: 0 0 15px #aaa;
    margin-bottom: 30px;
    .artical_img{
      width:24vw;
      height: auto;
    }
    .artical_ttl {
      padding: 5px;
      background-color: #aaa;
      color: #000;
    }
    .artical_content {
      padding: 5px 5px 40px 5px;
      color: #000;
    }
  }
}*/

.v-main {
  padding: 0px;
}

.layout {
  height: 150px;
}
</style>
