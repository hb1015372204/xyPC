<template>
  <transition>
    <div class="service">
      <banner :data="bannerData"></banner>
      <article class="content item_1">
        <h3>{{servContData.typeName}}</h3>
        <p class="infoContent">{{servContData.desc}}</p>
        <div class="abCont">
          <div class="servItem" v-for="(ite,index) in servContData.data">
            <div class="item">
              <span class="title">{{ite.title}}</span>
              <span v-if="index < (servContData.data.length - 1)" class="iconfont iconarrowb"></span>
            </div>
            <p class="infoContent">{{ite.content}}</p>
          </div>
        </div>
      </article>
      <div class="item_2">
        <div class="wow bounceInLeft  abCont">
          <!-- <div class="bgImg"></div> -->
          <div class="opbg"></div>
          <div class="itemCont">
            <h3>{{serviceData.ldata.typeName}}</h3>
            <div class="serviceCont">
              <div class v-for="item in serviceData.ldata.data">
                <img :src="item.img">
                <p>{{item.title}}</p>
              </div>
            </div>
          </div>
        </div>
        <article class="wow bounceInRight  abCont2">
          <p class="item animated fadeInLeft deplay-100ms" v-for="item in serviceData.rdata">
            <span>{{item.title}}</span>
            {{item.content}}
          </p>
        </article>
      </div>
      <div class="content item_3">
        <h3>{{proceData.typeName}}</h3>
        <div class="abCont">
          <div v-for="ite in proceData.data" class="item bg " >
            <span>{{ite.title}}</span>
            <p>{{ite.content}}</p>
          </div>
          <!-- <div class="bg"></div> -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import banner from "../../components/banner/index";
export default {
  components: {
    banner
  },
  data() {
    return {
      bannerData: {
        bannerImg: require("../../assets/images/service.jpg"),
        title: "大数据应用咨询服务",
        content: "Consulting services for big data applications"
      },
      servContData: {
        typeName: "为什么要做大数据咨询",
        desc:
          "提供大数据应用的专业设计与咨询。让数据用起来，首先要识别我有哪些数据可用、可资产化，还需补齐哪些数据，开启合作第一步！",
        data: [
          {
            title: "定目标：",
            content:
              "基于企业战略目标、当前业务状态，圈定大数据落地项目的范围、实施目标和边界。快速启动企业的数据化转型。"
          },
          {
            title: "找数据：",
            content:
              "分析已有数据结构，确定需采集的过程数据、外部数据以及获取方式，补齐数据。"
          },
          {
            title: "辨场景：",
            content:
              "基于结构化之后的数据，对企业运营过程的研、产、供、销等场景进行分辨识别，确定大数据可赋能业务场景。"
          },
          {
            title: "设架构：",
            content:
              "实现DT+转型升级，基于云计算和大数据技术能力规划企业大数据整体方案，并对最终产出的应用和决策进行预判。"
          }
        ]
      },
      serviceData: {
        ldata: {
          typeName: "大数据咨询服务",
          data: [
            {
              img: require("../../assets/images/s1-1.png"),
              title: "大数据整体解决方案"
            },
            {
              img: require("../../assets/images/s1-2.png"),
              title: "定制化数据产品设计"
            }
          ]
        },
        rdata: [
          {
            title: "迁云咨询服务",
            content:
              "提供迁云前的专业设计和咨询。评估业务系统迁移至阿里云、腾讯云等平台的可行性，设计业务系统的产品选型和应用架构，以及应用系统、存储、数据库等迁移方案。"
          },
          {
            title: "应用架构咨询服务",
            content:
              "基于业务系统的架构现状和预期目标，为客户运行在云平台上的应用系统提供基于互联网架构的高并发及高可用、容器及微服务、全链路压测方面的解决方案，提升业务系统在云上的运行效率和效果。"
          },
          {
            title: "云化战略咨询服务",
            content:
              "为IT系统运行在云上的客户，提供云计算与新技术应用规划、架构、容器及微服务设计等全方位咨询、架构最佳实践指导。"
          }
        ]
      },
      proceData: {
        typeName: "咨询流程",
        data: [
          { title: "场景调研", content: "数据调研、业务调研" },
          {
            title: "方案设计",
            content:
              "大数据应用场景规划 数据标签体系设计 其他按照咨询的业务类型"
          },
          {
            title: "里程碑对焦",
            content: "基于对前期产出的方案和架构设计进行对焦确认，并进行微调。"
          },
          {
            title: "验收确认",
            content: "基于最终版产出物进行确认，为下一步实施作出准备。"
          }
        ]
      }
    };
  },
  mounted(){
      // var wow=new WOW({
      //     boxClass:'wow',
      //     animateClass:'animated',
      //     offset:30,
      //     mobile:true,
      //     live:false
      // })
      // wow.init();
  }
};
</script>

<style lang="scss" scoped>
$fontC: #686868;
h3 {
  font-size: 24px;
  color: #353535;
  text-align: center;
  padding-bottom: 20px;
}
.item_1 {
  p {
    font-size: 16px;
    color: $fontC;
    line-height: 30px;
    flex: 4;
    text-align: center;
  }
  .abCont {
    width: 50%;
    margin: 0 auto;
  }
  .servItem {
    display: flex;
    margin: 2% 0;
    .item {
      flex: 1;
      color: $C43bee3;
      span {
        display: block;
      }
      .title {
        font-size: 24px;
      }
    }
    .iconfont {
      font-size: 30px;
      padding: 0 22%;
    }
  }
}
.item_2 {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  color: #fff;
  h3 {
    color: #fff;
    text-align: left;
  }
  .abCont {
    flex: 1;
    padding: 2% 5%;
    position: relative;
    box-sizing: border-box;
    background: url(../../assets/images/s-1.jpg) no-repeat;
    background-size: 100% 100%;
    &:before{
        content: "";
        display: block;
        padding-top: 53%;
    }
  }
  // .bgImg{width:100%;height:100%;position:absolute;background:url(../../assets/images/s-1.jpg) no-repeat;background-size: cover;}
  .opbg {
    width: 100%;
    height: 100%;
    background-color: #002233;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
  .itemCont {
    width: 70%;
    height: 70%;
    position: absolute;
    top: 10%;
    font-size: 24px;
    box-sizing: border-box;
  }
  .serviceCont {
    width: 90%;
    display: flex;
    text-align: center;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 15%;
  }
  .abCont2 {
    flex: 1;
    background-color: $C1075aa;
    padding: 2% 5%;
    .item {
      padding-bottom: 5%;
      width: 80%;
    }
    span {
      padding-bottom: 15px;
    }
  }
  span {
    display: block;
    font-size: 18px;
  }
  p {
    line-height: 30px;
    font-size: 14px;
  }
}
.item_3 {
  span {
    color: $C43bee3;
    font-size: 18px;
  }
  p {
    color: $fontC;
    font-size: 16px;
  }
  .abCont {
    display: flex;
  }
  .item {
    position: relative;
    width: 40%;
  }
  .bg{
      background-image: url(../../assets/images/s3-2.png);background-size: 100% 100%;
        padding: 2% 2% 2% 4%;
      &:first-child{
         background-image: url(../../assets/images/s3-1.png);background-size: 100% 100%; 
        padding: 2%;
      }
      &:last-child{
         background-image: url(../../assets/images/s3-3.png);background-size: 100% 100%;
      }
  }
    
}
</style>
