<template>
  <v-layout wrap style="height: 200px">
    <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
      <!--$storeストアにdrawerにアクセス-->
      <v-list class="pa-1">
        <v-list-item avatar>
          <img v-if="photoURL" :src="photoURL" />
          <v-list-item-content>
            <v-list-item-title>{{ userName }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list-item v-for="item in items" :key="item.title" :to="item.link">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      items: [
        { title: "ホーム", icon: "mdi-home", link: { name: "memory" } },
        { title: "ホーム", icon: "mdi-account", link: { name: "" } },
        { title: "ホーム", icon: "mdi-account", link: { name: "video" } },
        { title: "学習記録", icon: "mdi-account", link: { name: "memory" } },
      ],
    };
  },
  computed: {
    //userName,photoURLを呼び出し。
    ...mapGetters(["userName", "photoURL"]),
  },
};
</script>