<template>
  <div class="right-content">
    <el-card class="box-card">
      <div class="thesis-wrap">
        <div class="top">
          <span class="my-thesis">我要审查的项目</span>
          <el-link @click="back()" v-show="!isShow" type="primary">返回上一级</el-link>
        </div>
        <div class="thesis-list" v-show="isShow">
          <template v-for="(item,index) in items">
            <div class="item" @click="getApply(item.id,index)">
              <div class="left">
                <span class="day">{{item.createDate.slice(5,10)}}</span>
                <span class="year">{{item.createDate.slice(0,4)}}</span>
              </div>
              <div class="right">
                <div class="title">
                  <span>{{item.title}}</span>
                </div>
                <div class="abstract">内容简介：{{item.content.slice(0,50)+'...'}}</div>
                <el-divider></el-divider>
              </div>
            </div>
          </template>
        </div>
        <div class="apply-list" v-if="!isShow">
          <div class="thesis-list">
            <div class="item">
              <div class="right" style="cursor: default;">
                <div class="title">
                  <span>项目题目：{{items[currentIndex].title}}</span>
                </div>
                <div class="abstract">内容：{{items[currentIndex].content}}</div>
                <el-divider></el-divider>
              </div>
            </div>
          </div>

          <el-table :data="tableData" style="width: 100%">
            <el-table-column  label="申请日期" width="160">
			    <template
            slot-scope="scope"
          >{{tableData[scope.$index].date.slice(0,4)}}-{{tableData[scope.$index].date.slice(5,10)}}</template>
			</el-table-column>
            <el-table-column  label="姓名" width="140">
			 <template slot-scope="scope">
            <router-link
              class="link"
              :to="{name:'UserInfo',params:{
          id:userList[scope.$index].id}}"
            >{{userList[scope.$index].nickname}}</router-link>
          </template>
			
			</el-table-column>
            <el-table-column label="资料提交">
              <template slot-scope="scope">
                <div v-if="tableData[scope.$index].file">
                  <a :href="tableData[scope.$index].file">下载资料查看</a>
                </div>
                <div v-else>没有提交</div>
              </template>
            </el-table-column>
            <el-table-column label="审查状态">
              <template slot-scope="scope">
                <el-select
                  @change="changeApply(scope.$index,scope.row)"
                  v-model="checkArray[scope.$index]"
                  placeholder="未选择"
                >
                  <el-option
                    v-for="item in checkOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import { getProfessorItem, getItemApplyByItemId,updateItemProfessorCheck,getUserInfoById } from "./../request/api";
export default {
  data() {
    return {
      items: [],
      isShow: true,
      currentIndex: 0,
      tableData: [],
      checkArray: [],
	    userList: [],
      checkOptions: [
        {
          value: "通过",
          label: "通过"
        },
        {
          value: "未通过",
          label: "未通过"
        }
      ]
    };
  },
  methods: {
    changeApply(index, row) {
        row.check= this.checkArray[index]=='通过' ? 1 : 0  ;
      updateItemProfessorCheck(row).then(
        val => {
          let result = val.data;
        },
        err => {}
      );
    },
    back() {
      this.isShow = true;
    },
    getApply(id, index) {
      this.currentIndex = index;
      this.isShow = false;
      getItemApplyByItemId(id).then(
        val => {
          let result = val.data;
          this.tableData = result.data;
          this.tableData.forEach((item,index)=> {
            this.checkArray.push(item.check == 0 ? " 未通过" : "通过");
			 getUserInfoById(this.tableData[index].applyId).then(
            val => {
              this.userList.push(val.data.data);
            },
            error => {}
          );
          });
        },
        err => {}
      );
    }
  },
  created() {
    getProfessorItem().then(
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
  cursor: pointer;
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