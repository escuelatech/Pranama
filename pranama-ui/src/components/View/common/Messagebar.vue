<template>
<!-- v-show="isError" -->
    <div class="box" v-html = "messages">
            <h3>{{messages}}</h3>
    </div>
</template>
<script>
//import mapState from 'vuex'
export default {
    computed: {
        messages() {
        return this.$store.state.messages
    }
    },  
//      methods: {
//        regMessage(){
//        this.$store.dispatch('regMessage')
//     },
//   }
}
</script>