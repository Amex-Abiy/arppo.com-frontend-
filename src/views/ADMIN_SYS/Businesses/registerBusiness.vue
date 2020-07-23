<template>
    <div>
         <div class="row" v-show="regBiz">
            <div class="col-lg-12">
                <h5 class="offset-lg-1">Register Business</h5>
                <!--<div class="horizontal-line offset-lg-1"></div>-->
                <br>
                <br>
                <div class="offset-lg-1">
                    <form action="" method="POST" v-on:submit.prevent="">
                        <div class="form-group col-lg-5">
                            <label for="firstname">Business Name</label>
                            <input type="text" class="form-control" id="firstname" aria-describedby="firstnameHelp">
                        </div> 
                        <div class="form-group col-lg-5">
                            <label for="firstname">E-mail</label>
                            <input type="text" class="form-control" id="firstname" aria-describedby="firstnameHelp">
                            <small id="firstnameHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div> 
                        <div class="form-group col-lg-5">
                            <label for="firstname">Telephone No.</label>
                            <input type="text" class="form-control" id="firstname" aria-describedby="firstnameHelp">
                        </div> 
                        <div class="form-group col-lg-5">
                            <label for="firstname">Website</label>
                            <input type="text" class="form-control" id="firstname" aria-describedby="firstnameHelp">
                        </div> 
                        <div class="form-group col-lg-5">
                            <label for="firstname">Address</label>
                            <input type="text" class="form-control" id="firstname" aria-describedby="firstnameHelp">
                        </div> 
                        <div class="col-lg-7">
                            <label for="exampleFormControlTextarea1">Localization</label><br><br>
                            <div class="offset-lg-1">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="role" id="inlineRadio2" value="0">
                                    <label class="form-check-label" for="inlineRadio2">Yes</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="role" id="inlineRadio1" value="1">
                                    <label class="form-check-label" for="inlineRadio1">No</label>
                                </div>
                            </div>
                        </div>
                        <br>
                        <button type="submit" class="btn btn-primary offset-lg-6" v-on:click="regBiz = !regBiz; regAdmin = !regAdmin">Next</button>
                    </form>
                    <br>
                    <br>
                </div>
            </div>
        </div>
        <div class="row" v-show="regAdmin">
            <div class="col-lg-12">
                <h5 class="offset-lg-1">Create Admin</h5>
                <!--<div class="horizontal-line offset-lg-1"></div>-->
                <br>
                <br>
                <div class="offset-lg-1">
                    <form action="" method="POST" v-on:submit.prevent="">
                        <div class="row col-lg-12">
                            <div class="form-group col-lg-5">
                                <label for="firstname">Admin Firstame</label>
                                <input type="text" class="form-control" id="firstname" aria-describedby="firstnameHelp">
                            </div> 
                            <div class="form-group col-lg-5">
                                <label for="firstname">Admin Lastname</label>
                                <input type="text" class="form-control" id="firstname" aria-describedby="firstnameHelp">
                            </div> 
                        </div>
                        <div class="form-group col-lg-5">
                            <label for="firstname">Admin E-mail</label>
                            <input type="text" class="form-control" id="firstname" aria-describedby="firstnameHelp">
                            <small id="firstnameHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div> 
                        <div class="form-group col-lg-5">
                            <label for="firstname">Admin Password</label>
                            <input type="text" class="form-control" id="firstname" aria-describedby="firstnameHelp">
                            <small id="firstnameHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div> 
                        <div class="form-group col-lg-5">
                            <label for="firstname">Repeat Password</label>
                            <input type="text" class="form-control" id="firstname" aria-describedby="firstnameHelp">
                            <small id="firstnameHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div> 
                        <div class="form-group col-lg-5">
                            <label for="firstname">Admin Phone No.</label>
                            <input type="text" class="form-control" id="firstname" aria-describedby="firstnameHelp">
                            <small id="firstnameHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <br>
                        <div class="row">
                            <button class="btn btn-light text-primary offset-lg-0" v-on:click="regBiz = !regBiz; regAdmin = !regAdmin">Previous</button>
                            <button type="submit" class="btn btn-primary offset-lg-5">Register</button>
                        </div>
                    </form>
                    <br>
                    <br>
                </div>
            </div>
        </div>       
    </div>
</template>
<script>
export default {
    data: function() {
        return{
            num_of_emp: 1,
            regBiz: true,
            regAdmin: false
        }
    },
    methods: {
        add_num_of_emp(){
            this.num_of_emp = this.num_of_emp + 1;
        },
        sub_num_of_emp(){
            if(this.num_of_emp === 0){
                this.num_of_emp === 0;
            }else{
                this.num_of_emp = this.num_of_emp - 1;
            }
        }
    }
}
</script>
<style scoped>
.link{
    margin-bottom: 3%;
    cursor: pointer;
    transform: rotate(45deg);
    filter: invert(28%) sepia(32%) saturate(2909%) hue-rotate(176deg) brightness(104%) contrast(99%);
}

.title{
    font-size: 18px;
    font-weight: 500;
}

.sub-title{
    color: #655F5F;
    font-size: 16px;
    font-weight: 500;
    margin-left: 5%;
}

.card-content-rows{
    margin-bottom: 0px;
    padding-bottom: 0px;
}

.discription{
    margin-left: 5%;
    margin-right: 3%;
}

.more-btn{
    background-color: #DBE9F3;
    font-weight: 500;
    font-size: 14.4px;
    padding-top: 0px;
    padding-bottom: 0px;
    color: #026AA7;
    float: right;
}

strong{
    font-size: 14px;
}

p{
    font-size: 14px;
}

.horizontal-line{
    border-bottom: 2px solid #817f7f;
    width: 30%;
    
}

.btn-light{
    font-weight: 500;
}

.change-num-icon{
    margin-top: 1.5%;
    margin-left: 3%;
    cursor: pointer;
}

.num_of_emp{
    margin-left: 1%;
}
</style>
