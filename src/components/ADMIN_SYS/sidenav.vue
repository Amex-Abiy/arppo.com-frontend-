<template>
    <div>
        <br>
        <div class="row">
            <div class="col-lg-12 links">
                <button :class="['btn', 'parent-link']"><router-link :to="{ name: 'Dashboard'}" :class="['darkColor2', 'router-link']">Businesses</router-link></button>
                <button :class="['btn', 'child-link']"><router-link :to="{ name: 'RegisterBusiness'}" :class="['darkColor2', 'router-link']">Register Business</router-link></button>
                <button :class="['btn', 'child-link']"><router-link :to="{ name: 'GenericSearchPage', params : {'forPath': 'RegisterBusinessAdmin'}}" :class="['darkColor2', 'router-link']">Register Admin</router-link></button>
                <button :class="['btn', 'parent-link']"><router-link :to="{ name: 'Accounts'}" :class="[currentPage.includes('accounts') ? 'lightColor': 'darkColor2', 'router-link']">Activities</router-link></button>
                <button :class="['btn', 'child-link']"><router-link :to="{ name: 'CreateSystemSubAdmin'}" :class="['darkColor2', 'router-link']">Login Activities</router-link></button>
                <button :class="['btn', 'parent-link']"><router-link :to="{ name: 'viewByPostings'}" :class="[currentPage.includes('applications') ? 'lightColor': 'darkColor2', 'router-link']">Management</router-link></button>
                <button :class="['btn', 'child-link']"><router-link :to="{ name: 'CreateSystemSubAdmin'}" :class="['darkColor2', 'router-link']">Create Sub-Admin</router-link></button>
                <!--<button class="btn">Dashboard</button>
                <button class="btn selected">Accounts</button>
                <button class="btn">Applications</button>
                <button class="btn">Archived</button>
                <button class="btn">Job Postings</button>-->
            </div>
            <button :class="['btn', 'btn-logout']"><router-link :to="{ name: 'sysAdLogin' }" :class="['darkColor2', 'router-link']">Log Out</router-link></button>

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

.child-link{
    margin-left: 13%;
    font-size: 14px;
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

.parent-link{
    background-color: #DBE9F3;
    color:#242D33;
    margin-top: 7%;
    margin-left: 10%;
    font-weight: 500;
    padding-left: 0%;
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
    color: #026AA7;
    position: absolute;
    bottom: 23%;
    margin-left: 15%;

}

.btn-logout:hover{
    color: #209ce4;
}
</style>