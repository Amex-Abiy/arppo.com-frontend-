<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <h5 class="offset-lg-1">Create Admin <span class="biz-name"> for (biz name here)</span></h5>
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
        }
    },
    methods: {
    
    }
}
</script>
<style scoped>
.biz-name{
    font-size: 18px !important;
}

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
