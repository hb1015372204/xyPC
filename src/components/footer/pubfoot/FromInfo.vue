<template>
    <div class="fromInfo">
        <div class="">
            <h2>数据驱动，从现在开始！</h2>
            <div class="fromItem">
                <label>姓名：</label>
                <input type="text" value="" v-model.trim = "info.name"/>
            </div>
            <div class="fromItem">
                <label >电话：</label>
                <input type="text" value="" v-model.trim = "info.mobile" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')"/>
            </div>
            <div class="fromItem">
                <label>邮箱：</label>
                <input type="email" value="" v-model.trim = "info.email"/>
            </div>
            <div class="errorTip" v-show="errTipShow">{{errorTip}}</div>
            <button class="btnsubmit" @click="btnsubmit()">提交申请</button>
        </div>
        <div class="successInfo" v-show="isShow">
            <div class="bg"></div>
            <div class="tips">
                <p>信息已收到，我们会在24小时内联系您！</p>
                <button class="btnClose" @click="btnClose()">关闭</button>
            </div>
        </div>
    </div>
</template>

<script>
import qs from 'qs'
export default {
    data(){
        return{
            isShow:false,
            errTipShow:false,//是否显示错误信息
            errorTip:'',//错误提示
            info:{
                name:'',
                mobile:'',
                email:''
            }
        }
    },
    methods:{
        btnsubmit(){
            //邮箱
            var regEmail= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
            //手机号码
            let regMobile=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
            if(this.info.mobile == '' && this.info.email == ''){
                this.errorTip='手机号和邮箱不能为空，请选填！';
                this.errTipShow=true;
                return;
            }
            if(this.info.email == '' || this.info.mobile != ''){//邮箱为空 手机号不为空 则验证
                if(!regMobile.test(this.info.mobile)){
                    this.errorTip='手机号有误！';
                    this.errTipShow=true;
                    return;
                }
            }
            if(this.info.mobile == '' || this.info.email != ''){//手机号为空 邮箱不为空 则验证
                if(!regEmail.test(this.info.email)){ //邮箱
                    this.errorTip='邮箱有误！';
                    this.errTipShow=true;
                    return;
                }
            }
            this.errTipShow=false;
            // let params=JSON.stringify(this.info)
            this.$http({
                method: 'post',
                url:'/info_reception/',
                data:qs.stringify(this.info)
            }).then(res=>{  
                this.isShow=true;//弹出成功的提示框
            }).catch(err => {
                console.log(err);
            }); 
            
        },
        btnClose(){
            this.isShow = false;
            this.info.name='';
            this.info.mobile='';
            this.info.email='';
        }
    }
}
</script>

<style lang="scss" scoped>
.fromInfo{
    width: 60%;
    display: flex;
    flex-direction: column;
    position: relative;
    text-align: center; 
}
h2{
    font-size: 30px;
    margin: 8px 0 30px;
    text-align: left;
}
.fromItem{
    font-size: 16px;
    color: $C80838a;
    border: 1px solid $C80838a;
    margin: 8px 0;
    display: flex;
    label{width:15%;}
    input{
        border: 0;
        background-color: $C000714;
        color: $C80838a
    }
}
.fromItem,.btnsubmit{
    padding: 15px;
    border-radius: 4px;
}
.btnsubmit{width: 50%;margin: 8px auto; color:#fff; font-size:18px; display:inline-block; padding:15px;border-radius:5px; background:$C43bee3; cursor:pointer;}
.btnsubmit{position: relative;vertical-align: middle;-webkit-transform: translateZ(0);-webkit-backface-visibility: hidden;-webkit-transition: color 0.3s}
.btnsubmit:before{content: "";position: absolute;z-index:-1;top: 0px ;bottom: 0;left: 0;right: 0;background: #fff;border-radius: 5px;-webkit-transform: scaleX(0);-webkit-transform-origin: 50%;-webkit-transition:all  0.3s ease-out;}
.btnsubmit:hover,.btnsubmit:focus,.btnsubmit:active{color: #000;}
.btnsubmit:hover:before,.btnsubmit:focus:before,.btnsubmit:active:before{-webkit-transform: scaleX(1);}

.successInfo{
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    position: absolute;
    top: 0;
    .bg{
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background-color: $C1075aa;
        opacity: .9;
        z-index: 0;
    }
    .tips{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%,-50%);
        text-align: center;
        font-size: 18px;
    }
    .btnClose{
        width: 25%;
        background-color:#fff;
        color: $C1075aa; 
        padding: 5px 0;
        margin: 20px 0;
        border-radius: 5px;
    }
}
.errorTip{
    color: #ce2e2e;
    font-size: 12px;
    text-align: left;
}
</style>
