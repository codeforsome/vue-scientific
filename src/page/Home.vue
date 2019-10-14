<template>
<div class="home">
     <app-head></app-head>
     <router-view/>
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

 
</style>