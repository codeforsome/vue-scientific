<template>
  <div class="right-content">
    <el-card class="box-card">
      <div class="thesis-wrap">
        <div class="top">
          <span class="my-thesis">我已经发布的科研题目</span>
          <router-link :to="{name:'itemAdd'}" >
            <el-link icon="el-icon-s-promotion">发布新的科研题目</el-link>
          </router-link>
        </div>
        <div class="thesis-list">
          <template v-for="(item,index) in items">
            <child-item :item="item" :show="true" :key="index"></child-item>
          </template>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import { getItemByUserId } from "./../request/api";
import ChildItem from "./../components/ChildItem";
export default {
  components: { ChildItem },
  data() {
    return {
      items: []
    };
  },
  created() {
    getItemByUserId("").then(
      val => {
        let result = val.data;
        this.items = result.data;
      },
      err => {}
    );
  }
};
</script>
<style lang="less" scoped>
.thesis-list {
  font-size: 16px;
  margin-top: 20px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.box-card {
  width: 580px;
  border-radius: @borderRaduis;
  .top {
    display: flex;
    justify-content: space-between;
    .my-thesis {
      font-weight: bold;
      color: @themeColor;
    }
  }
}
</style>