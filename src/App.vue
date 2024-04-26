<template>
  <div>
    <nav-bar></nav-bar>
    <home-view></home-view>
  </div>
</template>

<script>
import HomeView from "./views/HomeView.vue";
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    "home-view": HomeView,
    "nav-bar": NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
