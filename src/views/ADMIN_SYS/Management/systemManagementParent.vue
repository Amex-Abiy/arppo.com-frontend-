<template>
   <div class="main-background">
        <headers/>
        <div class="row">
            <div class="col-lg-2 sidenav">
                 <sidenav/>
            </div>
            <div class="col-lg-10">
                <!--ADD COMPONENTS HERE-->
                <br>
                <router-view class="scrollable"></router-view>                
            </div>
        </div>
   </div>
</template>
<script>
import headers from '../../../components/ADMIN_SYS/header'
import sidenav from '../../../components/ADMIN_SYS/sidenav'
export default {
    components: {
        headers, sidenav
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
    height: 600px;
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

.main-background{
    background-color: #F7FAFC;
}
</style>