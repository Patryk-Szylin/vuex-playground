<template>
  <div>
    <div @click="animateCards" class="search">SDASD</div>
  </div>
</template>

<script>
export default {
  name: "Search",
  methods: {
    animateCards() {
      this.$store.dispatch("animateCards", 3000);
    }
  }
};
</script>

<style scoped>
.search {
  height: 300px;
  width: 1000px;
  background-color: blue;
}
</style>
