<template>
    <div class="row">
        <div class="col-lg-12">
            <nav class="navbar lightColor">
                <div class="row">
                    <a class="navbar-brand container col-lg-6 offset-lg-3" href="#">{{ businessName }}</a>
                    <div v-show="localization" class="dropdown-localization dropleft">
                        <img class="dropdown-key link" id="dropdownMenuButton" data-toggle="dropdown" src="../../../public/icons/uk.svg" height="30">
                        <span class="lang">EN</span>
                        <div class="dropdown-menu dropdown-menu-lang" aria-labelledby="dropdownMenuButton">
                            <img src="../../../public/icons/ethiopia.svg" height="30" class="dropdown-icon">
                            <span class="langAM">AM</span>
                        </div>
                    </div>
                    <div class="dropdown-account dropleft">
                        <span class="dropdown-key" data-toggle="dropdown"><p class="account-letter text-center">{{ adminName | firstLetter }}</p></span>
                        <div class="dropdown-menu dropdown-menu-account" aria-labelledby="dropdownMenuButton">
                            <h5 class="d-flex justify-content-center">{{ adminName }}</h5>
                            <p class="d-flex justify-content-center">{{ adminEmail }}</p>
                            <div class="d-flex justify-content-center" v-on:click="logout()"><button class="btn more-btn">Logout</button></div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data: function() {
        return {
            businessName: null,
            adminName: null,
            adminEmail: null
        }
    },
    computed: {
        localization() {
            return parseInt(this.$store.getters.localization);
        },
    },
    methods: {
        getAccountAndBizData() {
            axios.get('/business/manage/accounts/getAccountAndBizData').then((result) => {
                this.businessName = result.data.data.name
                this.adminName = `${result.data.data.firstname} ${result.data.data.lastname}`
                this.adminEmail = result.data.adminEmail
                // console.log(result.data.data)
                // console.log('this.businessName', this.businessName, this.adminName, this.adminEmail)
            }).catch(error => { console.log(error) })
        },
        logout() {
            this.$store.dispatch('logout')
            this.$router.push({ name: 'Login' })
            this.$router.go()
        }
    },
    created() {
        this.getAccountAndBizData();
    }
}
</script>
<style scoped>
.account-letter{
    color: #F7FAFC;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    margin-top: 6px;
}

.dropdown-menu-lang{
    background-color: #F7FAFC;
    min-width: 80px;
    position: absolute;
    top: 25px;
    right: 3.5%;
}

.dropdown-menu-account{
    padding: 25px;
    align-content: center;
    align-items: center;
    background-color: #F7FAFC;
}

.dropdown-icon{
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 10px;
}

.dropdown-localization{
    font-weight: 500;
    font-size: 15px;
    margin-top: 0.3%;
    position: absolute;
    right: 8.6%;
    width: 14%;
    cursor: pointer;
}

.dropdown-account {
    height: 30px;
    width: 30px;
    background-color: #026AA7;
    border-radius: 50%;
    position: absolute;
    right: 5%;
    text-align: center;
    display: inline-block;
    cursor: pointer;
}

.link{
    cursor: pointer;
    margin-left: 5px;
    position: absolute;
    right: 12%;
}

.lang{
    position: absolute;
    right: 0%;
    margin-top: 3px;
}

.lightColor{
    background-color: #FFFFFF;
}

.navbar-brand{
    line-height: 1.0;
    font-weight: 700;
    color:#063777;
    display: flex;
    justify-content: center;
    position: relative;      
}

.more-btn{
    background-color: #026AA7;
    font-weight: 500;
    font-size: 14px;
    color: #DBE9F3;
}
</style>