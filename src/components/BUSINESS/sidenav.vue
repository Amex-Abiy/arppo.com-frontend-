<template>
    <div>
        <div class="row">
            <div class="col-lg-12 links">
                <button :class="[currentPage == '/' ? 'selected': '', 'btn']"><router-link :to="{ name: 'Dashboard'}" :class="[currentPage == '/' ? 'lightColor': 'darkColor2', 'router-link']">Dashboard</router-link></button>
                <button :class="[currentPage.includes('account') ? 'selected': '', 'btn']"><router-link :to="{ name: 'Accounts'}" :class="[currentPage.includes('accounts') ? 'lightColor': 'darkColor2', 'router-link']">Accounts</router-link></button>
                <button :class="[currentPage.includes('applications') ? 'selected': '', 'btn']"><router-link :to="{ name: 'viewByPostings'}" :class="[currentPage.includes('applications') ? 'lightColor': 'darkColor2', 'router-link']">Applications</router-link></button>
                <button :class="[currentPage.includes('messages') ? 'selected': '', 'btn']"><router-link :to="{ name: 'Announcements' }" :class="[currentPage.includes('messages') ? 'lightColor': 'darkColor2', 'router-link']">Messages</router-link></button>
                <button :class="[currentPage.includes('jobPostings') ? 'selected': '', 'btn']"><router-link :to="{ name: 'JobPostings-Active'}" :class="[currentPage.includes('jobPostings') ? 'lightColor': 'darkColor2', 'router-link']">Job Postings</router-link></button>
                <!--<button class="btn">Dashboard</button>
                <button class="btn selected">Accounts</button>
                <button class="btn">Applications</button>
                <button class="btn">Archived</button>
                <button class="btn">Job Postings</button>-->
            </div>
            <button v-on:click="logout()" :class="['btn', 'btn-logout', 'darkColor2']">Log Out</button>
            <!-- <button :class="['btn', 'btn-logout']"><router-link :to="{ name: 'RegisterBusinessAdmin' }" :class="['darkColor2', 'router-link']">Log Out</router-link></button> -->

        </div>
    </div>
</template>
<script>
export default {
    data: function() {
        return{

        }
    },
    computed: {
        currentPage() {
            return this.$route.path;
        }
    },
    methods:{
        logout() {
            this.$store.dispatch('logout')
            this.$router.push({ name: 'Login' })
            this.$router.go()
        }
    }
}
</script>
<style scoped>
.darkColor{
    background-color: #026AA7;
}

.darkColor2{
    color:#242D33;
}

.lightColor{
    color: #F7FAFC;
}

.lightColor2 {
    color: #cbe9fd;
}

.router-link{
    text-decoration: unset;
}

.links{
    padding-left: 10%;
}

button{
    background-color: #DBE9F3;
    color:#242D33;
    margin-top: 7%;
    margin-left: 7%;
    font-weight: 500;
    padding-left: 10%;
    text-align: left !important;
    width: 80%;
}

.selected {
    background-color: #518EDE;
    color:#F7FAFC;
    padding-right: 40%;
    width: 80%;
}

.btn-logout{
    color: #242D33;
    position: absolute;
    bottom: 23%;
    margin-left: 15%;

}

.btn-logout:hover{
    color: #209ce4;
}
</style>