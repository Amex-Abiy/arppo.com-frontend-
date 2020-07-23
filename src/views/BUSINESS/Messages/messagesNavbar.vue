<template>
     <div class="row">
        <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item ">
                            <router-link :to="{ name: 'Announcements' }" :class="[currentPage.includes('announcements') ? 'selected' : '', 'nav-link', 'lightColor']" tag="a">Announcements</router-link>
                            <!--<a class="nav-link lightColor selected" href="#">Accounts</a>-->
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'Threads' }" :class="[currentPage.includes('threads') ? 'selected' : '', 'nav-link', 'lightColor']" tag="a">Threads</router-link>
                            <!--<a class="nav-link lightColor" href="#">Blacklisted</a>-->
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
    margin-left: 120%;
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