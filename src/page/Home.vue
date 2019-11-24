<template>
<div class="home">
     <app-head></app-head>
     <div class="main">
	 <transition name="router-fade" mode="out-in">
			<keep-alive>
			    <router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
    	</transition>
    	<transition name="router-fade" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</transition>
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

 
</style>