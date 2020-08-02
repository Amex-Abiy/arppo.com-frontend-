<template>
   <div>
        <navigation/>
        <div class="row">
            <div class="col-lg-2 sidenav">
                 <sidenav/>
            </div>
                <div class="col-lg-10 scrollable">
                <!--ADD COMPONENTS HERE-->
                <div class="row">
                    <div class="col-lg-7">
                        <div class="card">
                            <div class="card-body">
                                <div class="row justify-content-md-center">
                                    <div class="col col-lg-3">
                                        <div class="form-check form-check-inline">
                                            <input v-model="timeFrame" class="form-check-input" type="radio" name="role" id="inlineRadio2" value="0">
                                            <label class="form-check-label" for="inlineRadio2">24 Hours</label>
                                        </div>
                                    </div>
                                    <div class="col-md-auto col-lg-2"></div>
                                    <div class="col col-lg-3">
                                        <div class="form-check form-check-inline">
                                            <input v-model="timeFrame" class="form-check-input" type="radio" name="role" id="inlineRadio2" value="1">
                                            <label class="form-check-label" for="inlineRadio2">1 Week</label>
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <br>
                                <p v-show="!timeFrameMsg" class="card-data text-center"><span class="card-data-value">241</span> applicants have applied for <span class="card-data-value">3</span> job postings</p>
                                <p v-show="timeFrameMsg" class="card-data text-center">{{ timeFrameMsg }}</p>
                                <router-link :to="{ name: 'viewByPostings' }"><button class="btn btn-view">view</button></router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <p>Create a new Job Posting...</p>
                                        <img class="search-icon" src="../../../public/icons/search.svg" alt="">
                                        <router-link :to="{ name: 'CreateJobPosting' }"><button class="btn btn-create-now">CREATE NOW</button></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-lg-11">
                        <div class="card">
                            <div class="card-body">
                                <div class="col-lg-7">
                                    <graph-line-dateblock
                                        :height="350"
                                        :axis-min="0"
                                        :axis-max="10"
                                        :axis-reverse="false"
                                        :axis-format="'HH:mm'"
                                        :axis-interval="1000 * 60 * 60 * 8"
                                        :labels="labels"
                                        :values="values">
                                        <note :text="'Line Chart'"></note>
                                        <legends :names="names"></legends>
                                        <tooltip :names="names" :position="'right'"></tooltip>
                                        <guideline :tooltip-x="true" :tooltip-y="true"></guideline>
                                    </graph-line-dateblock>
                                </div>
                                <div class="col-lg-5">
                                    <legends :names="names"></legends>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>
<script>
import navigation from '../../components/BUSINESS/navigation'
import headers from '../../components/BUSINESS/header'
import navbar from '../../components/BUSINESS/navbar'
import sidenav from '../../components/BUSINESS/sidenav'
import axios from 'axios';
export default {
    data: function(){
        return{
            labels: [ new Date("2018-07-07 00:00:00"), new Date("2018-07-08 00:00:00") ],
            names: [ "Software Management", "Network Officer", "Store Keeper" ],
            values: [
                [ 10, 0, 5, 5 ],
                [ 40, 10, 10, 10 ],
                [ 30, 25, 35, 30 ]
            ],
            timeFrame: 0,
            // this is used when the data returned for that time frame is null
            timeFrameMsg: null
        }
    },
    components: {
        headers, navigation, sidenav
    },
    watch: {
        // triggerd whenever timeFrame changes
       timeFrame: function() {
           this.fetchTimeFrameApplications()
       } 
    },
    methods: {
        // for number of pplications in 24hrs or 1 week
        fetchTimeFrameApplications() {
            axios.get(`/business/manage/applications/jobApplicationsInGivenTimeInterval/${this.timeFrame}`).then((result) => {
                if(result.data.data){
                    this.timeFrameMsg = null;
                    console.log('result', result.data.msg)
                }else{
                    this.timeFrameMsg = result.data.msg
                }
                
            }).catch(error => { console.log(error) })
        }
    },
    created() {
        this.fetchTimeFrameApplications()
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

.scrollable {
    height: 560px;
    overflow-x: hidden;
    overflow-y: auto;
}

.darkColor{
    background-color: #026AA7;
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

.form-check-label{
    font-weight: 500;
}

.card-data{
    font-size: 16px;
}

.card-data-value{
    font-weight: 600;
    border-bottom: 2px solid #6b6969;
}

.btn-create-now{
    border-radius: 0px;
    background-color: #DBE9F3;
    color: #3F87E5
}

.search-icon{
    height: 50px;
    margin-right: 15%;
}

.btn-view{
    padding: 0px;
    background-color: #F7FAFC;
    font-weight: 500;
    color: #025c91;
    float: right;
    margin-right: 5%;
}
</style>