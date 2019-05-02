<template>
    <p>
        Counter value is: {{ counter }} </p>
</template>

<script>
    export default {
        name: 'Display',
        computed: {
            counter() {
                return this.$store.state.counter;
            }
        }
    }
</script>