<template>
    <div class="my">
        <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>我的信息</span>
    <el-button style="float: right; padding: 3px 0" type="text">修改个人信息</el-button>
  </div>
  <div class="text item">
   <span class="info">姓名：</span><span class="info-content">fdfd</span>
  </div>
  <div class="text item">
   <span class="info">学院：</span><span class="info-content">fdfd</span>
  </div>
  <div class="text item">
   <span class="info">职位：</span><span class="info-content">fdfd</span>
  </div>
  <div class="text item">
   <span class="info">性别：</span><span class="info-content">fdfd</span>
  </div>
  <div class="text item">
   <span class="info">姓名：</span><span class="info-content">fdfd</span>
  </div>
</el-card>
    </div>
</template>
<script>
import { getUserInfo } from "./../request/api";
export default {
    data(){
        return{

        }
    },
    mounted(){
        getUserInfo({name:'1',pa:'2'}).then((val)=>{
            console.log(val)
        },(err)=>{})
    }
}
</script>
<style lang="less" scoped>
.my{
  padding:5px 70px;
.text {
    font-size: 14px;
  }
 
  .item {
    margin-bottom: 18px;
     .info{
    color:@themeColor;
  }
  }

}

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>