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
                                <p class="col-lg-10">How should we categorize the applications send on the system manager job posting?</p>
                                <p class="col-lg-2 msgDate">Mar 23, 2020</p>
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
</style>

