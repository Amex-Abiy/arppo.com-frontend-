<template>
    <div>
        <div class="col-lg-12">
            <div class="accordion" id="accordionExample">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <div class="row">
                            <div class="col-lg-3">
                                <p class="title">Title</p>
                                <p>Nework Management Officer</p>
                            </div>
                            <div class="col-lg-3">
                                <p class="title">ID</p>
                                <p>145885854556896</p>
                            </div>
                            <div class="col-lg-2">
                                <p class="title">Date posted</p>
                                <p>17, May 2020</p>
                            </div>
                            <div class="col-lg-2">
                                <router-link tag="p" :to="{}">Click here to see posting details</router-link>
                            </div>
                            <div class="col-lg-2">
                                <button class="btn btn-link btn-show" v-on:click="switchArrow1 = !switchArrow1" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <i class="fas fa-arrow-up" v-show="switchArrow1"></i>
                                    <i class="fas fa-arrow-down" v-show="!switchArrow1"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <span class="counter pull-right"></span>
                        <table>
                            <tr class="row">
                                <th class="col-lg-1"><span class="num">#No.</span></th>
                                <th class="col-lg-3">Name</th>
                                <th class="col-lg-3">Email</th>
                                <th class="col-lg-3">Phone no.</th>
                                <th class="col-lg-2">Application</th>
                            </tr>
                            <tr class="row">
                                <td class="col-lg-1"><span class="num">1</span></td>
                                <td class="col-lg-3">Amanuel Abiy</td>
                                <td class="col-lg-3">amexabiy@gmail.com</td>
                                <td class="col-lg-3">0961138866</td>
                                <td class="col-lg-2 text-center">(1)<a class="btn btn-light btn-view">view</a></td>
                            </tr>
                            <tr class="row">
                                <td class="col-lg-1"><span class="num">2</span></td>
                                <td class="col-lg-3">Biruk Debebe</td>
                                <td class="col-lg-3">birk04_99@gmail.com</td>
                                <td class="col-lg-3">0945863212</td>
                                <td class="col-lg-2 text-center">(2)<a class="btn btn-light btn-view">view</a></td>
                            </tr>
                            <tr class="row">
                                <td class="col-lg-1"><span class="num">3</span></td>
                                <td class="col-lg-3">Debebe Kebede</td>
                                <td class="col-lg-3">debe_1978@yahoo.com</td>
                                <td class="col-lg-3">0911568661</td>
                                <td class="col-lg-2 text-center">(1)<a class="btn btn-light btn-view">view</a></td>
                            </tr>
                            <tr class="row">
                                <td class="col-lg-1"><span class="num">4</span></td>
                                <td class="col-lg-3">Ermias Abebe</td>
                                <td class="col-lg-3">ermiasAb2236@gmail.com</td>
                                <td class="col-lg-3">0911568661</td>
                                <td class="col-lg-2 text-center">(3)<a class="btn btn-light btn-view">view</a></td>
                            </tr>
                            <tr class="row">
                                <td class="col-lg-1"><span class="num">5</span></td>
                                <td class="col-lg-3">Mihiret Abiy</td>
                                <td class="col-lg-3">mihiri12@gmail.com</td>
                                <td class="col-lg-3">0923668222</td>
                                <td class="col-lg-2 text-center">(1)<a class="btn btn-light btn-view">view</a></td>
                            </tr>
                            <tr class="row">
                                <td class="col-lg-1"><span class="num">6</span></td>
                                <td class="col-lg-3">Selam Chale</td>
                                <td class="col-lg-3">selamchala@gmail.com</td>
                                <td class="col-lg-3">0925486688</td>
                                <td class="col-lg-2 text-center">(4)<a class="btn btn-light btn-view text-left">view</a></td>
                            </tr>
                        </table>
                        <router-link :to="{ name:'ViewApplications' }"><button class="btn btn-link btn-view-all">
                            show all
                        </button></router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-12">
            <div class="accordion" id="accordionExample">
                <div class="card">
                    <div class="card-header" id="headingTwo">
                        <div class="row">
                            <div class="col-lg-3">
                                <p class="title">Title</p>
                                <p>Project Supervisor</p>
                            </div>
                            <div class="col-lg-3">
                                <p class="title">ID</p>
                                <p>784955854578543</p>
                            </div>
                            <div class="col-lg-2">
                                <p class="title">Date posted</p>
                                <p>23, June 2020</p>
                            </div>
                            <div class="col-lg-2">
                                <router-link tag="p" :to="{}">Click here to see posting details</router-link>
                            </div>
                            <div class="col-lg-2" :set="switchArrow2 = true" >
                                <button class="btn btn-link btn-show" v-on:click="switchArrow2 = !switchArrow2" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                                    <i class="fas fa-arrow-up" v-show="switchArrow2"></i>
                                    <i class="fas fa-arrow-down" v-show="!switchArrow2"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div id="collapseTwo" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <span class="counter pull-right"></span>
                        <table>
                            <tr class="row">
                                <th class="col-lg-1"><span class="num">#No.</span></th>
                                <th class="col-lg-3">Name</th>
                                <th class="col-lg-3">Email</th>
                                <th class="col-lg-3">Phone no.</th>
                                <th class="col-lg-2">Application</th>
                            </tr>
                            <tr class="row">
                                <td class="col-lg-1"><span class="num">1</span></td>
                                <td class="col-lg-3">Amanuel Abiy</td>
                                <td class="col-lg-3">amexabiy@gmail.com</td>
                                <td class="col-lg-3">0961138866</td>
                                <td class="col-lg-2 text-center">(1)<a class="btn btn-light btn-view">view</a></td>
                            </tr>
                            <tr class="row">
                                <td class="col-lg-1"><span class="num">2</span></td>
                                <td class="col-lg-3">Biruk Debebe</td>
                                <td class="col-lg-3">birk04_99@gmail.com</td>
                                <td class="col-lg-3">0945863212</td>
                                <td class="col-lg-2 text-center">(2)<a class="btn btn-light btn-view">view</a></td>
                            </tr>
                            <tr class="row">
                                <td class="col-lg-1"><span class="num">3</span></td>
                                <td class="col-lg-3">Debebe Kebede</td>
                                <td class="col-lg-3">debe_1978@yahoo.com</td>
                                <td class="col-lg-3">0911568661</td>
                                <td class="col-lg-2 text-center">(1)<a class="btn btn-light btn-view">view</a></td>
                            </tr>
                            <tr class="row">
                                <td class="col-lg-1"><span class="num">4</span></td>
                                <td class="col-lg-3">Ermias Abebe</td>
                                <td class="col-lg-3">ermiasAb2236@gmail.com</td>
                                <td class="col-lg-3">0911568661</td>
                                <td class="col-lg-2 text-center">(3)<a class="btn btn-light btn-view">view</a></td>
                            </tr>
                            <tr class="row">
                                <td class="col-lg-1"><span class="num">5</span></td>
                                <td class="col-lg-3">Mihiret Abiy</td>
                                <td class="col-lg-3">mihiri12@gmail.com</td>
                                <td class="col-lg-3">0923668222</td>
                                <td class="col-lg-2 text-center">(1)<a class="btn btn-light btn-view">view</a></td>
                            </tr>
                            <tr class="row">
                                <td class="col-lg-1"><span class="num">6</span></td>
                                <td class="col-lg-3">Selam Chale</td>
                                <td class="col-lg-3">selamchala@gmail.com</td>
                                <td class="col-lg-3">0925486688</td>
                                <td class="col-lg-2 text-center">(4)<a class="btn btn-light btn-view text-left">view</a></td>
                            </tr>
                        </table>
                        <router-link :to="{ name:'ViewApplications' }"><button class="btn btn-link btn-view-all">
                            show all
                        </button></router-link>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: function() {
        return{
            switchArrow: false
        }
    },
    methods: {

    }
}
</script>
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
}

.tr{
    padding-left: 3px;
}

tr:nth-child(even) {
  background-color: #e9e7e7;
}

.btn-more{
    color: #F7FAFC;
    padding: 5px 10px 5px 10px;
}

.btn-view{
    border-color: transparent;
    background-color: transparent;
    font-weight: 700;
    font-size: 15px;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-top: 0px;
    color: #1587c9;
}

.num{
    padding-left: 10px;
}

.title{
    font-weight: 500;
}

p{
    font-size: 14px;
    padding: 0px;
}

button{
    

}

.btn-show{
    background-color: #DBE9F3;
    font-weight: 600;
    color: #026AA7;
    border-color: 0px solid #DBE9F3;
}

.btn-view-all{
    background-color: #DBE9F3;
    font-weight: 600;
    color: #026AA7;
    float: right;
    margin: 5px 20px 5px 0px;
    border-color: 0px solid #DBE9F3;
}
</style>
