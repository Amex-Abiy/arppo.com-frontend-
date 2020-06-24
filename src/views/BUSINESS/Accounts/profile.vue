<template>
   <div class="main-container">
        <!--ADD COMPONENTS HERE-->
        <div class="row container profile-box">
            <div class="col-lg-10 offset-lg-1">
                <p class="title created-on">Created on - <span class="profile-data">17 May, 2020</span></p>
                <figure class="figure">
                    <img src="../../../../public/images/avatar-profile-male.jpg" class="col-lg-6 offset-lg-3 figure-img img-fluid rounded" alt="...">
                </figure>
                <p class="admin-name text-center">Abebe Kebede</p>
                <div class="offset-lg-4">
                    <p class="title">Name - <span class="profile-data">Amanuel Abiy</span></p>
                    <p class="title">Email - <span class="profile-data">amexabiy@gmail.com</span></p>
                    <p class="title">Tel No. - <span class="profile-data">+251 961138866</span></p>
                    <p class="title">Role - <span class="profile-data">Sub-Admin</span></p>
                </div>
                <button class="btn edit-btn">Edit</button>
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

.admin-name{
    font-weight: 500;
    font-size: 18px;
}

.profile-box{
    border: 1px solid #ada9a9;
    padding: 3% 0% 3% 0%;
}

.main-container{
    margin-left: 20%;
    margin-right: 20%;
}

.profile-data{
    font-weight: 400;

}

.edit-btn{
    background-color: #DBE9F3;
    font-weight: 600;
    color: #026AA7;
    float: right;
}

.created-on{
    float: right;
}
</style>