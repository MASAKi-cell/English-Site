<template>
  <v-toolbar dense>
    <v-app>
      <v-app-bar app color="primary" dark>
        <v-toolbar-side-icon @click="toggleSideMenu"></v-toolbar-side-icon>
        <v-toolbar-title class="headline text-uppercase">
          <span>英語学習サイト</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn small></v-btn>
        <v-btn small></v-btn>
        <v-btn icon>
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </v-app-bar>
      <SideNav />
      <v-main> </v-main>
    </v-app>
  </v-toolbar>
</template>

<script>
import { mapActions } from 'vuex'
import SideNav from "./components/SideNav.vue";
export default {
  name: "App",
  components: {
    SideNav,
  },
  data: () => {
    //
  },
    methods: {
    ...mapActions([
      "toggleSideMenu", //sidemenu
      "setLoginUser", //login
      "logout", //logout
      "deleteLoginUser", //loginを削除
      "fetchAddresses",
    ]),
  },
};
</script>
