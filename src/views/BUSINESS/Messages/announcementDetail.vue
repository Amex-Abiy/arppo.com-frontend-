<template>
    <div>
        <div v-show="announcement" class="col-lg-11 offset-lg-0">
            <i class="fas fa-pencil-alt" v-on:click="announcementEditTextarea = !announcementEditTextarea"></i>
        </div>
        <h5 v-show="announcementErrMsg" class="text-center">{{ announcementErrMsg }}</h5>
        <p v-show="announcement">{{  announcement.announcementMsg }}</p>
        <div class="overlay" v-show="announcementEditTextarea">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" v-on:click="announcementEditTextarea = !announcementEditTextarea"><i class="fas fa-times"></i></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-12 offset-lg-0">
                                <ValidationObserver v-slot="{ handleSubmit }">
                                    <form v-on:submit.prevent="handleSubmit(editAnnouncement)">
                                        <div class="form-group col-lg-12">
                                            <ValidationProvider rules="required" v-slot="{ errors }">
                                                <label for="exampleFormControlTextarea1">Message</label>
                                                <textarea v-model="announcementMsg" class="form-control" v-bind:value="b" id="exampleFormControlTextarea1" rows="6"></textarea>
                                                <small class="form-text text-muted">{{ errors[0] }}</small>
                                            </ValidationProvider>
                                        </div>
                                        <button type="submit" class="btn btn-primary offset-lg-11">Edit</button>
                                    </form>
                                </ValidationObserver>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import navigation from '../../../components/BUSINESS/navigation'
import sidenav from '../../../components/BUSINESS/sidenav'
import axios from 'axios';
export default {
    data: function() {
        return {
            announcementEditTextarea: false,
            a: 'Make sure to assess all the applications on the management job posting',
            b: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore quibusdam accusamus harum in quod officia, itaque odit optio dicta molestias architecto saepe dolore atque maiores hic? Minima quaerat adipisci praesentium? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis veritatis impedit libero, facilis ex quo dignissimos dicta suscipit provident officiis dolorem rerum expedita sequi. Non eligendi sequi libero dolores minima!',
            announcement: {},
            announcementMsg: null,
            announcementErrMsg: null   
       }
    },
    components: {
        navigation, sidenav
    },
    methods: {
        editAnnouncement() {

        },
        fetchAnnouncement(){
            axios.get(`/business/announcement/fetchAnnouncementById/${this.$route.params.announcementId}`).then((result) => {
                if(result.data.status) {
                    this.announcement = result.data.data;
                    this.announcementMsg = result.data.data.announcementMsg
                } else {
                    this.announcementErrMsg = result.data.msg;
                }
                 console.log(this.announcement)
            }).catch((error) => { console.log(error) })
            // this.announcementTextarea = !this.announcementTextarea;
        }
    },
    created() {
        this.fetchAnnouncement()
    }
}
</script>
<style scoped>
.overlay{
    position: fixed;
    top: 5%;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: rgba(0, 0, 0, 0.1);
}

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

.fa-pencil-alt{
    margin-top: 3px;
    color: #026AA7;
}

.fa-pencil-alt:hover{
    cursor: pointer;
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

