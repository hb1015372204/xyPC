<template>
    <div class="home">
        <theader :logoShow="0"></theader>
            <transition>
                <article>
                    <h2 class ="animated bounceInDown delay-100ms">数据连接 展望未来 让决策更智能</h2>
                    <h4 class ="animated fadeInUp delay-200ms">大数据与人工智能解决方案提供商</h4>
                </article>
            </transition>
        <tfooter></tfooter>
    </div>
</template>

<script>
import theader from '../../components/header/index'
import tfooter from '../../components/footer/copyright'
export default {
    components:{
        theader,
        tfooter
    },
    data(){
        return{
            logoShow:0,//白色字体的logo
        }
    }
}
</script>

<style lang="scss" scoped>
header{
    background-color: none;
    color: #fff;
}
.theader >>> .navActive{font-size:20px;border-bottom: 0 !important;}
.theader /deep/ .navActive{font-size:20px;border-bottom: 0 !important;}
.home{
    width:100%;
    height: 100%;
    background: url(../../assets/images/index.jpg);
    background-size:cover;
}
.copyright{
    position: fixed;
    left: 5%;
    bottom:3%;
}
article{    
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
h2{
    font-size: 45px;
    color: $C43bee3;
    text-align: center;
}
h4{
    font-size: 30px;
    color: #fff;
    text-align: right;
}
</style>
