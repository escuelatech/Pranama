<template>
<!-- v-show="isError" -->
    <div class="box" v-html= "message">
    </div>
</template>

<script>
export default {
    computed: {
        message() {
            return this.$store.state.message
        }
    }
}
</script>