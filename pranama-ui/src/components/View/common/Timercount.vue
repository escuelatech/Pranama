<template>
<div>
<h4>You will be change back with in {{ countDown }} seconds</h4>
</div>
</template>

<script>
    export default {
     data() {
            return {
             countDown : 10
            }
        },

        methods: {
           countDownTimer() {
                if(this.countDown >= 0) {
                    setInterval(() => {
                        this.countDown -= 1
                        }, 1000)
                }
            }
                 
        },
      
    }

</script>