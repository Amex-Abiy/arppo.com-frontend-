<template>
    <div class="col-lg-11 offset-lg-0">
        <div class="card scrollable">
            <div class="card-body">
                <router-link class="router-link" :to="{ name: 'AnnouncementDetail', params: { 'announcementId': 4646464688846} }">
                    <div class="card">
                        <div class="card-body card-with-content">
                            <div class="row">
                                <div class="col-lg-10 offset-lg-0">
                                    <p class='announcement-msg'>{{ a | sliceAnnouncementPrev}}</p>
                                </div>
                                <div class="col-lg-2 offset-lg-0">
                                    <p class="dateTime">May 06, 2020 12:30 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                </router-link>
                    <router-link class="router-link" :to="{ name: 'AnnouncementDetail', params: { 'announcementId': 4646464688846} }">
                    <div class="card">
                        <div class="card-body card-with-content">
                            <div class="row">
                                <div class="col-lg-10 offset-lg-0">
                                    <p class='announcement-msg'>{{ b | sliceAnnouncementPrev}}</p>
                                </div>
                                <div class="col-lg-2 offset-lg-0">
                                    <p class="dateTime">Jun 13, 2020 02:30 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import navigation from '../../../components/BUSINESS/navigation'
import sidenav from '../../../components/BUSINESS/sidenav'
export default {
    components: {
        navigation, sidenav
    },
    data: function() {
        return {
            a: 'Make sure to assess all the applications on the management job posting',
            b: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore quibusdam accusamus harum in quod officia, itaque odit optio dicta molestias architecto saepe dolore atque maiores hic? Minima quaerat adipisci praesentium? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis veritatis impedit libero, facilis ex quo dignissimos dicta suscipit provident officiis dolorem rerum expedita sequi. Non eligendi sequi libero dolores minima!'
        }
    }
}
</script>
<style scoped>
.scrollable {
    overflow-x: hidden;
    overflow-y: auto;
}

p{
    font-size: 15px;
}

.card-with-content{
    padding: 15px 10px 5px 10px;
    background-color: #F7FAFC;
}

.card-with-content:hover{
    background-color: #cbe9fd;
    border-color: #cbe9fd;
    cursor: pointer;
}

.announcement-msg{
    color: #212529;
}

.router-link{
    text-decoration: unset;
}
.sender{
    color: #026AA7;
    font-weight: 500;

}

.dateTime{
    float: right;
    font-size: 12px;
}

.card-body{
    margin-top: 0%;
}

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

.scrollable {
    height: 500px;
    overflow-x: hidden;
    overflow-y: auto;
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

.main-background{
    background-color: #F7FAFC;
}

.horizontal-line{
    border-bottom: 1px solid rgb(66, 64, 64);
}
</style>

