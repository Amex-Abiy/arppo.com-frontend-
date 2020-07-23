<template>
    <div>
        <accountsNavbar class="navbar" v-show="currentPage.includes('account')"/>
        <jobPostingsNavbar class="navbar" v-show="currentPage.includes('jobPostings')"/>
        <applicationsNavbar class="navbar" v-show="currentPage.includes('applications')"/>
        <messagesNavbar class="navbar" v-show="currentPage.includes('messages')"/>
    </div>
</template>
<script>
import accountsNavbar from '@/views/BUSINESS/Accounts/accountsNavbar'
import jobPostingsNavbar from '@/views/BUSINESS/JobPostings/jobPostingsNavbar'
import applicationsNavbar from '@/views/BUSINESS/Applications/applicationsNavbar'
import messagesNavbar from '@/views/BUSINESS/Messages/messagesNavbar'
export default {
    data: function() {
        return{
            selected: 0
        }
    },
    components: {
        accountsNavbar, jobPostingsNavbar, applicationsNavbar, messagesNavbar
    },
    computed: {
        currentPage() {
            return this.$route.path;
        }
    },
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

.navbar{
    line-height: 1.0;
    width: 100%;
    padding: 0px;
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