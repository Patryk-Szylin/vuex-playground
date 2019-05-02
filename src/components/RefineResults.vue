<template>
  <div @click="animateCards" class="refine">REFINE</div>
</template>

<script>
export default {
  name: "RefineResults",
  methods: {
    animateCards() {
      this.$store.dispatch("animateCards", 1000);
    }
  }
};
</script>

<style scoped>
.refine {
  height: 300px;
  width: 300px;
  background-color: orange;
}
</style>
