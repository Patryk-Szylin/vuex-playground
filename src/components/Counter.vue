<template>
  <div>
    <button class="btn btn-primary" @click="increase">Increase</button>
    <button class="btn btn-danger" @click="decrease">Decrease</button>
    <button class="btn btn-danger" @click="asyncIncrement">Async Increase</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  name: "Counter",
  methods: {
    ...mapActions({
      increase: "increase",
      decrease: "decrease",
      asyncIncrement: "asyncIncrement"
    })
  }
};
</script>