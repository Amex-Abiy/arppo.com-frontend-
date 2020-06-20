<template>
   <div>
        <!--ADD COMPONENTS HERE-->
        <br>
        <div class="row">
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-4">
                                <p class="title">Name - </p>
                                <p class="title">Email - </p>
                                <p class="title">Role - </p>
                            </div>
                                <div class="col-lg-8">
                                <p class="">Amanuel Abiy</p>
                                <p class="">amexabiy@gmail.com</p>
                                <p class="">Sub-Admin</p>
                            </div>
                        </div>
                        <a href="#" class="btn btn-primary btn-more">more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>      
</template>
<script>
import navigation from '../../../components/BUSINESS/navigation'
import headers from '../../../components/BUSINESS/header'
import navbar from '../../../components/BUSINESS/navbar'
import sidenav from '../../../components/BUSINESS/sidenav'
export default {
    components: {
        headers, navigation, sidenav
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
</style>