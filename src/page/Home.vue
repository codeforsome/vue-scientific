<template>
<div class="home">
     <app-head></app-head>
     <div class="main">
     <router-view/>
     </div>
</div>
</template>
<script>
import AppHead from './../components/AppHead'
export default {
    components:{AppHead},
  
}
</script>
<style lang="less" scoped>
.home{
    background-color: #f1f5f5;
}
.main{
    width: 1024px;
    margin:0 auto;
}
 
</style>