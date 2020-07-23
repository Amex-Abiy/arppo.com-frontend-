<template>
    <div>
        <div class="row">
            <div class="col-lg-11">
                <div class="card mx-auto">
                    <div class="card-body col-lg-10 offset-lg-1">
                        <div class="row card-content-rows">
                            <p class="col-lg-6 title">System Manager</p>
                            <p class="col-lg-4 offset-lg-0 id"><strong>ID - </strong>145885854556896</p>
                            <div class="dropdown dropleft link-anchor col-lg-1">
                                <a href="" class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown">
                                    <img src="../../../../public/icons/link.svg" class="link">
                                </a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <p class="dropdown-item">{{ link | concatLink }}<button class="btn copy-link-btn">copy</button></p>
                                </div>
                            </div>
                        </div>
                        <div class="row card-content-rows">
                            <p class="col-lg-4 sub-title">Job Requirement</p><br>
                            <p class="discription">Educational Qualification: B.Sc. in Computer Science or Electrical Engineering
                                Work Experience: 2 years relevant experience in the banking industry or 2 years as Associate Network
                                Administration & Maintenance Officer or equivalent.</p><br>
                            <p class="col-lg-4 sub-title">Job Description</p><br>
                            <p class="discription">Educational Qualification: B.Sc. in Computer Science or Electrical Engineering
                                Work Experience: 2 years relevant experience in the banking industry or 2 years as Associate Network
                                Administration & Maintenance Officer or equivalent. Educational Qualification: B.Sc. in Computer Science or Electrical Engineering
                                Work Experience: 2 years relevant experience in the banking industry or 2 years as Associate Network
                                Administration & Maintenance Officer or equivalent.</p><br>
                            <p class="col-lg-4 sub-title">Comments</p><br>
                            <p class="discription">Educational Qualification: B.Sc. in Computer Science or Electrical Engineering
                                Work Experience: 2 years relevant experience in the banking industry or 2 years as Associate Network
                                Administration & Maintenance Officer or equivalent. Educational Qualification: B.Sc. in Computer Science or Electrical Engineering
                                Work Experience: 2 years relevant experience in the banking industry or 2 years as Associate Network
                                Administration & Maintenance Officer or equivalent.</p><br>
                        </div>
                        <div class="row card-content-rows">
                            <p class="col-lg-4 offset-lg-1"><strong>Posted On - </strong>17, May 2020</p>
                            <p class="col-lg-4 offset-lg-2"><strong>Closes On - </strong>01, June 2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
    </div>
</template>
<script>
export default {
    data: function() {
        return{
            link: 'https://localhost:5000/v1/applicant/jobPostings/Another Bank/7d488af942323b6d449a86d46c1803c9092b403fe48a3006778d6dbc7f45baa4'
        }
    },
    methods: {

    }
}
</script>
<style scoped>
.link{
    cursor: pointer;
    transform: rotate(45deg);
    filter: invert(28%) sepia(32%) saturate(2909%) hue-rotate(176deg) brightness(104%) contrast(99%);
}

.link-anchor{
}

.id{
    padding-left: 10%;
}

.dropleft .dropdown-toggle::before{
    display: none;
}

.dropdown-menu{
    height: 40px;
    border-color: #8a8888;
    background-color: #F7FAFC;
}

.dropdown-menu p{
    padding: 0px 10px 0px 10px;
}

.title{
    font-size: 18px;
    font-weight: 500;
}

.sub-title{
    color: #655F5F;
    font-size: 16px;
    font-weight: 500;
    margin-left: 5%;
}

.card-content-rows{
    margin-bottom: 0px;
    padding-bottom: 0px;
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

.copy-link-btn{
    font-weight: 500;
    font-size: 14.4px;
    padding-top: 0px;
    padding-bottom: 0px;
    margin-left: 5px;
    margin-bottom: 2px;
    color: #026AA7;
}

strong{
    font-size: 14px;
}

p{
    font-size: 14px;
}
</style>
