<template>
   <div>
        <!--ADD COMPONENTS HERE-->
        <br>
        <div class="row card-desc">
            <div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-1 card-col1">
                        <div class="card card1 darkColor">
                            <div class="card-body">
                                <p class="card-icon"><i class="fas fa-user-clock"></i></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9 card-col2">
                        <div class="card card2 lightColor2">
                            <div class="card-body">
                                <div class="card-text">
                                    <strong>Login Hours</strong>
                                    <p class="">Set time limit ranges for Sub-Admins logins<strong> - Last set login time limit (8:00AM - 5:00PM)</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <br>
        <div class="time-pickers offset-lg-2">
            <form action="">
                <div class="row">
                    <div class="col-lg-4">
                        <p class="text-center">Strart Hour</p>
                        <time-picker :placeholder="startTime" v-model="startTime" />
                    </div>
                    <div class="col-lg-4">
                        <p class="text-center">End Hour</p>
                        <time-picker :placeholder="endTime" v-model="endTime" />
                    </div>
                </div>
                <br>
                <div class="offset-lg-3">
                    <button type="submit" class="btn btn-primary mx-auto">Set Time</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import navigation from '../../../components/BUSINESS/navigation'
import headers from '../../../components/BUSINESS/header'
import navbar from '../../../components/BUSINESS/navbar'
import sidenav from '../../../components/BUSINESS/sidenav'
import TimePicker from 'vue-bootstrap-time-picker';
export default {
    data: function() {
        return{
            startTime: '8:00 AM',
            endTime: '5:00 PM'

        }
    },
    components: {
        headers, navigation, sidenav, TimePicker
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
    color: #F7FAFC;
    float: right;
    padding: 5px 10px 5px 10px;
}

.btn-more:hover{
    color: #F7FAFC;
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

.darkColor{
    background-color: #026AA7;
}

.darkColor2{
    color:#242D33;
}

.lightColor{
    background-color: #F7FAFC;
}

.lightColor2 {
    background-color: #cbe9fd;
}

.card1{
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    
}

.card2{
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
}

.card-col1{
    padding-right: 0px;
}

.card-col2{
    padding-left: 0px;
}

.card-body{
    padding-bottom: 0px;
    padding-top: 0px;
}

.card-icon{
    margin-top: 18px;
}

.card-desc{
    margin-left: 5%;
}

.card-text{
    margin-top: 4px;
    margin-bottom: 5px;
}

.card-text strong{
    margin-top: 5px;
}

.card-text p{
    margin-bottom: 0px;
    padding-top: 2px;
}

i{
    color: #d6dfe6;
}


</style>