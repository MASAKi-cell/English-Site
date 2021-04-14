import Vue from "vue";
import Vuex from "vuex"; //vuexのインポート
import firebase from "firebase"; //firebaseのインポート

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //dataプロパティのようなもの stateはVuexでデータを扱う時の名前
    //全てのコンポーネントから利用可能 this.$store.~で呼び出す。
    login_user: null, //login_userを格納、初期値をnullに設定
    drawer: false,
    addresses: [],
  },
  mutations: {
    //stateの更新を行うためには、mutationsを使う。
    //this.$store.commit('') commitを使ってmutationsを実行
    setLoginUser(state, user) {
      //login
      state.login_user = user;
    },
    deleteLoginUser(state) {
      //loginを削除
      state.login_user = null;
    },
    toggleSideMenu(state) {
      //sidemenu
      state.drawer = !state.drawer;
    },
    addAddress(state, { id, address }) {
      address.id = id;
      state.addresses.push(address);
    },
    updateAddress(state, { id, address }) {
      const index = state.addresses.findIndex((address) => address.id === id);

      state.addresses[index] = address;
    },
    deleteAddress(state, { id }) {
      const index = state.addresses.findIndex((address) => address.id === id);

      state.addresses.splice(index, 1);
    },
  },
  actions: {
    //actionを使ってstateを更新する。(= methods)
    //actionsはstateを直接変更するのではなく、mutationsを経由して(commit)stateを更新する
    //actionsのなかでcommitを使ってmutationsを実行し、mutationsから更新させる。
    setLoginUser({ commit }, user) {
      //login
      commit("setLoginUser", user);
    },
    login() {
      //Googleプロバイダ オブジェクトのインスタンスを作成します。
      //SignInWithRedirectを呼び出し、ログインページにリダイレクト、login()メゾットで呼び出し。
      const google_auth_provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(google_auth_provider);
    },
    deleteLoginUser({ commit }) {
      //loginを削除
      commit("deleteLoginUser");
    },
    logout() {
      //firebaseのsingOut()メゾットを呼び出す。logout
      firebase.auth().signOut();
    },
    toggleSideMenu({ commit }) {
      //sidemenu
      commit("toggleSideMenu");
    },
    fetchAddresses({ getters, commit }) {
      firebase
        .firestore()
        .collection(`users/${getters.uid}/addresses`)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) =>
            commit("addAddress", { id: doc.id, address: doc.data() })
          );
        });
    },
    addAddress({ getters, commit }, address) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/addresses`)
          .add(address)
          .then((doc) => {
            commit("addAddress", { id: doc.id, address });
          });
      }
    },
    updateAddress({ getters, commit }, { id, address }) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/addresses`)
          .doc(id)
          .update(address)
          .then(() => {
            commit("updateAddress", { id, address });
          });
      }
    },
    deleteAddress({ getters, commit }, { id }) {
      if (getters.uid) {
        firebase
          .firestore()
          .collection(`users/${getters.uid}/addresses`)
          .doc(id)
          .delete()
          .then(() => {
            commit("deleteAddress", { id });
          });
      }
    },
  },
  getters: {
    //computedプロパティと同様の動きをする。
    //Gettersにはthis.$store.gettersでアクセス、他のコンポーネントから利用可能
    userName: (state) => (state.login_user ? state.login_user.displayName : ""),
    photoURL: (state) => (state.login_user ? state.login_user.photoURL : ""),
    uid: (state) => (state.login_user ? state.login_user.uid : null),
    getAddressById: (state) => (id) =>
      state.addresses.find((address) => address.id === id),
  },
});
