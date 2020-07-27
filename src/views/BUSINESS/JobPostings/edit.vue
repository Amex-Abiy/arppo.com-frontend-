<template>
    <div>
        <div class="row">
            <div class="col-lg-11">
                <div class="card mx-auto">
                    <div class="card-body col-lg-10 offset-lg-1">
                        <ValidationObserver v-slot="{ handleSubmit }">
                            <form v-on:submit.prevent="handleSubmit(submit)">
                                <div class="form-group col-lg-6">
                                    <ValidationProvider rules="required" v-slot="{ errors }">
                                        <label for="firstname">Position Title *</label>
                                        <input type="text" class="form-control" id="firstname" aria-describedby="firstnameHelp">
                                        <small id="firstnameHelp" class="form-text validation-error">{{ errors[0] }}</small>
                                    </ValidationProvider>
                                </div> 
                                <div class="form-group col-lg-12">
                                    <ValidationProvider rules="required" v-slot="{ errors }">
                                        <label for="exampleFormControlTextarea1">Job Requirement *</label>
                                        <ejs-richtexteditor ref="defaultRTE" :height="300" class=""></ejs-richtexteditor>
                                        <small id="repeatPasswordHelp" class="form-text validation-error">{{ errors[0] }}</small>
                                    </ValidationProvider>
                                </div>
                                <div class="form-group col-lg-12">
                                    <ValidationProvider rules="required" v-slot="{ errors }">
                                        <label for="exampleFormControlTextarea1">Job Discription *</label>
                                        <ejs-richtexteditor ref="defaultRTE" :height="300" class=""></ejs-richtexteditor>
                                        <small id="repeatPasswordHelp" class="form-text validation-error">{{ errors[0] }}</small>
                                    </ValidationProvider>
                                </div>
                                <div class="col-lg-12">
                                    <label for="exampleFormControlTextarea1">Job Type *</label><br><br>
                                    <div class="offset-lg-1">
                                        <ValidationProvider rules="required" v-slot="{ errors }">
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
                                            <small id="firstnameHelp" class="form-text validation-error">{{ errors[0] }}</small>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <br>
                                <div class="form-group col-lg-10">
                                    <label for="repeatPassword">Number of employees needed for position</label>
                                    <ValidationProvider rules="required" v-slot="{ errors }">
                                        <div class="row num_of_emp">
                                            <input v-model="num_of_emp" type="text" class="form-control col-lg-1" id="repeatPassword" aria-describedby="repeatPasswordHelp">
                                            <i class="fas fa-caret-up fa-lg change-num-icon" v-on:click="add_num_of_emp"></i>
                                            <i class="fas fa-caret-down fa-lg change-num-icon" v-on:click="sub_num_of_emp"></i>
                                            <small id="firstnameHelp" class="form-text validation-error">{{ errors[0] }}</small>
                                        </div>
                                    </ValidationProvider>
                                </div>
                                <div class="form-group col-lg-12">
                                    <ValidationProvider rules="name" v-slot="{ errors }">
                                        <label for="exampleFormControlTextarea1">Comments</label>
                                        <ejs-richtexteditor ref="defaultRTE" :height="300" class=""></ejs-richtexteditor>
                                        <small id="repeatPasswordHelp" class="form-text validation-error">{{ errors[0] }}</small>
                                    </ValidationProvider>
                                </div>
                                <div class="col-lg-5">
                                    <ValidationProvider rules="required" v-slot="{ errors }">
                                        <label for="datePicker">Application Closing Date</label>
                                        <date-picker class="col-lg-12 datePicker" v-model="date" :config="options" id="datePicker"></date-picker>
                                        <small id="firstnameHelp" class="form-text validation-error">{{ errors[0] }}</small>
                                    </ValidationProvider>
                                </div>
                                <button type="submit" class="btn btn-primary offset-lg-10">Update</button>
                            </form>
                        </ValidationObserver>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>
<script>
import { RichTextEditorPlugin, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";
import { ValidationProvider, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import * as rules from 'vee-validate/dist/rules';
export default {
    data: function() {
        return{
            editingForm: false,
            link: 'https://localhost:5000/v1/applicant/jobPostings/Another Bank/7d488af942323b6d449a86d46c1803c9092b403fe48a3006778d6dbc7f45baa4',
            num_of_emp: 1
        }
    },
    provide: {
        richtexteditor:[Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar]
    },
    options: {
        format: 'DD/MM/YYYY',
        useCurrent: false,
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
        },
        submit() {
            
        }
    }
}
</script>
<style scoped>
.link{
    cursor: pointer;
    transform: rotate(45deg);
    filter: invert(28%) sepia(32%) saturate(2909%) hue-rotate(176deg) brightness(104%) contrast(99%);
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

.id{
    padding-left: 10%;
}

.change-num-icon{
    margin-top: 1.5%;
    margin-left: 3%;
    cursor: pointer;
}

.dropleft .dropdown-toggle::before{
    display: none;
}

.dropdown-menu{
    height: 40px;
    border-color: #8a8888;
    background-color: #F7FAFC;
}

.dropdown-menu p{
    padding: 0px 10px 0px 10px;
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

.modal-dialog{
    width: 100%;
    overflow-y: auto;
}

.modal-content{
    background-color: #F7FAFC;
}

.discription{
    margin-left: 5%;
    margin-right: 3%;
}

.edit-btn{
    background-color: #DBE9F3;
    font-weight: 500;
    font-size: 14.4px;
    padding-top: 0px;
    padding-bottom: 0px;
    color: #026AA7;
    float: right;
}

.copy-link-btn{
    font-weight: 500;
    font-size: 14.4px;
    padding-top: 0px;
    padding-bottom: 0px;
    margin-left: 5px;
    margin-bottom: 2px;
    color: #026AA7;
}

strong{
    font-size: 14px;
}

p{
    font-size: 14px;
}
</style>
