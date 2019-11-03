<template>
  <div class="app-head-wrap">
    <div class="app-head">
      <div class="left">
         <router-link class="link" :to="{name:'Main'}"><h1 class="logo-title">科研管理系统</h1></router-link>
        
      </div>
      <div class="right">
        <ul class="link-list">
          <li class="item">
            <router-link class="link" :to="{name:'Main'}">首页</router-link>
          </li>
          <template v-if="token">
            <li class="item">
              <router-link class="link" :to="{name:'My'}">我的</router-link>
            </li>
            <li class="item" @click="userLoginOut()">
              <router-link class="link" :to="{name:'Out'}">退出账号</router-link>
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
  </div>
</template>
<script>
import { loginOut } from "./../request/api";
export default {
  data() {
    return {};
  },
  computed: {
    token() {
      return this.$store.getters.token;
    }
  },
  methods: {
    userLoginOut() {
      this.$store.dispatch("clearALL");
      loginOut().then(val => {}, error => {});
    }
  }
};
</script>
<style lang="less" scoped>
.app-head-wrap {
  font-size: 16px;
  color: @themeColor;
  background-color: #fff;
  .app-head {
    display: flex;
    justify-content: space-between;
    width: @blockWidth;
    padding:15px 0;
    margin: 0 auto;
    > .left {
      .logo-title {
        font-size: 2.5em;
        color: @themeColor;
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
          .active {
            color: @themeColor;
          }
        }
      }
    }
  }
}
</style>