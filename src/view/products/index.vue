<template>
    <div class="products">
        <banner :data="bannerData"></banner>
        <div class="content prodCont">
            <div class="item" v-for="ite in prodContData">
                <h3>{{ite.typeName}}</h3>
                <p class="desc">{{ite.content}}</p>
                <img :src="ite.img"/>
            </div>
        </div>
        <div class="content item_2">
            <h3>{{proadvData.typeName}}</h3>
            <div class="abCont">
                <div class="item" v-for="ite in proadvData.data">
                    <div class="info">
                        <div class="infoImg infoImg_4"><img :src="ite.img" class="anim_rotateY"/></div>
                        <div class="infoTitle">{{ite.title}}</div>
                    </div>
                    <p class="infoContent">{{ite.content}}</p>
                </div>
            </div>
        </div>
        <div class="content  item_3">
            <h3>{{deployData.typeName}}</h3>
            <div class="abCont">
                <div class="item" v-for="ite in deployData.data">
                    <div class="info">
                        <div class="infoImg infoImg_4"><img :src="ite.img"/></div>
                        <div class="infoTitle">{{ite.title}}</div>
                    </div>
                    <p class="infoContent">{{ite.content}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import banner from '../../components/banner/index'
export default {
    components:{
        banner
    },
    data(){
        return{
            bannerData:{
                bannerImg:require('../../assets/images/products.jpg'),
                title:'数聚平台',
                content:'新娱旗下一站式大数据应用平台'
            },
            proadvData:{
                typeName:'产品优势',
                data:[
                    {title:'多平台适配',img:require('../../assets/images/p1_1.png'),content:'对于底层存储计算平台的适配性高，兼容各类存储平台且支持业界流行的各类大数据计算引擎，并实现快速应用。'},
                    {title:'全方位兼容',img:require('../../assets/images/p1_2.png'),content:'与企业原有IT系统、技术栈兼容，无须改变企业原有IT系统建设，快速赋能企业数字化转型，降低数据中台建设成本。'},
                    {title:'体系化多功能设计',img:require('../../assets/images/p1_3.png'),content:'数聚平台经过多年经验沉淀，对数据应用链路进行完整的体系化设计，保障整个链路的可靠、各系统间正常联动。'},
                    {title:'保障数据安全',img:require('../../assets/images/p1_4.png'),content:'用户可选择在自建机房中存储数据，保障数据自主权，同时结合资源隔离、权限控制、变更记录等，提高数据安全性。'},
                    {title:'沉淀最佳实践',img:require('../../assets/images/p1_5.png'),content:'融合新娱大数据专家多年实践经验，引入数据分层建模思路及可视化标签体系建设方法论，帮助用户从无到有构建数据资产。'}
                ]
            },
            deployData:{
                typeName:'部署方式',
                data:[
                    {title:'云端部署版',img:require('../../assets/images/p2_1.jpg'),content:'提供阿里云、腾讯云、华为云、UCloud云等部署方案 '},
                    {title:'混合云部署版',img:require('../../assets/images/p2_2.jpg'),content:'提供云端+数据本地化的部署方案 '},
                    {title:'私有化部署版',img:require('../../assets/images/p2_3.jpg'),content:'提供本地化的部署方案'}
                ]
            },
            prodContData:[
                {
                    typeName: '数聚平台（DA.DaaS）',
                    content:'新娱旗下一站式大数据应用平台，致力于为企业构建数据中台提供基础的平台能力支撑，提供从数据同步、数据开发、数据治理、数据服务的一站式大数据全链路解决方案。',
                    img:require('../../assets/images/daas.jpg')
                },
                {
                    typeName: '数聚中台',
                    content:'数字化赋能构建数据中台，AI变现引擎在数字化中台上服务于各个企业',
                    img:require('../../assets/images/dataC.jpg')
                },
                {
                    typeName: 'AI深度学习平台',
                    content:'依托数据中台，应用多种场景，AI深度学习平，服务于各个企业',
                    img:require('../../assets/images/ai.jpg')
                },
                {
                    typeName: '可视化平台',
                    content:'提供多端的可视化展示方案，轻松搭建可视化应用，满足企业多种业务场景的大屏需求，支持微信和钉钉集成。',
                    img:require('../../assets/images/visualiz.jpg')
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
$fontC:#686868;
h3{font-size: 24px;color: #353535;text-align: center;padding-bottom:20px;}
.prodCont{
    .item{text-align: center;margin:20px auto;}
    .desc{color: $fontC;font-size: 14px;}
    img{max-width:70%;margin: 10px auto;}
}
.info{
    margin: 0 auto;
    text-align: center;
}
.abCont{
    display: flex;
    .infoContent{color: $fontC;font-size: 14px;line-height: 24px;}
}
.infoTitle{color: $C43bee3;font-size: 18px;padding: 5%;}
.item_2{
    .item{
        width:20%;
        padding:1%;
    }
    p{font-size: 18px;}
}
.item_3{
    .item{
        width:auto;
        padding:1%;
    }
    .infoTitle{color: #353535;}
}
</style>
