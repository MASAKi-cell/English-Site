<template>
  <v-container text-xs-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>学習記録一覧</h1>
      </v-flex>

      <v-flex xs12 mt-5 justify-center>
        <v-data-table :headers="headers" :items="record">
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.time }}</td>
            <td class="text-xs-left">{{ props.item.text_1 }}</td>
            <td class="text-xs-left">{{ props.item.text_2 }}</td>
            <td class="text-xs-left">{{ props.item.textarea }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "日時", value: "time" },
        { text: "勉強時間", value: "text_1" },
        { text: "学習量", value: "text_2" },
        { text: "メモ", value: "textarea" },
      ],
      record: [
        {
          time: "友人１",
          text_1: "090-0000-1111",
          text_2: "sample1@mail.com",
          textarea: "東京都渋谷区",
        },
        {
          time: "友人１",
          text_1: "090-0000-1111",
          text_2: "sample1@mail.com",
          textarea: "東京都渋谷区",
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
//lang="scss"、lang="sass"をstyleに指定できる。
// scopedを定義する事で、そのコンポーネントだけにstyleを適用する事ができる。
</style>
