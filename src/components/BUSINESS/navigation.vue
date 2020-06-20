<template>
   <div>
        <div class="row">
            <div class="col-lg-2 sidenav">
                <div class="darkColor">
                    <div class="logo-components">
                        <h3 class="lightColor position">arppo</h3>
                        <p class="lightColor2 position">Lorem ipsum dolor sit</p>
                        <br>
                    </div> 
                </div> 
            </div>
            <div class="col-lg-10 headerNav">
                <headers/>
                <navbar/>
            </div>
        </div>
        
   </div>
</template>
<script>
import headers from '../../components/BUSINESS/header'
import navbar from '../../components/BUSINESS/navbar'
import sidenav from '../../components/BUSINESS/sidenav'
export default {
    components: {
        headers, navbar, sidenav
    }
}
</script>
<style scoped>
.sidenav{
    padding: 0px;
    margin-top: 0px;
}
.headerNav{
    padding-left: 0px;
    padding-right: 0px;
}
.darkColor{
    background-color: #026AA7;
}

h4{
    font-family: 'PT Sans', sans-serif;
}
.position{
    margin-left: 10%;
}

p{
    font-style: italic;
    font-family: 'Ubuntu', sans-serif;
}
.lightColor{
    color: #F7FAFC;
}

.lightColor2 {
    color: #cbe9fd;
}

.logo-components{
    padding-top: 3%;
    padding-left: 2%;
}

.vertical-line{
    border-left: 1px solid #707070;
    position: absolute;
    left: 16%;
    height: 500px;
}
</style>