<template>
    <div>
        <h5 v-show="errorMsg" class="text-center">{{ errorMsg }}</h5>
        <div v-if="jobPostingDetails" class="row">
            <div class="col-lg-11">
                <div class="card mx-auto">
                    <div class="card-body col-lg-10 offset-lg-1">
                        <div class="row card-content-rows">
                            <p class="col-lg-6 title">{{ jobPostingDetails.positionTitle }}</p>
                            <p class="col-lg-4 offset-lg-0 id"><strong>ID - </strong>{{ jobPostingDetails.hashedId | sliceId }}</p>
                            <div class="dropdown dropleft link-anchor col-lg-1">
                                <a href="" class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown">
                                    <img src="../../../../public/icons/link.svg" class="link">
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <p class="dropdown-item">{{ jobPostingDetails.postLink | sliceLink }}<button class="btn copy-link-btn">copy</button></p>
                                </div>
                            </div>
                        </div>
                        <div class="row card-content-rows">
                            <p class="col-lg-4 sub-title">Job Requirement</p><br>
                            <p class="discription">{{ jobPostingDetails.jobReq }}</p><br>
                            <p class="col-lg-4 sub-title">Job Description</p><br>
                            <p class="discription">{{ jobPostingDetails.jobDesc }}</p><br>
                            <p v-show="jobPostingDetails.comments" class="col-lg-4 sub-title">Comments</p><br>
                            <p v-show="jobPostingDetails.comments" class="discription">{{ jobPostingDetails.comments }}</p>
                        </div>
                        <p class="sub-title">Number of Employees -<span class="discription_num_of_emp">{{ jobPostingDetails.noOfEmployees }}</span></p>
                        <div class="row card-content-rows">
                            <p class="col-lg-3 offset-lg-1"><strong>Posted On - </strong>{{ jobPostingDetails.postingDate | formatDate }}</p>
                            <p class="col-lg-3 offset-lg-1"><strong>Closes On - </strong>{{ jobPostingDetails.postEndDate | formatDate }}</p>
                            <router-link :to="{ name: 'Edit', params: {'id' : jobPostingDetails.hashedId }}" class="col-lg-1 offset-lg-2"><button class="btn edit-btn">Edit</button></router-link> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data: function() {
        return{
            link: 'https://localhost:5000/v1/applicant/jobPostings/Another Bank/7d488af942323b6d449a86d46c1803c9092b403fe48a3006778d6dbc7f45baa4',
            jobPostingDetails: {},
            errorMsg: null
        }
    },
    methods: {
        getJobPostingDetails() {
            axios.get(`/business/manage/jobPostings/getJobPostingDetails/${this.$route.params.id}`).then((result) => {
                console.log('this.jobPostingDetails', result.data.msg)
                if(result.data.status) {
                    this.jobPostingDetails = result.data.data;
                    console.log('this.jobPostingDetails', this.jobPostingDetails)
                    this.errorMsg = null;
                } else {
                    this.errorMsg = result.data.msg;
                }
            })
        }
    },
    created() {
        this.getJobPostingDetails()
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

.discription_num_of_emp{
    margin-left: 1%;
    font-weight: 400;
    color: black;
    font-size: 14px;
}

.edit-btn{
    background-color: #DBE9F3;
    font-weight: 500;
    font-size: 14.4px;
    padding-top: 5px;
    padding-bottom: 5px;
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
