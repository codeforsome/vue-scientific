<template>
  <div class="main">
    <div class="block">
      <el-carousel :interval="8000">
        <el-carousel-item v-for="item in 4" :key="item">
          <router-link :to="{name:'Main'}">
            <img class="slide-img" src="./../assets/img/slider-2-1.png" alt />
          </router-link>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="main-wrap">
      <div class="main-show">
        <el-card class="box-card">
          <div class="head">
            <span class="head-title">热门老师</span>
          </div>
          <div class="user-list">
            <div class="item" v-for="(item,index) in hotUser" :key="index">
              <div class="left">
                <img class="head-icon" :src="item.headIcon" />
              </div>
              <div class="right">
                <div class="top">
                  <span class="hot">热门</span>
                  <span class="name">{{item.nickname}}</span>
                </div>
                <div class="center">
                  <p class="college">学院：{{item.college}}</p>
                </div>
                <div class="bottom">
                 
                  <span class="readNum num" title="热度量">
                    <span class="el-icon-s-promotion"></span>
                    {{item.hot}}
                  </span>
                </div>
                <div class="button-wrap">
                  <el-button type="primary" class="button" round>
                    <router-link class="link" :to="{name:'UserInfo',params:{ id:item.id}}">查看更多</router-link>
                    <span class="el-icon-d-arrow-right"></span>
                  </el-button>
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </div>

      <div class="mian-thesis-hot">
        <el-card class="box-card">
          <div class="hot-title">热门论文</div>
          <div class="thesis-list">
            <template v-for="(thesis,index) in thesisList">
              <thesis-item :thesis="thesis" :key="index"></thesis-item>
            </template>
            <div class="bottom-box">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="thesisPagination.total"
                :page-size="thesisPagination.pageSize"
                @current-change="thesisCurrentChange"
                @prev-click="thesisCurrentChange"
                @next-click="thesisCurrentChange"
              ></el-pagination>
            </div>
          </div>
        </el-card>

        <el-card class="box-card item-box">
          <div class="hot-title">最新科研题目</div>
          <div class="thesis-list">
            <template v-for="(item,index) in itemList">
              <child-item :item="item" :key="index"></child-item>
            </template>
            <div class="bottom-box">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="itemPagination.total"
                :page-size="itemPagination.pageSize"
                @current-change="itemCurrentChange"
                @prev-click="itemCurrentChange"
                @next-click="itemCurrentChange"
              ></el-pagination>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getUserInfoByHot,
  getThesisByHot,
  getItemByNew,
  getThesisCount,
  getItemCount
} from "./../request/api";
import ThesisItem from "./../components/ThesisItem";
import ChildItem from "./../components/ChildItem";
export default {
  components: { ThesisItem, ChildItem },
  data() {
    return {
      hotUser: [],
      thesisList: [],
      itemList: [],
      thesisPagination: {
        total: 10,
        pageSize: 4,
        currentPage: 0
      },
      itemPagination: {
        total: 10,
        pageSize: 4,
        currentPage: 0
      }
    };
  },
  methods: {
    thesisCurrentChange(page) {
      this.thesisPagination.currentPage = page;
      let obj = { currentPage: page, pageSize: this.thesisPagination.pageSize };
      getThesisByHot(obj).then(
        val => {
          let result = val.data;
          this.thesisList = result.data;
        },
        err => {}
      );
    },
    itemCurrentChange(page) {
      this.itemPagination.currentPage = page;
      let obj = { currentPage: page, pageSize: this.itemPagination.pageSize };
      getItemByNew(obj).then(
        val => {
          let result = val.data;
          this.itemList = result.data;
        },
        err => {}
      );
    }
  },
  created() {
    getUserInfoByHot().then(
      val => {
        let result = val.data;
        this.hotUser = result.data;
      },
      err => {}
    );
    getThesisByHot("").then(
      val => {
        let result = val.data;
        this.thesisList = result.data;
      },
      err => {}
    );
    getThesisCount().then(
      val => {
        let result = val.data;
        this.thesisPagination.total = result.data;
      },
      err => {}
    );
	 setTimeout(() => { //慢一步加载该内容
      getItemByNew().then(
      val => {
        let result = val.data;
        this.itemList = result.data;
      },
      err => {}
    );
     getItemCount().then(
      val => {
        let result = val.data;
        this.itemPagination.total = result.data;
      },
      err => {}
    );
   }, 1300);
   
   
  }
};
</script>
<style lang="less" scoped>
.block {
  width: @blockWidth;
  margin: 0 auto;
  .el-carousel__item {
    transition: all 1s;
  }
  .slide-img {
    width: 100%;
  }
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.main-wrap {
  display: flex;
  justify-content: space-between;
  width: @blockWidth;
  margin: 0 auto;
  padding-top: 20px;
}
.mian-thesis-hot {
  margin-left: 20px;
  .box-card {
    border-radius: @borderRaduis;
    .hot-title {
      font-weight: bold;
      color: @themeColor;
    }
  }
  .item-box {
    margin-top: 20px;
  }
}

@mainShowWidth: 400px;
.main-show {
  .box-card {
    font-size: @baseFontSize;
    width: @mainShowWidth;
    border-radius: @borderRaduis;

    .item {
      display: flex;
      margin-top: 20px;
      .right {
        margin-left: 20px;
        .top {
          > .hot {
            color: white;
            font-size: 0.8em;
            background-color: #ffcc00;
            padding: 3px 6px;
            border-radius: 3px;
          }
          .name {
            font-weight: bold;
            color: @black;
            margin-left: 10px;
          }
        }

        .center {
          margin-top: 10px;
          color: @gray;
        }

        .bottom {
          margin-top: 16px;
          > .num {
            margin-left: 6px;
            &:hover {
              color: @themeColor;
            }
          }
        }

        .button-wrap {
          margin-top: 25px;
          .button {
            font-size: 0.8em;
            padding: 6px 11px;
          }
        }
      }
    }
    .head-title {
      color: @themeColor;
      font-weight: bold;
    }
    .head-icon {
      width: 150px;
      height: 150px;
      border-radius: 10px;
    }
  }
}
.bottom-box {
  display: flex;
  justify-content: center;
}
</style>