<template>
     <div class="row">
        <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item ">
                            <router-link :to="{ name: 'Recents' }" :class="[currentPage.includes('recents') ? 'selected' : '', 'nav-link', 'lightColor']" tag="a">Recents</router-link>
                            <!--<a class="nav-link lightColor selected" href="#">Accounts</a>-->
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'JobPostings-Active' }" :class="[currentPage.endsWith('jobPostings/') ? 'selected' : '', 'nav-link', 'lightColor']" tag="a">Active</router-link>
                            <!--<a class="nav-link lightColor" href="#">Blacklisted</a>-->
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'Accounts' }" :class="[currentPage.includes('closed') ? 'selected' : '', 'nav-link', 'lightColor']" tag="a">Closed</router-link>
                            <!--<a class="nav-link lightColor selected" href="#">Accounts</a>-->
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'CreateJobPosting' }" :class="[currentPage.includes('createJobPosting') ? 'selected' : '', 'nav-link', 'lightColor', 'make-button']" tag="a"><span class="full-word">Create<span class="second-word">New</span></span></router-link>
                            <!--<a class="nav-link lightColor" href="#">Blacklisted</a>-->
                        </li>
                        <li class="nav-item">
                            <div class="dropdown dropleft">
                                <i class="fas fa-ellipsis-v fa-lg" id="dropdownMenuButton" data-toggle="dropdown"></i>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <router-link :to="{ name: 'Archived' }" class="dropdown-item" tag="a">Archived</router-link>
                                   <!-- <a class="dropdown-item" href="#">Set login lours</a>
                                    <a class="dropdown-item" href="#">Register Admin</a>-->
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
         </div>
    </div>
</template>
<script>
export default {
    data: function() {
        return{
            selected: 0
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
    float: left;
    margin-left: 50%;
}

.second-word{
    margin-left: 8%;
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

.make-button{
    background-color: #518EDE;
}

.full-word{
    padding-right: 8px;

}
</style>