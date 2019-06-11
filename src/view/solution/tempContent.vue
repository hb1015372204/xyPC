<template>
    <div class="tabContent">
        <p class="desc infoContent">{{contentData.desc}}</p>
        <ul class="">
            <li v-for="ite in contentData.data">
                <div class="imgCon"><img :src="ite.img" class="anim_scale"/></div>
                <h3>{{ite.title}}</h3>
                <p class="infoContent">{{ite.content}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['contentData']

}
</script>

<style lang="scss" scoped>

.infoContent{
    font-size: 14px;
    color: #686868;
    line-height: 30px;
}
.tabContent{
    margin-top: 5%;
    h3{    
        font-size: 24px;
        text-align: center;
        color: #353535;
        padding: 10px 0;
    }
    ul{margin: 3% auto;display: flex;flex-wrap: wrap;
        // justify-content: space-around;
    }
    li{
        width: 30%;box-sizing: border-box;margin:17px;
        .imgCon{   
             width: 100%;
            height: 56%;
            overflow: hidden;
        }
        // img{width: 100%;
    }
}
</style>
