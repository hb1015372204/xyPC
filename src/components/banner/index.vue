<template>
  <transition>
    <div class="banner" :style="{backgroundImage:'url(' + data.bannerImg + ')'}">
        <div class="bCont">
          <h2 class="animated fadeInDown delay-100ms">{{data.title}}</h2>
          <h4 class="animated bounceInLeft delay-150ms" v-html="data.content"></h4>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
    props:[
        'data'
    ]

}
</script>

<style lang="scss" scoped>
.banner{
    width: 100%;
    // background:url(../../assets/images/service.jpg) no-repeat;
    position: relative;
    background-size: cover;
    .bCont{
        position: absolute;
        top: 30%;
        left: 15%;
    }
}
</style>
