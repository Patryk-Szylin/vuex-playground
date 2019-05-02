<template>
  <div>
    <h1>{{user.name}} at {{user.email}}</h1>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    user() {
      return this.$store.state.central.user;
    }
  }
};
</script>

<style>
</style>
