<template>
  <div class="item">
    <div class="left">
      <span class="day">{{thesis.date.slice(5,10)}}</span>
      <span class="year">{{thesis.date.slice(0,4)}}</span>
    </div>
    <div class="right">
      <div class="title">
        <span>
          <router-link :to="{name:'ThesisShow',params:{
          id:thesis.id}}">{{thesis.title}}</router-link>
        </span>
        <router-link
          v-show="show"
          style="margin-left:6px;"
          :to="{name:'ThesisEdit',params:{
          id:thesis.id}}"
        >
          <el-link icon="el-icon-edit">编辑</el-link>
        </router-link>
      </div>
      <div class="abstract">摘要：{{thesis.abstracts.slice(0,50)+'...'}}</div>
      <div class="keyword">
        关键词：
        <template v-for="(val,index) in thesis.keyword.split('-')">
          <el-tag class="keyword-signel" type="warning" :key="index">{{val}}</el-tag>
        </template>
      </div>
      <div class="bottom">
        <span class="collectNum num" title="收藏量">
          <span class="el-icon-star-on">{{thesis.collectNum}}</span>
        </span>
        <span class="readNum num" title="阅读量">
          <span class="el-icon-view">{{thesis.readNum}}</span>
        </span>
      </div>
      <el-divider></el-divider>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    thesis: {
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
    background-color: #67c23a;
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
    .keyword {
      margin-top: @textMargin;
      font-size: 0.8em;
      color: @themeColor;
      .keyword-signel {
        margin-left: 5px;
      }
    }
    .bottom {
      margin-top: 5px;
      .num {
        margin-left: 10px;
      }
    }
  }
}
</style>