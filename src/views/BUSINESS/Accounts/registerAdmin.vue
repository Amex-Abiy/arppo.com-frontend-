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
                    <form>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label for="firstname">Firstname</label>
                                    <input type="text" class="form-control" id="firstname" aria-describedby="firstnameHelp">
                                    <small id="firstnameHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>   
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="lastname">Lastname</label>
                                    <input type="text" class="form-control" id="lastname" aria-describedby="lastnameHelp">
                                    <small id="lastnameHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" aria-describedby="passwordHelp">
                            <small id="passwordHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="repeatPassword">Repeat Password</label>
                            <input type="repeatPassword" class="form-control" id="repeatPassword" aria-describedby="repeatPasswordHelp">
                            <small id="repeatPasswordHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone no.</label>
                            <input type="tel" class="form-control" id="phone" aria-describedby="phoneHelp">
                            <small id="phoneHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="role" id="inlineRadio2" value="0">
                            <label class="form-check-label" for="inlineRadio2">Sub-Admin</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="role" id="inlineRadio1" value="1">
                            <label class="form-check-label" for="inlineRadio1">Admin</label>
                        </div>
                        <br>
                        <button type="submit" class="btn btn-primary submit-btn">Register</button>
                    </form>
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
</style>