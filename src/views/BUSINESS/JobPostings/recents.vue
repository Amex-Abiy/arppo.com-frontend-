<template>
    <div>
        <p class="title">This Week</p>
        <div class="row card-rows">
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <p class="jobTitle">Job Title - System Manager</p>
                        <p class="id">ID - 65129t66567</p>
                        <p class="id">Applicants - <strong>24</strong></p>
                        <p class="date">Closes on - 25 July, 2020</p>
                        <div class="row justify-content-between">
                            <p class="status">Status - Active<span class="active"></span></p>
                            <button class="btn more-btn">more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <p class="title">This Month</p>
        <div class="row card-rows">
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <p class="jobTitle">Job Title - System Manager</p>
                        <p class="id">ID - 65129t66567</p>
                        <p class="id">Applicants - <strong>24</strong></p>
                        <p class="date">Closes on - 25 July, 2020</p>
                        <div class="row justify-content-between">
                            <p class="status">Status - Active<span class="active"></span></p>
                            <button class="btn more-btn">more</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <p class="jobTitle">Job Title - Project Supervisor</p>
                        <p class="id">ID - 65129t66567</p>
                        <p class="id">Applicants - <strong>3</strong></p>
                        <p class="date">Closes on - 25 July, 2020</p>
                        <div class="row justify-content-between">
                            <p class="status">Status - Closed<span class="closed"></span></p>
                            <button class="btn more-btn">more</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <p class="jobTitle">Job Title - Nework Management Officer</p>
                        <p class="id">ID - 65129t66567</p>
                        <p class="id">Applicants - <strong>32</strong></p>
                        <p class="date">Closes on - 25 July, 2020</p>
                        <div class="row justify-content-between">
                            <p class="status">Status - closed<span class="closed"></span></p>
                            <button class="btn more-btn">more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.title{
    font-weight: 500;
    font-size: 16px;
    margin-left: 4%;
}
.card-rows{
    margin-left: 5%;
}

.jobTitle{
    font-weight: 500;
} 

.id{
    font-size: 14px;
} 

.date{
    font-size: 14px;
}

.status{
    font-size: 14px;   
}

.more-btn{
    background-color: #f1f5f8;
    font-weight: 500;
    font-size: 14.4px;
    padding-top: 0px;
    padding-bottom: 0px;
    margin-bottom: 4%;
    color: #026AA7;
    float: right;
}

.justify-content-between{
    margin-left: 0%;
    margin-right: 0%;
}

.active {
    height: 10px;
    width: 10px;
    background-color: rgb(6, 168, 6);
    border-radius: 50%;
    position: relative;
    top: 1px;
    left: 5px;
    display: inline-block;
}

.closed{
    height: 10px;
    width: 10px;
    background-color: rgb(209, 9, 9);
    border-radius: 50%;
    position: relative;
    top: 1px;
    left: 5px;
    display: inline-block;
}
</style>
