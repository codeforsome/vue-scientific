<template>
  <div class="block">
    <div class="nav-top">
      <router-link class="link" :to="{name:'User'}">用户操作</router-link>
      <router-link class="link" :to="{name:'Item'}">科研题目操作</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.block {
  width: @blockWidth;
  margin: 0 auto;
  .nav-top {
    padding: 20px 0;
    text-align: center;
    .link {
      margin-left: 10px;
      font-weight: bold;
      color: #6f6f6f;
      border-bottom: 2px solid transparent;
      &:hover {
        color: @themeColor;
      }
    }
    .active {
      color: @themeColor;
      border-bottom-color: @themeColor;
    }
  }
}
</style>