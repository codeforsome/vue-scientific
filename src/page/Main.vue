<template>
    <div class="main">
         <div class="block">
    <el-carousel :interval="8000" >
      <el-carousel-item  v-for="item in 4" :key="item">
          <router-link :to="{name:'Main'}">
              <img class="slide-img" src="./../assets/img/slider-2-1.png" alt="">
          </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
 .block{
        width: 800px;
        margin:0 auto;
        .el-carousel__item{
            transition: all 1s;
        }
        .slide-img{
            width: 100%;
        }
    }
 .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>