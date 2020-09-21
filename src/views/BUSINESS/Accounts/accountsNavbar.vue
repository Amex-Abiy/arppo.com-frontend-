<template>
     <div class="row">
        <div class="col-lg-12">
            <nav class="navbar navbar-default navbar-static-top navbar-expand-lg">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ">
                        <li class="nav-item">
                            <router-link :to="{ name: 'Accounts' }" :class="[currentPage.endsWith('accounts/') ? 'selected' : '', 'nav-link', 'lightColor']" tag="a">Accounts</router-link>
                            <!--<a class="nav-link lightColor selected" href="#">Accounts</a>-->
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'Blacklisted' }" :class="[currentPage.includes('blacklisted') ? 'selected' : '', 'nav-link', 'lightColor']" tag="a">Blacklisted</router-link>
                            <!--<a class="nav-link lightColor" href="#">Blacklisted</a>-->
                        </li>
                        <li class="nav-item">
                            <div class="dropdown dropleft">
                                <i class="fas fa-ellipsis-v fa-lg" id="dropdownMenuButton" data-toggle="dropdown"></i>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <router-link :to="{ name: 'SetLoginHrs' }" class="dropdown-item" tag="a">Set login lours</router-link>
                                    <router-link :to="{ name: 'RegisterAdmin' }" class="dropdown-item" tag="a">Register Admin</router-link>
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