<template>
    <div class="">
        <accountsNavbar v-show="currentPage.includes('account')"/>
        <jobPostingsNavbar v-show="currentPage.includes('jobPostings')"/>
    </div>
</template>
<script>
import accountsNavbar from '@/views/BUSINESS/Accounts/accountsNavbar'
import jobPostingsNavbar from '@/views/BUSINESS/JobPostings/jobPostingsNavbar'
export default {
    data: function() {
        return{
            selected: 0
        }
    },
    components: {
        accountsNavbar, jobPostingsNavbar
    },
    computed: {
        currentPage() {
            return this.$route.path;
        }
    }
}
</script>
<style scoped>
nav{
    background-color: #026AA7;
}
.lightColor{
    color: #F7FAFC;
}
.nav-link{
    font-weight: 600;
}

.selected {
    border-bottom: 2.2px solid #F7FAFC;
}

.navbar-nav li{
    margin-left: 150%
}

i{
    color: #F7FAFC;
    cursor: pointer;
    margin-top: 100%
}

.dropdown-item{
    font-weight: 500;
    padding-top: 5%;
    padding-bottom: 5%;
}

.dropdown-item:hover{
    background-color: #cbe9fd;
}
</style>