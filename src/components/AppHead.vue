<template>
  <div class="app-head">
    <div class="left">
      <h1 class="logo-title">科研管理系统</h1>
    </div>
    <div class="right">
      <ul class="link-list">
        <li class="item">
          <router-link class="link" :to="{name:'Main'}">首页</router-link>
        </li>
        <template v-if="token">
          <li class="item" >
            <router-link class="link" :to="{name:'My'}">我的</router-link>
          </li>
           <li class="item" @click="loginOut()" >
          <router-link class="link"  :to="{name:'Out'}">退出账号</router-link>
          </li>
        </template>
        <template v-if="!token">
          <li class="item">
            <router-link class="link" :to="{name:'Register'}">注册</router-link>
          </li>
          <li class="item">
            <router-link class="link" :to="{name:'Login'}">登陆</router-link>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    token() {
      return this.$store.getters.token;
    }
  },
  methods:{
    loginOut(){
      this.$store.dispatch('clearALL');
    }
  }
};
</script>
<style lang="less" scoped>
.app-head {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: @themeColor;
  padding: 10px 70px;
  background-color: #fff;
  > .left {
    .logo-title {
      font-size: 2.5em;
    }
  }

  > .right {
    display: flex;
    align-items: center;
    > .link-list {
      display: flex;
      > .item {
        margin-left: 20px;
        .link {
          font-weight: bold;
          color: #6f6f6f;
          &:hover {
            color: @themeColor;
          }
          
        }
        .active{
            color: @themeColor;
          }
      }
    }
  }
}
</style>