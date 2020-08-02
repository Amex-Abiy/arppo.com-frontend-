<template>
    <div>
        <div class="row">
            <div class="col-lg-4 offset-lg-4">
                <div class="logo-components text-center">
                    <h3 class="darkColor">arppo</h3>
                    <p class="darkColor moto">Lorem ipsum dolor sit</p>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="text-center">Login</h5>
                        <p class="text-center">{{ authErrorMsg }}</p>
                        <ValidationObserver v-slot="{ handleSubmit }">
                            <form v-on:submit.prevent="handleSubmit(login)">
                                <div class="form-group">
                                    <ValidationProvider rules="email|required" mode="lazy" v-slot="{ errors }">
                                        <label for="email">Email address</label>
                                        <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
                                        <small id="emailHelp" class="form-text text-muted">{{ errors[0] }}</small>
                                    </ValidationProvider>
                                </div>
                                <div class="form-group">
                                    <ValidationProvider rules="required" mode="lazy" v-slot="{ errors }">
                                        <label for="password">Password</label>
                                        <input v-model="password" name="password" type="password" class="form-control" id="password" aria-describedby="passwordHelp">
                                        <small id="passwordHelp" class="form-text text-muted">{{ errors[0] }}</small>
                                    </ValidationProvider>
                                </div>
                                <button type="submit" class="btn btn-login col-lg-12" v-on:click="login()">Login to account</button>
                            </form>
                        </ValidationObserver>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ValidationProvider, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import * as rules from 'vee-validate/dist/rules';
export default {
    data: function() {
        return {
            email: null,
            password: null
        }
    },
    computed: {
        token() {
            return this.$store.getters.emailToken;
        },
        authErrorMsg() {
            return this.$store.getters.authErrorMsg
        }
    },
    watch: {
        token(value) {
            if(value) {
                console.log('THE TOKKENNENENNE HAS CHANGED VALUE!!!')
                if (this.$store.getters.emailToken && this.$store.getters.businessToken) {
                    this.$router.push({name: 'Dashboard'});
                    this.$router.go();
                } 
            }
        }
    },
    methods: {
        login() {
            const formData = {
                email: this.email,
                password: this.password
            };
            this.$store.dispatch('loginBusiness', formData)
            console.log('WE HERE')
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

</script>
<style scoped>
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

.btn-login{
    background-color: #518EDE;
    color: #F7FAFC;
}
</style>>