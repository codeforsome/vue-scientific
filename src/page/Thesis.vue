<template>
    <div class="thesis">
         <el-card class="box-card">
             <router-view></router-view>
         </el-card>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.thesis{
    width: @blockWidth;
  margin: 0 auto;
  font-size: 16px;
  padding-top: 20px;
  .box-card{
  border-radius: @borderRaduis;

  }
}
</style>