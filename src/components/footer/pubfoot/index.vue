<template>
    <footer>
        <div class="footerTop">
            <FromInfo></FromInfo>
            <Info></Info>
        </div>
        <copyright></copyright>
    </footer>
</template>

<script>
import FromInfo from './FromInfo'
import Info from './Info'
import copyright from '../copyright'
export default {
    components:{
        FromInfo,
        Info,
        copyright
    }
}
</script>

<style lang="scss" scoped>
footer{
    width: 100%;
    background-color: $C000714;
    padding: 5% 8% 1%;
    box-sizing: border-box;
}
.footerTop{
    color: #fff;
    display: flex;
    justify-content: space-between;
}
.copyright{
    // color:#686568 !important;
}
</style>
