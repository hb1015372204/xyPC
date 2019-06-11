<template>
    <header>
        <div class="logo">
            <img :src="logoShow==0 ? opLogo : ptLogo"/>
        </div>
        <nav class="menuList">
            <li v-for="(item,index) in menuList" @click="handleSelect(item,index)"  :class="{'navActive' : index==menuVisible,'active' : index==0}">{{item.title}}</li>
        </nav>
    </header>
</template>

<script>
export default {
    props:['logoShow'],//判断选择黑色字体的logo还是白色字体的logo
    data(){
        return{
            menuVisible:0,
            opLogo:require('../../assets/images/logo.png'),//首页透明logo
            ptLogo:require('../../assets/images/logo.jpg'),//其他
            menuList:[
                {title:'首页',url:'/home'},
                {title:'解决方案',url:'/solution'},
                {title:'咨询服务',url:'/service'},
                {title:'产品介绍',url:'/products'},
                {title:'关于我们',url:'/aboutUs'},
            ]
        }
    },
    computed:{
    },
    watch:{
        $route(to, from) {
            // console.log(this.$route.path);
        }

    },
    mounted(){
        this.init();        
    },
    methods:{
        init(){
            for(let i in this.menuList){
                this.$route.path == this.menuList[i].url ? this.menuVisible = i : ''
                // if(this.$route.path == '/home'){}
            }
        },
        handleSelect(item,index){
            this.menuVisible=index;
            this.$router.push({path:item.url})
        }
    }
}
</script>

<style lang="scss" scoped>
.active{border-bottom:none !important;}
.navActive{color: $C43bee3;border-bottom: 2px solid $C43bee3;}
header{
    width: 100%;
    height: 70px;
    line-height: 70px;
    padding: 0px 7%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
}
.logo img{vertical-align: middle;}
.menuList{
    display: flex;
    font-size: 16px;
    li{
        padding: 0 30px;
        cursor: pointer;
    }
}
</style>
