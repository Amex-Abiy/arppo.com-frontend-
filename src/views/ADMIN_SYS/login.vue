<template>
    <div>
        <div class="row">
            <div class="col-lg-4 offset-lg-4">
                <div class="logo-components text-center">
                    <h3 class="darkColor">arppo <span class="brand-admin-part">(admin)</span></h3>
                    <p class="darkColor moto">Lorem ipsum dolor sit</p>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="text-center">Login</h5>
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                            </div>
                           <router-link :to="{ name: 'Dashboard' }"><button type="submit" class="btn btn-login col-lg-12">Login to account</button></router-link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.brand-admin-part{
    font-size: 18px !important;
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

.btn-login{
    background-color: #518EDE;
    color: #F7FAFC;
}
</style>>