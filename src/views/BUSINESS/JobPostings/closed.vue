<template>
    <div>
        <h5 v-show="errorMsg" class="text-center">{{ errorMsg }}</h5>
        <div v-show="!errorMsg" v-for="posting in closedJobPostingsList" v-bind:key="posting.id" class="row">
            <div class="col-lg-8 offset-lg-2">
                <div class="card">
                    <div class="card-body">
                        <div class="row card-content-rows">
                            <p class="col-lg-5 title">{{ posting.positionTitle }}</p>
                            <p class="col-lg-5 offset-lg-0 id"><strong>ID - </strong>{{ posting.hashedId | sliceId }}</p>
                            <div class="dropdown dropleft link-anchor col-lg-1 offset-lg-0">
                                <a href="" class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown">
                                    <img src="../../../../public/icons/link.svg" class="link">
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <p class="dropdown-item">{{ posting.postLink | sliceLink }}<button class="btn copy-link-btn">copy</button></p>
                                </div>
                            </div>
                        </div>
                        <div class="row card-content-rows">
                            <p class="col-lg-4 sub-title">Job Requirement</p><br>
                            <p class="discription">{{ posting.jobReq | sliceJobReq }}</p>
                        </div>
                        <div class="row card-content-rows">
                            <p class="col-lg-5"><strong>Posted On - </strong>{{ posting.postingDate | formatDate }}</p>
                            <p class="col-lg-5"><strong>Closes On - </strong>{{ posting.postEndDate | formatDate }}</p>
                            <router-link :to="{ name: 'Details', params: {'id' : posting.hashedId } }" class="col-lg-1"><button class="btn more-btn">more</button></router-link>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        <br>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data: function() {
        return{
            closedJobPostingsList: [],
            errorMsg: null,
            link: 'https://localhost:5000/v1/applicant/jobPostings/Another Bank/7d488af942323b6d449a86d46c1803c9092b403fe48a3006778d6dbc7f45baa4'
        }
    },
    methods: {
        getActiveJobPostings() {
            axios.get('/business/manage/jobPostings/getClosed').then((result) => {
                if(result.data.status) {
                    this.closedJobPostingsList = result.data.data;
                    this.errorMsg = null;
                } else {
                    this.errorMsg = result.data.msg;
                }
            })
        }
    },
    created() {
        this.getActiveJobPostings()
    }
}
</script>
<style scoped>
.more-router-link{
    padding-top: 0px;
    padding-bottom: 0px;
}

.card{
    border-color: rgb(223, 58, 58);
}

.link{
    cursor: pointer;
    transform: rotate(45deg);
    filter: invert(28%) sepia(32%) saturate(2909%) hue-rotate(176deg) brightness(104%) contrast(99%);
}

.id{
    padding-left: 10%;
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

.discription{
    margin-left: 5%;
    margin-right: 3%;
}

.more-btn{
    background-color: #DBE9F3;
    font-weight: 500;
    font-size: 14px;
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
