<template>
   <div class="main-container">
        <!--ADD COMPONENTS HERE-->
        <div class="row container profile-box">
            <div class="col-lg-10 offset-lg-1">
                <p class="title created-on">Created on - <span class="profile-data">{{ accountInfo.datetime | formatDate }}</span></p>
                <!--<figure class="figure">
                    <img src="../../../../public/images/avatar-profile-male.jpg" class="col-lg-6 offset-lg-3 figure-img img-fluid rounded" alt="...">
                </figure>-->
                <br>
                <p class="admin-name offset-lg-4">{{ accountInfo.firstname | capitilize }} {{ accountInfo.lastname | capitilize }}</p>
                <p v-show="isBlacklisted" class="text-center text-danger">This account is blacklisted</p>
                <div class="offset-lg-4">
                    <!-- <p class="title">Name - <span class="profile-data">{{ accountInfo.firstname }} {{ accountInfo.lastname }}</span></p> -->
                    <p class="title">Email - <span class="profile-data">{{ accountInfo.email }}</span></p>
                    <p class="title">Tel No. - <span class="profile-data">{{ accountInfo.telephone }}</span></p>
                    <p class="title">Role - <span class="profile-data">{{ accountInfo.role | interpretRole }}</span></p>
                </div>
                <div class="row">
                    <button class="col-lg-4 offset-lg-0 btn blacklist-btn" v-on:click="blacklistConfirmation = !blacklistConfirmation"><span v-show="isBlacklisted">Remove from Blackist</span><span v-show="!isBlacklisted">Blacklist Account</span> </button>
                    <button class="col-lg-2 offset-lg-6 btn edit-btn" v-on:click="checkIfBlacklisted();editAccount = !editAccount">Edit</button>
                </div>
            </div>
        </div>
        <div class="overlay" v-show="editAccount">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" v-on:click="editAccount = !editAccount"><i class="fas fa-times"></i></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-10 offset-lg-1">
                                <ValidationObserver v-slot="{ handleSubmit }">
                                    <form v-on:submit.prevent="handleSubmit(updateAccount)">
                                        <div class="row">
                                            <div class="col">
                                                <div class="form-group">
                                                    <ValidationProvider rules="name|required" v-slot="{ errors }">
                                                        <label for="firstname">Firstname</label>
                                                        <input v-model="editForm.firstname" type="text" class="form-control" id="firstname" aria-describedby="firstnameHelp">
                                                        <small id="firstnameHelp" class="form-text text-muted">{{ errors[0] }}</small>
                                                    </ValidationProvider>
                                                </div>   
                                            </div>
                                            <div class="col">
                                                <div class="form-group">
                                                    <ValidationProvider rules="name|required" v-slot="{ errors }">
                                                        <label for="lastname">Lastname</label>
                                                        <input v-model="editForm.lastname" type="text" class="form-control" id="lastname" aria-describedby="lastnameHelp">
                                                        <small id="lastnameHelp" class="form-text text-muted">{{ errors[0] }}</small>
                                                    </ValidationProvider>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="email">Email address</label>
                                            <input v-model="editForm.email" type="email" class="form-control" readonly id="email" aria-describedby="emailHelp">
                                        </div>
                                        <div class="form-group">
                                            <ValidationProvider rules="numeric|phoneLength|required" mode="lazy" v-slot="{ errors }">
                                                <label for="phone">Phone no.</label>
                                                <input v-model="editForm.telephone" type="tel" class="form-control" id="phone" aria-describedby="phoneHelp">
                                                <small id="phoneHelp" class="form-text text-muted">{{ errors[0] }}</small>
                                            </ValidationProvider>
                                        </div>
                                        <ValidationProvider rules="required" v-slot="{ errors }">
                                            <div class="form-check form-check-inline">
                                                <input v-model="editForm.role" class="form-check-input" type="radio" name="role" id="inlineRadio2" value="0">
                                                <label class="form-check-label" for="inlineRadio2">Sub-Admin</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input v-model="editForm.role" class="form-check-input" type="radio" name="role" id="inlineRadio1" value="1">
                                                <label class="form-check-label" for="inlineRadio1">Admin</label>
                                            </div>
                                            <small id="phoneHelp" class="form-text text-muted">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                        <br>
                                        <div class="row">
                                            <a class="btn btn-light pws-reset-btn" v-on:click="loginConfirmation = !loginConfirmation">Send Password Reset Link</a>
                                            <button type="submit" class="btn offset-lg-6 btn-primary submit-btn">Submit</button>
                                        </div>
                                    </form>
                                </ValidationObserver>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="overlay" v-show="loginConfirmation">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <p class="pwd-reset-confirmation-title">Comfirm that you are an admin by logging your account!</p>
                        <button type="button" class="close" v-on:click="loginConfirmation = !loginConfirmation"><i class="fas fa-times"></i></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-12 offset-lg-0">
                                <ValidationObserver v-slot="{ handleSubmit }">
                                    <form v-on:submit.prevent="handleSubmit(sendPasswordConfirmationLink)">
                                        <div class="form-group col-lg-12">
                                            <ValidationProvider rules="required" v-slot="{ errors }">
                                                <label for="exampleInputEmail1">Email address</label>
                                                <input v-model="sendPwdLinkAdminVerification.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                                                <small class="form-text text-muted">{{ errors[0] }}</small>
                                            </ValidationProvider>
                                        </div>
                                        <div class="form-group col-lg-12">
                                            <ValidationProvider rules="required" v-slot="{ errors }">
                                                <label for="exampleInputPassword1">Password</label>
                                                <input v-model="sendPwdLinkAdminVerification.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                                                <small class="form-text text-muted">{{ errors[0] }}</small>
                                            </ValidationProvider>
                                        </div>
                                        <button type="submit" class="btn btn-primary offset-lg-9">Confirm</button>
                                    </form>
                                </ValidationObserver>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="overlay" v-show="blacklistConfirmation">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <h5 v-show="blacklistResultMsg">{{ blacklistResultMsg }}</h5>
                        <div v-show="!blacklistResultMsg">
                            <h5 v-show="!isBlacklisted">Are you sure you want to blacklist this user?</h5>
                            <h5 v-show="isBlacklisted">Are you sure you want to remove this user from blacklist?</h5>
                            <div class="row">
                                <button class="col-lg-2 offset-lg-1 btn edit-btn" v-on:click="handleBlacklist()">Yes</button>
                                <button class="col-lg-2 offset-lg-6 btn edit-btn" v-on:click="blacklistConfirmation = !blacklistConfirmation">Cancel</button>
                            </div>
                        </div>
                        <button v-show="blacklistResultMsg" class="col-lg-2 offset-lg-6 btn edit-btn" v-on:click="blacklistConfirmation = !blacklistConfirmation">Ok</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="overlay" v-show="updateConfirmation">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <h5 v-show="updateResultMsg">{{ updateResultMsg }}</h5>                    
                        <div class="row">
                            <button class="col-lg-1 offset-lg-10 btn edit-btn" v-on:click="updateConfirmation = !updateConfirmation; this.$router.go()">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="overlay" v-show="paswordLinkSentConfirmation">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <h5 v-show="passwordLinkSentMsg">{{ passwordLinkSentMsg }}</h5>                    
                        <div class="row">
                            <button class="col-lg-1 offset-lg-10 btn edit-btn" v-on:click="paswordLinkSentConfirmation = !paswordLinkSentConfirmation">Ok</button>
                        </div>
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
import axios from 'axios';
export default {
    data: function() {
        return {
            editForm: {
                firstname: null,
                lastname: null,
                email: null,
                telephone: null,
                role: null
            },
            sendPwdLinkAdminVerification: {
                email: null,
                password: null
            },
            // v-show controllers
            editAccount: false,
            blacklistConfirmation: false,
            loginConfirmation: false,
            updateConfirmation: false,
            paswordLinkSentConfirmation: false,
            // msg displays
            passwordLinkSentMsg: null,
            accountErrorMsg: null,
            blacklistResultMsg: null,
            updateResultMsg: null,
            isBlacklisted: null,
            accountInfo: []
        }
    },
    components: {
        headers, navigation, sidenav
    },
    methods: {
        getAccountInfo() {
            axios.get(`/business/manage/accounts/getAccountInfo/${this.$route.params.email}`).then((result) => {
                if(result.data.status) {
                    this.accountInfo = result.data.data;
                    console.log(this.accountInfo)
                    this.editForm.firstname = this.capitalize(result.data.data.firstname);
                    this.editForm.lastname = this.capitalize(result.data.data.lastname);
                    this.editForm.email = result.data.data.email;
                    this.editForm.telephone = result.data.data.telephone;
                    this.editForm.role = result.data.data.role;
                    this.checkIfBlacklisted();
                } else {
                    this.accountErrorMsg = result.data.msg
                }                
            }).catch(error => { console.log(error) })
        },
        blacklistAccount() {
            axios.post('/business/manage/accounts/blacklistAccount', {'HTTP_CONTENT_LANGUAGE': self.language}, 
            { headers: {
                    'adminemail': this.editForm.email
                }
            }).then((result) => {
                this.blacklistResultMsg = result.data.msg;                
            }).catch(error => { console.log(error) })
            this.blacklistConfirmation = !this.blacklistConfirmation;
        },
        removeFromBlacklist() {
            axios.post('/business/manage/accounts/removeFromBlacklist', {'HTTP_CONTENT_LANGUAGE': self.language}, 
            { headers: {
                    'adminemail': this.editForm.email
                }
            }).then((result) => {
                this.blacklistResultMsg = result.data.msg;                
            }).catch(error => { console.log(error) })
            this.blacklistConfirmation = !this.blacklistConfirmation;
        },
        checkIfBlacklisted() {
            axios({ method: 'get', url: '/business/manage/accounts/checkIfBlacklisted', headers: { 'adminemail': this.$route.params.email } }).then((result) => {
                console.log(result.data.status)
                this.isBlacklisted = result.data.status;               
            }).catch(error => { console.log(error) })
            // axios.get('/business/manage/accounts/checkIfBlacklisted', {'HTTP_CONTENT_LANGUAGE': self.language}, 
            // { headers: {
            //         'adminemail': this.editForm.email
            //     }
            // }).then((result) => {
            //     console.log(result.data.status)
            //     this.isBlacklisted = result.data.status;               
            // }).catch(error => { console.log(error) })
        },
        // handles the case depending on the value of 'isBlacklisted'
        handleBlacklist() {
           this.checkIfBlacklisted();
                if(this.isBlacklisted) {
                    this.removeFromBlacklist();
                    this.blacklistConfirmation = !this.blacklistConfirmation;
                    this.$router.go();
                } else if(!this.isBlacklisted) {
                    this.blacklistAccount()
                    this.blacklistConfirmation = !this.blacklistConfirmation;
                    this.$router.go();
                }
        },
        updateAccount() {
            axios.put('/business/manage/accounts/updateAccount', this.editForm, { headers: { 'adminemail': this.$route.params.email }}).then((result) => {
                this.editAccount = !this.editAccount;
                this.updateConfirmation = !this.updateConfirmation;
                this.updateResultMsg = result.data.msg;
                this.$router.go()
            }).catch(error => { console.log(error) })
        },
        capitalize(value) {
            return value[0].toUpperCase() + value.slice(1, value.length);
        },
        sendPasswordConfirmationLink() {
            axios.post('business/manage/accounts/sendAccountPwdResetLink', this.sendPwdLinkAdminVerification, { headers: { 'resetforemail': this.$route.params.email }}).then((result) => {
                this.editAccount = !this.editAccount;
                this.loginConfirmation = !this.loginConfirmation;
                this.paswordLinkSentConfirmation = true;
                this.passwordLinkSentMsg = result.data.msg;
            }).catch(error => { console.log(error) })
        }
    },
    created() {
        this.getAccountInfo();
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

.pwd-reset-confirmation-title{
    font-weight: 450;
    Color: #026AA7;
}

.darkColor{
    background-color: #026AA7;
}

.pws-reset-btn{
    color: #026AA7;
    font-weight: 500;
}

.overlay{
    position: fixed;
    top: 0%;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: rgba(0, 0, 0, 0.1);
    overflow-y: auto;
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
    float: right;
    padding: 5px 10px 5px 10px;
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

.admin-name{
    font-weight: 500;
    font-size: 18px;
}

.main-container{
    padding-left: 15px;
    padding-right: 15px;
}

.profile-box{
    border: 1px solid #ada9a9;
    padding: 3% 0% 3% 0%;
}

.main-container{
    margin-left: 20%;
    margin-right: 20%;
}

.profile-data{
    font-weight: 400;

}

.edit-btn{
    background-color: #DBE9F3;
    font-weight: 600;
    color: #026AA7;
    float: right;
}

.blacklist-btn{
    background-color: #f3dbdb;
    font-weight: 600;
    color: #a71502;
    float: right;
}
.created-on{
    float: right;
}
</style>