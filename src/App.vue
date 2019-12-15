<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  created(){
 //在页面刷新时将vuex里的信息保存到localStorage里
  window.addEventListener("beforeunload",()=>{
   localStorage.setItem("storeState",JSON.stringify(this.$store.state))
  })
  
  localStorage.getItem("storeState") && this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(localStorage.getItem("storeState"))));

  
 }
}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
}
ol, ul {
	list-style: none;
}
a{
  	display: inline-block;
  color: #2c3e50;
    text-decoration: none;
}

button{
	cursor: pointer;
	border: none;
	background-color: transparent;
	outline:none;
}
</style>
