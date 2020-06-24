<template>
    <div>
        <div class="row">
            <div class="col-lg-12 links">
                <button :class="[currentPage == '/' ? 'selected': '', 'btn']"><router-link :to="{ name: 'Dashboard'}" :class="[currentPage == '/' ? 'lightColor': 'darkColor2', 'router-link']">Dashboard</router-link></button>
                <button :class="[currentPage.includes('account') ? 'selected': '', 'btn']"><router-link :to="{ name: 'Accounts'}" :class="[currentPage.includes('accounts') ? 'lightColor': 'darkColor2', 'router-link']">Accounts</router-link></button>
                <button :class="[currentPage.includes('applications') ? 'selected': '', 'btn']"><router-link :to="{ name: ''}" :class="[currentPage.includes('applications') ? 'lightColor': 'darkColor2', 'router-link']">Applications</router-link></button>
                <button :class="[currentPage.includes('---') ? 'selected': '', 'btn']"><router-link :to="{ name: ''}" :class="[currentPage.includes('---') ? 'lightColor': 'darkColor2', 'router-link']">Archived</router-link></button>
                <button :class="[currentPage.includes('jobPostings') ? 'selected': '', 'btn']"><router-link :to="{ name: 'JobPostings-Active'}" :class="[currentPage.includes('jobPostings') ? 'lightColor': 'darkColor2', 'router-link']">Job Postings</router-link></button>
                <!--<button class="btn">Dashboard</button>
                <button class="btn selected">Accounts</button>
                <button class="btn">Applications</button>
                <button class="btn">Archived</button>
                <button class="btn">Job Postings</button>-->
            </div>
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
</style>