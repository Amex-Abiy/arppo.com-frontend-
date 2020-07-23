<template>
    <div>
        <div class="search-bar container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <label class="sr-only" for="inlineFormInputGroup">Username</label>
                    <div class="input-group mb-2">
                        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Search...">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <div class="dropdown">
                                    <p class="dropdown-key" id="dropdownMenuButton" data-toggle="dropdown">Biz Name<i class="fas fa-caret-down dropdown-key-icon"></i></p>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Biz Id</a>
                                        <a class="dropdown-item" href="#">Emp Email</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <div class="search-results">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="card card-results" v-on:click="goToPage()">
                        <div class="card-body">
                            <div class="row">
                                <h5 class="col-lg-6">Company name Inc.</h5>
                                <p class="col-lg-6 biz-card-id">7d488af942323b6d449a86d46c1803c9092b403fe48a3006778d6dbc7f45baa4</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br> 
        </div>
    </div>
</template>
<script>
export default {
    data: function() {
        return{
            exampleBusinessId: '7d488af942323b6d449a86d46c1803c9092b403fe48a3006778d6dbc7f45baa4'
        }
    },
    methods: {
        goToPage(){
            this.$router.push({ name: this.$route.params.forPath, params: { 'businessId': this.exampleBusinessId }})
            
        }
    },
}
</script>
<style scoped>
.biz-card-id{
    font-size: 15px !important;
    font-weight: 500;
}

.biz-card-id{
    cursor:text;
}

.link{
    margin-bottom: 3%;
    cursor: pointer;
    transform: rotate(45deg);
    filter: invert(28%) sepia(32%) saturate(2909%) hue-rotate(176deg) brightness(104%) contrast(99%);
}

.card-body{
    margin: 0px;
    padding: 10px 12px 0px 12px;
}

.discription{
    margin-left: 5%;
    margin-right: 3%;
}

.more-btn{
    background-color: #DBE9F3;
    font-weight: 500;
    font-size: 14.4px;
    padding-top: 0px;
    padding-bottom: 0px;
    color: #026AA7;
    float: right;
}

strong{
    font-size: 14px;
}

p{
    font-size: 14px;
}

.horizontal-line{
    border-bottom: 2px solid #817f7f;
    width: 30%;
    
}

.btn-light{
    font-weight: 500;
}

.change-num-icon{
    margin-top: 1.5%;
    margin-left: 3%;
    cursor: pointer;
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

.card-results{
    cursor: pointer;
}

.card-results:hover{
    background-color: #DBE9F3;
}
</style>
