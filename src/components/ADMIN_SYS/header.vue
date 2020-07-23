<template>
    <div class="row">
        <div class="col-lg-12">
            <nav class="navbar lightColor">
                <div class="row">
                    <a class="navbar-brand text-center" href="#">arppo</a>
                    <div class="dropdown-account dropleft">
                        <span class="dropdown-key" data-toggle="dropdown"><p class="account-letter text-center">K</p></span>
                        <div class="dropdown-menu dropdown-menu-account" aria-labelledby="dropdownMenuButton">
                            <h5 class="d-flex justify-content-center">Kebede Abebe</h5>
                            <p class="d-flex justify-content-center">kebede_tef99@gmail.com</p>
                            <div class="d-flex justify-content-center"><button class="btn more-btn">Logout</button></div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.account-letter{
    color: #F7FAFC;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    margin-top: 5px;
}

.dropdown-menu-lang{
    background-color: #F7FAFC;
    min-width: 80px;
    position: absolute;
    top: 25px;
    right: 3.5%;
}

.dropdown-menu-account{
    padding: 25px;
    align-content: center;
    align-items: center;
    background-color: #F7FAFC;
}

.dropdown-icon{
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 10px;
}

.dropdown-localization{
    font-weight: 500;
    font-size: 15px;
    margin-top: 0.3%;
    position: absolute;
    right: 8.6%;
    width: 14%;
    cursor: pointer;
}

.dropdown-account {
    height: 30px;
    width: 30px;
    background-color: #026AA7;
    border-radius: 50%;
    position: absolute;
    right: 5%;
    text-align: center;
    display: inline-block;
    cursor: pointer;
}

.link{
    cursor: pointer;
    margin-left: 5px;
    position: absolute;
    right: 12%;
}

.lang{
    position: absolute;
    right: 0%;
    margin-top: 3px;
}

.lightColor{
    background-color: #DBE9F3;
}

.navbar-brand{
    line-height: 1.0;
    font-weight: 700;
    color:#063777;
    padding: 0px;
    font-size: 26px;
    position: relative;
    left: 700%;     
}

.more-btn{
    background-color: #026AA7;
    font-weight: 500;
    font-size: 14px;
    color: #DBE9F3;
}
</style>