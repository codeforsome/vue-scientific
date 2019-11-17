<template>
  <div class="userinfo">
    <el-card class="box-card">
      <div class="text-wrap">
        <div class="item">
          <el-link @click="back()" type="primary">返回上一级</el-link>
        </div>
        <div class="text item">
          <img class="head-icon" width="100px" height="100px" :src="user.headIcon" alt />
        </div>
        <div class="text item">
          <span class="info">姓名：</span>
          <span class="info-content">{{user.nickname}}</span>
        </div>
        <div class="text item">
          <span class="info">学院：</span>
          <span class="info-content">{{user.college}}</span>
        </div>
        <div class="text item">
          <span class="info">学历：</span>
          <span class="info-content">{{user.education}}</span>
        </div>
        <el-divider></el-divider>
      </div>
      <div class="thesis-list">
        <div class="title">他的论文</div>
        <div  v-if="thesisList.length==0" style="margin-top:20px;">这个作者还没有发布论文。</div>         
        <template   v-else  v-for="(thesis,index) in thesisList">
          <thesis-item  :thesis="thesis" :key="index"></thesis-item>
        </template>
      </div>
      <div class="thesis-list" style="margin-top:20px;">
        <div class="title">他的科研题目发布</div>
        <div class="thesis-list">
          <div v-if="itemList.length==0" style="margin-top:20px;">这个作者还没有发布科研题目。</div>

          <template  v-else   v-for="(item,index) in itemList"  >
            <child-item :item="item" :key="index"></child-item>
          </template>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import {
  getUserInfoById,
  getThesisByUserId,
  getItemByUserId
} from "./../request/api";
import ThesisItem from "./../components/ThesisItem";
import ChildItem from "./../components/ChildItem";
export default {
  components: { ThesisItem ,ChildItem},
  data() {
    return {
      user: {},
      thesisList: [],
      itemList: []
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  created() {
    getUserInfoById(this.$route.params.id).then(
      val => {
        this.user = val.data.data;
      },
      err => {}
    );
    getThesisByUserId(this.$route.params.id).then(
      val => {
        let result = val.data;
        this.thesisList = result.data;
      },
      err => {}
    );
    getItemByUserId(this.$route.params.id).then(
      val => {
        let result = val.data;
        this.itemList = result.data;
		console.log(this.itemList)
      },
      err => {}
    );
    
  }
};
</script>
<style lang="less" scoped>
.userinfo {
  font-size: @baseFontSize;
  width: @blockWidth;
  margin: 0 auto;
  margin-top: 20px;
  > .box-card {
    border-radius: @borderRaduis;
    .text-wrap {
      .item {
        margin-bottom: 18px;

        .info {
          color: @themeColor;
        }
      }
    }
  }

  .title {
    font-weight: bold;
    color: @themeColor;
  }
}
</style>