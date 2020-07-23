<template>
    <div>
        <div class="row">
            <div class="col-lg-10 offset-lg-1">
                <h5 class="col-lg-5 offset-lg-3 text-center">Network Manager (<a class="details-link text-primary" v-on:click="showDetails = true">details</a>)</h5>
                <br>
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
                        <td class="col-lg-2 text-center">(4)<router-link target="_blank" :to="{ name: 'ViewAppDetails' }"><a class="btn btn-light btn-view text-left">view</a></router-link></td>
                    </tr>
                </table>
            </div>
        </div>
        <template>
            <pdf src="../../../../public/pdfEx.pdf"></pdf>
        </template>
        <div class="overlay" v-show="showDetails">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <!-- <div class="modal-header">
                        <h5 class="modal-title">
                            Error
                        </h5>
                        <button type="button" class="close" v-on:click="showDetails = !showDetails"><span aria-hidden="true">&times;</span></button>
                    </div> -->
                    <div class="modal-body">
                       <div class="row">
                            <div class="col-lg-12 offset-lg-0">
                                <div class="card">
                                    <div class="card-body col-lg-10 offset-lg-1">
                                        <div class="row card-content-rows">
                                            <p class="col-lg-6 title">System Manager</p>
                                            <p class="col-lg-4 offset-lg-2 id"><strong>ID - </strong>145885854556896</p>
                                        </div>
                                        <div class="row card-content-rows">
                                            <p class="col-lg-4 sub-title">Job Requirement</p><br>
                                            <p class="discription">Educational Qualification: B.Sc. in Computer Science or Electrical Engineering
                                                Work Experience: 2 years relevant experience in the banking industry or 2 years as Associate Network
                                                Administration & Maintenance Officer or equivalent.</p>
                                            <p class="col-lg-4 sub-title">Job Discription</p><br>
                                            <p class="discription">Educational Qualification: B.Sc. in Computer Science or Electrical Engineering
                                                Work Experience: 2 years relevant experience in the banking industry or 2 years as Associate Network
                                                Administration & Maintenance Officer or equivalent.</p>
                                        </div>
                                        <div class="row card-content-rows">
                                            <p class="col-lg-5"><strong>Posted On - </strong>17, May 2020</p>
                                            <p class="col-lg-5"><strong>Closes On - </strong>01, June 2020</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button v-on:click="showDetails = !showDetails" class="btn btn-ok">Ok</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import pdf from 'vue-pdf'
export default {
    data: function() {
        return{
            switchArrow: false,
            showDetails: false
        }
    },
    components: {
        pdf
    },
    methods: {

    }
}
</script>
<style scoped>
.overlay{
    position: fixed;
    top: 0%;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: rgba(0, 0, 0, 0.1);
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding-top: 8px;
  padding-bottom: 0px;
}

.tr{
    padding-left: 3px;
}

tr:nth-child(even) {
  background-color: #e9e7e7;
}

.title{
    font-weight: 500;
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

p{
    font-size: 14px;
    padding: 0px;
}

.title{
    font-weight: 500;
    font-size: 16px;
}

.sub-title{
    font-weight: 500;
    margin-left: 5%;
}

.details-link{
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
}

.btn-ok{
    float: right;
    margin-top: 1%;
    margin-right: 1%;
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
