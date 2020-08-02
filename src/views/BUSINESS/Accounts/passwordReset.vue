<template>
   <div class="main-background">
        <br>
        <div class="row">
            <div class="col-lg-4 offset-lg-4">
                <div class="logo-components text-center">
                    <h3 class="darkColor">arppo</h3>
                    <p class="darkColor moto">Lorem ipsum dolor sit</p>
                </div>
                <h5 v-show="errorMsg" class="text-center darkColor">{{ errorMsg }}</h5>
                <div v-show="!errorMsg" class="card">
                    <div class="card-body">
                        <h5 class="text-center">Reset Password</h5>
                        <p class="text-center">{{ email }}</p>
                        <ValidationObserver v-slot="{ handleSubmit }">
                            <form v-on:submit.prevent="handleSubmit(resetPassword)">
                                <div class="form-group">
                                    <ValidationProvider rules="required" mode="lazy" v-slot="{ errors }">
                                        <label for="password">Password</label>
                                        <input v-model="resetForm.password" name="password" type="password" class="form-control" id="password" aria-describedby="passwordHelp">
                                        <small id="passwordHelp" class="form-text text-muted">{{ errors[0] }}</small>
                                    </ValidationProvider>
                                </div>
                                <div class="form-group">
                                    <ValidationProvider rules="required" mode="lazy" v-slot="{ errors }">
                                        <label for="password">Confirm Password</label>
                                        <input v-model="resetForm.confirmPassword" name="confirmPassword" type="password" class="form-control" id="password" aria-describedby="passwordHelp">
                                        <small id="passwordHelp" class="form-text text-muted">{{ errors[0] }}</small>
                                    </ValidationProvider>
                                </div>
                                <button type="submit" class="btn btn-reset col-lg-12" v-on:click="login()">Reset</button>
                            </form>
                        </ValidationObserver>
                    </div>
                </div>
            </div>
        </div>
        <div class="overlay" v-show="showConfirmation">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <h5 v-show="passwordResetConfirmation">{{ passwordResetConfirmation }}</h5>                    
                        <div class="row">
                            <button class="col-lg-1 offset-lg-10 btn edit-btn" v-on:click="showConfirmation = !showConfirmation">Ok</button>
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
            resetForm: {
                password: null,
                confirmPassword: null
            },
            // v-show controllers
            showConfirmation: false,
            // msg displays
            email: null,
            errorMsg: null,
            passwordResetConfirmation: null
        }
    },
    components: {
        headers, navigation, sidenav
    },
    methods: {
        fetchAccountData() {
            axios.get('/business/manage/accounts/getPwdResetTokenData', { headers: { 'PasswordToken': this.$route.params.token } }).then((result) => {
                if(result.data.status){
                    this.email = result.data.data.email;
                } else {
                    this.errorMsg = result.data.msg;
                }
            }).catch(error => { console.log(error) })
        },
        resetPassword() {
            axios.post('business/manage/accounts/resetPassword', this.resetForm, { headers: { 'PasswordToken': this.$route.params.token }} ).then((result) => {
                if(result.data.status){
                    this.showConfirmation = !this.showConfirmation;
                    this.passwordResetConfirmation = result.data.msg;
                    this.$router.push({ name: 'Login' })
                } else {
                    this.showConfirmation = !this.showConfirmation;
                    this.passwordResetConfirmation = result.data.msg;
                }
            })
        }
    },
    created() {
        this.fetchAccountData()
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

.scrollable {
    height: 550px;
    overflow-x: hidden;
    overflow-y: auto;
}

.logo-components{
    padding-top: 3%;
    padding-left: 2%;
}

.darkColor{
    color: #026AA7;
}

.moto{
    font-style: italic;
    font-family: 'Ubuntu', sans-serif;
}

input{
    background-color: #F7FAFC;
}

.darkColor-bg{
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

.main-background{
    background-color: #F7FAFC;
}

.btn-reset{
    background-color: #518EDE;
    color: #F7FAFC;
}
</style>