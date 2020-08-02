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
            <div v-for="(account) in listOfAccounts" v-bind:key="account.id" class="col-lg-4">
                <router-link class="routerlink" :to="{ name: 'Profile' , params: { 'email' : account.email } }">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-3">
                                    <p class="title">Name - </p>
                                    <p class="title">Email - </p>                                
                                </div>
                                <div class="col-lg-7">
                                    <p class="">{{ account.firstname | capitilize }} {{ account.lastname | capitilize }}</p>
                                    <p class="email">{{ account.email }}</p>
                                </div>
                                <div class="col-lg-2">
                                    <button class="btn btn-popover" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?"><i class="fas fa-info-circle"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import navigation from '../../../components/BUSINESS/navigation'
import headers from '../../../components/BUSINESS/header'
import navbar from '../../../components/BUSINESS/navbar'
import sidenav from '../../../components/BUSINESS/sidenav'
import axios from 'axios';
export default {
    data: function() {
        return {
            listOfAccounts: [],
            listOfAccountsNullMsg: null
        }
    },
    components: {
        headers, navigation, sidenav
    },
    methods: {
        getAllAccounts() {
            axios.get('/business/manage/accounts/getAllAccounts').then((result) => {
                if(result.data.status){
                    this.listOfAccounts = result.data.data;
                } else {
                    this.listOfAccountsNullMsg = result.data.msg
                }
                console.log('result', this.listOfAccounts)
                
            }).catch(error => { console.log(error) })
        }
    },
    created() {
        this.getAllAccounts()
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

.email{
    font-size: 14px;
}

.btn-more{
    color: #026AA7;
    float: right;
    height: 25px;
    padding: 0px 5px 0px 5px;
    margin: 0px;
    font-weight: 500;
    background-color: #F7FAFC;
    border-color: #F7FAFC;
}

.btn-more:hover{
    color: #242D33;
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

.card{
    padding: 0px;
    color: black;
}

.card:hover{
    background-color: #F7FAFC;
    cursor: pointer;
    border-color: #9ccff1;
}

.card-body{
    padding-top: 10px;
    padding-bottom: 10px;
}

.routerlink:hover{
    text-decoration: unset;
}

p{
    font-size: 15px;
    margin-bottom: 5px;
    padding: 0px;
}

.btn-popover{
    border-radius: 50px;
    padding: 0px;
}

.fa-info-circle{
    color: #026AA7;
}

</style>