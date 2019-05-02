<template>
  <p>Counter value is: {{ counter }}</p>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Currency",
  computed: {
    ...mapGetters({
      counter: "addCurrencyToCounter"
    })
  }
};
</script>