<template>
   <div>
        <!--ADD COMPONENTS HERE-->
        <div class="row">
            <div class="col-lg-12">
                <h5 class="text-center">Register Admin</h5>
                <div class="horizontal-line"></div>
                <br>
                <br>
                <div class="col-lg-5 offset-lg-1">
                    <ValidationObserver v-slot="{ handleSubmit }">
                        <form v-on:submit.prevent="handleSubmit(submit)">
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <ValidationProvider rules="name|required" v-slot="{ errors }">
                                            <label for="firstname">Firstname</label>
                                            <input v-model="firstname" type="text" class="form-control" id="firstname" aria-describedby="firstnameHelp">
                                            <small id="firstnameHelp" class="form-text text-muted">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                    </div>   
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <ValidationProvider rules="name|required" v-slot="{ errors }">
                                            <label for="lastname">Lastname</label>
                                            <input v-model="lastname" type="text" class="form-control" id="lastname" aria-describedby="lastnameHelp">
                                            <small id="lastnameHelp" class="form-text text-muted">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <ValidationProvider rules="email|required" mode="lazy" v-slot="{ errors }">
                                    <label for="email">Email address</label>
                                    <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
                                    <small id="emailHelp" class="form-text text-muted">{{ errors[0] }}</small>
                                </ValidationProvider>
                            </div>
                            <div class="form-group">
                                <ValidationProvider rules="pwdLength|required" v-slot="{ errors }">
                                    <label for="password">Password</label>
                                    <input v-model="password" name="password" type="password" class="form-control" id="password" aria-describedby="passwordHelp">
                                    <small id="passwordHelp" class="form-text text-muted">{{ errors[0] }}</small>
                                </ValidationProvider>
                            </div>
                            <div class="form-group">
                                <ValidationProvider rules="numeric|phoneLength|required" mode="lazy" v-slot="{ errors }">
                                    <label for="phone">Phone no.</label>
                                    <input v-model="phone" type="tel" class="form-control" id="phone" aria-describedby="phoneHelp">
                                    <small id="phoneHelp" class="form-text text-muted">{{ errors[0] }}</small>
                                </ValidationProvider>
                            </div>
                            <ValidationProvider rules="required" v-slot="{ errors }">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="role" id="inlineRadio2" value="0">
                                    <label class="form-check-label" for="inlineRadio2">Sub-Admin</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="role" id="inlineRadio1" value="1">
                                    <label class="form-check-label" for="inlineRadio1">Admin</label>
                                </div>
                                <small id="phoneHelp" class="form-text text-muted">{{ errors[0] }}</small>
                            </ValidationProvider>
                            <br>
                            <button type="submit" class="btn btn-primary submit-btn">Update</button>
                        </form>
                    </ValidationObserver>
                    <br>
                    <br>
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
import { ValidationProvider, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import * as rules from 'vee-validate/dist/rules';
export default {
    data: function(){
        return {
            firstname: null,
            lastname: null,
            email: null,
            password: null,
            confirmPassword: null,
            phone: null,
            role: null
        }
    },
    components: {
        headers, navigation, sidenav
    },
    methods: {
        submit(){

        }
    }
}
// for making all(*) the imported rules available
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

extend('required', {
  ...required,
  message: 'This field is required'
});

extend('name', value => {
    var reg = /^([A-Za-z/]*)$/
    return value.match(reg) ? true : 'Name can only be alphabet characters and can contain "/" character'
});

extend('pwdLength', value => {
    return value.length >= 8 ? true : 'Password should be longer than 8 characters';
});

extend('phoneLength', value => {
    return value.length >= 10 ? true : 'Phone No. is not valid';
});

extend('passwordMatch', {
  params: ['target'],
  validate(value, { target }) {
    return value === target;
  },
  message: 'Passwords do not match'
});

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

.horizontal-line{
    border-bottom: 2px solid #817f7f;
    width: 30%;
    position: relative;
    left: 35%;
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

.card{
    border-color: rgb(241, 24, 24);
}

.submit-btn{
    float: right;
}

.form-text{
    color: rgb(216, 56, 56);
}
</style>