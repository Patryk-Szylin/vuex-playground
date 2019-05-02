<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Display/>
    <Counter/>
    <Currency/>
    <User/>
    <div>
      <RefineResults/>
    </div>
    <div>
      <Search/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  </div>
</template>

<script>
import Display from "./components/Display.vue";
import Counter from "./components/Counter.vue";
import Currency from "./components/Currency.vue";
import User from "./components/User.vue";
import Card from "./components/Card.vue";
import Search from "./components/Search.vue";
import RefineResults from "./components/RefineResults.vue";
export default {
  name: "app",
  components: {
    Display,
    Counter,
    Currency,
    User,
    Card,
    Search,
    RefineResults
  },
  mounted() {
    this.$store.dispatch("getUser", 8);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
