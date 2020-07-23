<template>
   <div>
        <!--ADD COMPONENTS HERE-->
        <div class="search-bar container">
            <div class="row">
                <div class="col-lg-4 offset-lg-7">
                    <label class="sr-only" for="inlineFormInputGroup">Username</label>
                    <div class="input-group mb-2">
                        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Search...">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <div class="dropdown">
                                    <p class="dropdown-key" id="dropdownMenuButton" data-toggle="dropdown">name<i class="fas fa-caret-down dropdown-key-icon"></i></p>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">name</a>
                                        <a class="dropdown-item" href="#">email</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-4">
                                <p class="title">Name - </p>
                                <p class="title">Email - </p>
                                <p class="title">Role - </p>
                            </div>
                            <div class="col-lg-8">
                                <p class="">Amanuel Abiy</p>
                                <p class="">amexabiy@gmail.com</p>
                                <p class="">Sub-Admin</p>
                            </div>
                        </div>
                        <router-link :to="{ name: 'Profile' }"><a class="btn btn-primary btn-more">more</a></router-link>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-4">
                                <p class="title">Name - </p>
                                <p class="title">Email - </p>
                                <p class="title">Role - </p>
                            </div>
                            <div class="col-lg-8">
                                <p class="">Amanuel Abiy</p>
                                <p class="">amexabiy@gmail.com</p>
                                <p class="">Sub-Admin</p>
                            </div>
                        </div>
                        <router-link :to="{ name: 'Profile' }"><a class="btn btn-primary btn-more">more</a></router-link>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-4">
                                <p class="title">Name - </p>
                                <p class="title">Email - </p>
                                <p class="title">Role - </p>
                            </div>
                            <div class="col-lg-8">
                                <p class="">Amanuel Abiy</p>
                                <p class="">amexabiy@gmail.com</p>
                                <p class="">Sub-Admin</p>
                            </div>
                        </div>
                        <router-link :to="{ name: 'Profile' }"><a class="btn btn-primary btn-more">more</a></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import navigation from '../../../components/BUSINESS/navigation'
import headers from '../../../components/BUSINESS/header'
import navbar from '../../../components/BUSINESS/navbar'
import sidenav from '../../../components/BUSINESS/sidenav'
export default {
    components: {
        headers, navigation, sidenav
    }
}
</script>
<style scoped>
.sidenav{
    padding: 0px;
    min-height: 100vh;
    background-color: #DBE9F3;
}
.headerNav{
    padding: 0px;
}
.darkColor{
    background-color: #026AA7;
}

.vertical-line{
    border-left: 1px solid #707070;
    position: absolute;
    left: 16%;
    height: 500px;
}

.title{
    font-weight: 500;
}

.btn-more{
    color: #F7FAFC;
    float: right;
    padding: 5px 10px 5px 10px;
}

.btn-more:hover{
    color: #F7FAFC;
}

.dropdown{
    cursor: pointer;
}

.dropdown-key{
    margin-bottom: 0px;
}

.dropdown-key-icon{
    margin-left: 10px;
}
</style>