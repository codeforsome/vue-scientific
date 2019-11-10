<template>
  <div class="item">
    <div class="left">
      <span class="day">{{item.createDate.slice(5,10)}}</span>
      <span class="year">{{item.createDate.slice(0,4)}}</span>
    </div>
    <div class="right">
      <div class="title">
        <span>
          <router-link :to="{name:'ItemShow',params:{
          id:item.id}}">{{item.title}}</router-link>
        </span>
        <router-link
          v-show="show"
          style="margin-left:6px;"
          :to="{name:'itemUpdate',params:{
          id:item.id}}"
        >
          <el-link icon="el-icon-edit">编辑</el-link>
        </router-link>
      </div>
      <div class="abstract">科研要求{{item.content.slice(0,50)+'...'}}</div>
      <el-divider></el-divider>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="less" scoped>
@textMargin: 6px;
.top {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}
.item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .left {
    width: 5em;
    text-align: center;
    background-color: @themeColor;
    padding: 10px 0;
    color: white;
    > .day {
      font-size: 1em;
    }
    > .year {
      font-size: 1.6em;
    }
  }
  .right {
    margin-left: 20px;
    .title {
      margin-top: @textMargin;
      color: @black;
      font-weight: bold;
      font-size: 1.1em;
    }
    .abstract {
      margin-top: @textMargin;
      color: @gray;
      font-size: 0.9em;
      max-width: 30em;
    }
  }
}
</style>