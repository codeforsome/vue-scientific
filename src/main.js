import Vue from 'vue'
import App from './App'
import router from './router'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from  'axios';
import Vuex from 'vuex'
// import './mock'
Vue.config.productionTip = false
Vue.use(elementUi)
Vue.use(Vuex)

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if(to.path=='/login'){
    if(getLocaltoken()){
      next({path:'/'});
    }else{
      next();
    }
  }
  if(to.meta.login){
    if(getLocaltoken()){
      next();
    }else{
      next({path:'/login'});
    }
  }else{
    next();
  }
});
function getLocaltoken(){
  return JSON.parse( localStorage.getItem("storeState")) &&
  JSON.parse( localStorage.getItem("storeState")).token
}
const store= new Vuex.Store({
  state:{
    user:{},
    token:'',
    userType:0,
  },
  getters:{
    user(state){
      return state.user;
    },
    token(state){
      return state.token;
    },
    userType(state){
      return state.userType;
    }
  },
  mutations:{
    SET_USER(state,data){
      state.user=data;
    },
    SET_USERTYPE(state,data){
      state.userType=data;
    },
    SET_TOKEN(state,data){
      state.token=data;
    },
    CLEAR_ALL(state){
      for(let item in state){
        if(state.hasOwnProperty(item))
        state[item]={};
      }
      state.token='';
      localStorage.removeItem("storeState");
    }
  },
  actions:{
    setUser(context,user){
      context.commit('SET_USER', user);
    },
    setUserType(context,userType){
      context.commit('SET_USERTYPE', userType);
    },
    setToken(context,data){
      context.commit('SET_TOKEN', data);
    },
    clearALL(context){
      context.commit('CLEAR_ALL');
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  axios:axios,
})
