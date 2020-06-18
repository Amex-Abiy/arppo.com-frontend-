<template>
    <div class="row">
        <div class="col-lg-2 darkColor sidenav">
            <sidenav/>
        </div>
        <div class="col-lg-10 headerNav">
            <headers/>
            <navs/>
        </div>
    </div>
</template>
<script>
import headers from '../../components/BUSINESS/header'
import navs from '../../components/BUSINESS/nav'
import sidenav from '../../components/BUSINESS/sidenav'
export default {
    components: {
        headers, navs, sidenav
    }
}
</script>
<style scoped>
.sidenav{
}
.headerNav{
    padding: 0px;
}
.darkColor{
    background-color: #026AA7;
}
</style>