<template>
<div>
    <div>
        <LoginPage />
    </div>
    <div>
        <DashboardPage />
    </div>
</div>
    
</template>

<script>
import LoginPage from '@/components/View/services/login_service/LoginPage.vue';
 import DashboardPage from '@/components/View/services/dashboard_service/DashboardPage.vue'
//import AddCarPage from '@/components/View/services/add_car_service/AddCarPage.vue'
    export default {
        components: {
            LoginPage,
             DashboardPage
            //AddCarPage
        }
    }
</script>

<style lang="scss" scoped>

</style>