<template>
    <div>
         <div class="row">
            <div class="col-lg-12">
                <h5 class="text-center">Create Job Posting</h5>
                <div class="horizontal-line"></div>
                <br>
                <br>
                <div class="offset-lg-1">
                    <form>
                        <div class="form-group col-lg-5">
                            <label for="firstname">Position Title</label>
                            <input type="text" class="form-control" id="firstname" aria-describedby="firstnameHelp">
                            <small id="firstnameHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div> 
                        <div class="form-group col-lg-7">
                            <label for="exampleFormControlTextarea1">Job Discription</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                            <small id="repeatPasswordHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group col-lg-7">
                            <label for="exampleFormControlTextarea1">Job Discription</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                            <small id="repeatPasswordHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="col-lg-7">
                            <label for="exampleFormControlTextarea1">Job Type *</label><br><br>
                            <div class="offset-lg-1">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="role" id="inlineRadio2" value="0">
                                    <label class="form-check-label" for="inlineRadio2">Fulltime</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="role" id="inlineRadio1" value="1">
                                    <label class="form-check-label" for="inlineRadio1">Part-Time</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="role" id="inlineRadio2" value="0">
                                    <label class="form-check-label" for="inlineRadio2">Contract</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="role" id="inlineRadio1" value="1">
                                    <label class="form-check-label" for="inlineRadio1">Freelance</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="role" id="inlineRadio1" value="1">
                                    <label class="form-check-label" for="inlineRadio1">Intership</label>
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="form-group col-lg-7">
                            <label for="repeatPassword">Number of employees needed for position</label>
                            <div class="row num_of_emp">
                                <input v-model="num_of_emp" type="repeatPassword" class="form-control col-lg-1" id="repeatPassword" aria-describedby="repeatPasswordHelp">
                                <i class="fas fa-caret-up fa-lg change-num-icon" v-on:click="add_num_of_emp"></i>
                                <i class="fas fa-caret-down fa-lg change-num-icon" v-on:click="sub_num_of_emp"></i>
                            </div>
                        </div>
                        <div class="form-group col-lg-7">
                            <label for="exampleFormControlTextarea1">Comments</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                            <small id="repeatPasswordHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <button type="submit" class="btn btn-primary offset-lg-6">Create</button>
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
            num_of_emp: 1
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
    position: relative;
    left: 35%;
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
