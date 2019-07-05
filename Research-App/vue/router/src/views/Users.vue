<template>
    <div class="users">
        <h1>User {{ userId }}</h1>
        <button @click="goHome()">Go Home</button>
    </div>
</template>

<script>
export default {
    name : 'users',
    data(){
        return{
            userId : this.$route.params.user_id
        }
    },
    methods : {
        updateId(){
            this.userId = this.$route.params.user_id
        },
        goHome(){
            this.$router.push({name: 'home'})
            // this.$router.go(-1)
        }
    },
    watch : {
        $route : 'updateId'
    }
}
</script>
