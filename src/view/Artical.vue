<template>
  <div class="artical">
    <div class="artical_main">
      <h1 class="artical_mainttl">NewYork Times News</h1>
    </div>

    <div class="artical_card" id="app">
      <div v-for="result in results" :key="result.id">
        <div class="artical_item">
          <div class="artical_ttl">
            {{ result.title }}
          </div>
          <div class="artical_content">
            {{ result.abstract }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"; //axiosの利用

export default {
  data() {
    return {
      results: [],
    };
  },
  mounted: function () {
    axios
      .get(
        "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=lK46Cy4gqAhfajZyWrJcfqxy1XUwAj1A"
      )
      .then((response) => {
        this.results = response.data.results;
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

.artical_main {
  width: 100vw;
  .artical_mainttl {
    padding-bottom: 35px;
    text-align: center;
    font-size: 45px;
  }
}

.artical_card {
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
    .artical_ttl {
      padding: 5px;
      background-color: #aaa;
    }
    .artical_content {
      padding: 5px 5px 40px 5px;
    }
  }
}

.v-main {
  padding: 0px;
}

.layout {
  height: 150px;
}
</style>
