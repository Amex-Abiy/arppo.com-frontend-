<template>
    <div class="col-lg-11 offset-lg-0">
        <div class="card scrollable">
            <div class="card-body">
                <div class="messageThread">
                    <div class="row">
                        <div class="col-lg-1">
                            <p class="sender">You -</p>
                        </div>
                        <div class="col-lg-11">
                            <div class="row">
                                <p class="col-lg-10">{{ msgText }}</p>
                                <div class="row float-right-msg-compoonents">
                                    <button class="btn delete-btn col-lg-1"><i class="fas fa-trash fa-1x"></i></button>
                                    <p class="msgDate col-lg-11">May 06, 2020</p>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-1">
                            <p class="sender">Admin</p>
                        </div>
                        <div class="col-lg-11">
                            <div class="row">
                                <p class="col-lg-10">Categorize them based on the order of time and date the applicants have applied.</p>
                                <p class="col-lg-2 msgDate">Mar 24, 2020</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-1">
                            <p class="sender">You -</p>
                        </div>
                        <div class="col-lg-11">
                            <div class="row">
                                <p class="col-lg-10">{{ msgText }}</p>
                                <div class="row float-right-msg-compoonents">
                                    <button class="btn delete-btn col-lg-1"><i class="fas fa-trash fa-1x"></i></button>
                                    <p class="msgDate col-lg-11">May 06, 2020</p>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-1">
                            <p class="sender">Admin</p>
                        </div>
                        <div class="col-lg-11">
                            <div class="row">
                                <p class="col-lg-10">Categorize them based on the order of time and date the applicants have applied.</p>
                                <p class="col-lg-2 msgDate">Mar 24, 2020</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="msg-txt-area">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea class="form-control col-lg-12" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <small id="repeatPasswordHelp" class="form-text text-muted">Type in an inquiry for admin to respond to</small>
                </div>
                <button type="submit" class="btn btn-primary offset-lg-11">Send</button>
                <br/>
            </div>
        </div>
    </div>
</template>
<script>
import navigation from '../../../components/BUSINESS/navigation'
import sidenav from '../../../components/BUSINESS/sidenav'
export default {
    data: function(){
        return {
            msgEditBox: false,
            msgText: 'Categorize them based on the order of time and date the applicants have applied.Categorize them based on the order of time and date the applicants have applied.Categorize them based on the order of time and date the applicants have applied.'
        }
    },
    components: {
        navigation, sidenav
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

.sender{
    color: #026AA7;
    font-weight: 500;

}

.msgDate{
    font-size: 12px;
    margin-left: 0px;
    padding-top: 3px;
    padding-left: 18px;
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

.fa-pencil-alt{
    margin-top: 3px;
    color: #026AA7;
}

.delete-btn{
    padding: 0px;
    margin: 0px;
    background-color: #F7FAFC;
    border-color: #F7FAFC;
    height: 18px;
    margin-top: 0px;
    margin-right: 0px;
    padding-right: 0px;
}

.delete-btn:hover{
    cursor: pointer;
}

.delete-btn:active{
    padding: 0px;
    margin: 0px;
    background-color: white;
    border-color: #F7FAFC;
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
</style>

