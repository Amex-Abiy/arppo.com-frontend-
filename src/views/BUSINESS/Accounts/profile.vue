<template>
   <div class="main-container">
        <!--ADD COMPONENTS HERE-->
        <div class="row container profile-box">
            <div class="col-lg-10 offset-lg-1">
                <p class="title created-on">Created on - <span class="profile-data">17 May, 2020</span></p>
                <figure class="figure">
                    <img src="../../../../public/images/avatar-profile-male.jpg" class="col-lg-6 offset-lg-3 figure-img img-fluid rounded" alt="...">
                </figure>
                <p class="admin-name text-center">Abebe Kebede</p>
                <div class="offset-lg-4">
                    <p class="title">Name - <span class="profile-data">Amanuel Abiy</span></p>
                    <p class="title">Email - <span class="profile-data">amexabiy@gmail.com</span></p>
                    <p class="title">Tel No. - <span class="profile-data">+251 961138866</span></p>
                    <p class="title">Role - <span class="profile-data">Sub-Admin</span></p>
                </div>
                <button class="btn edit-btn" v-on:click="editAccount = !editAccount">Edit</button>
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
                                            <ValidationProvider rules="required|passwordMatch:password" mode="lazy" v-slot="{ errors }">
                                                <label for="repeatPassword">Confirm Password</label>
                                                <input v-model="confirmPassword" type="repeatPassword" class="form-control" id="repeatPassword" aria-describedby="repeatPasswordHelp">
                                                <small id="repeatPasswordHelp" class="form-text text-muted">{{ errors[0] }}</small>
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
                                        <button type="submit" class="btn btn-primary submit-btn">Register</button>
                                    </form>
                                </ValidationObserver>
                            </div>
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
export default {
    data: function() {
        return {
            editAccount: false
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

.created-on{
    float: right;
}
</style>