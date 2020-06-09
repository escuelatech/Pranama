<template>
<!-- v-show="isError" -->
    <div class="box" v-html = "messages">
            <h3>{{messages}}</h3>
    </div>
</template>
<script>

export default {
    computed: {
        messages() {
        return this.$store.state.messages
    }
    }
}
</script>