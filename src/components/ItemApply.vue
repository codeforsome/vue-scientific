<template>
  <div class="apply-box">
    <div class="table-box">
      <div class="table-title">申请人状态:</div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column label="申请日期" width="180">
          <template
            slot-scope="scope"
          >{{tableData[scope.$index].date.slice(0,4)}}-{{tableData[scope.$index].date.slice(5,10)}}</template>
        </el-table-column>
        <el-table-column label="姓名" width="180">
          <template slot-scope="scope">
            <router-link
              class="link"
              :to="{name:'UserInfo',params:{
          id:userList[scope.$index].id}}"
            >{{userList[scope.$index].nickname}}</router-link>
          </template>
        </el-table-column>
        <el-table-column prop="apply" label="申请状态">
          <template slot-scope="scope">
            <el-select
             v-if="userType==1"
              @change="changeApply(scope.$index,scope.row)"
              v-model="applyArray[scope.$index]"
              placeholder="未选择"
            >
              <el-option
                v-for="item in applyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <span v-else>{{applyArray[scope.$index]}}</span>
          </template>
        </el-table-column>
        <el-table-column label="选择专家审查">
          <template slot-scope="scope" >
            <el-select
              v-if="userType==1"
              @change="changeProfessor(scope.$index,scope.row)"
              v-model="professorArray[scope.$index]"
              placeholder="未选择"
            >
              <el-option
                v-for="item in professorOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <span v-else>{{professorArray[scope.$index]}}</span>

          </template>
          
        </el-table-column>
        <el-table-column label="资料提交">
          <template slot-scope="scope">
            <div v-if="tableData[scope.$index].filePath">
              <a :href="tableData[scope.$index].filePath">下载资料查看</a>
            </div>
            <div v-else>没有提交</div>
          </template>
        </el-table-column>
        <el-table-column label="专家审查状态">
          <template slot-scope="scope" >
            <el-select
              v-if="userType==2"
              @change="changeCheck(scope.$index,scope.row)"
              v-model="checkArray[scope.$index]"
              placeholder="未选择"
            >
              <el-option
                v-for="(item,index) in checkOptions"
                :key="index"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <span v-else>{{checkArray[scope.$index]}}</span>

          </template>
   
        </el-table-column>
      </el-table>
      <div class="bottom">
        <el-link @click="back()" type="primary">返回上一级</el-link>
      </div>
    </div>
  </div>
</template>
<script>
import {
  updateItemApplyState,
  updateItemProfessor,
  getItemApplyByItemId,
  getAllProfessor,
  getUserInfoById,
  updateItemCheckState
} from "./../request/api";
export default {
  data() {
    return {
      id: "",
      applyArray: [],
      applyOptions: [
        {
          value: "通过",
          label: "通过"
        },
        {
          value: "未通过",
          label: "未通过"
        }
      ],
      checkArray: [],
      checkOptions: [
        {
          value: "通过",
          label: "通过"
        },
        {
          value: "未通过",
          label: "未通过"
        }
      ],
      userList: [],
      professorArray: [],
      professorList: [],
      professorOptions: [],
      options: [],
      tableData: []
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    userType() {
      return this.$store.getters.userType;
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    changeCheck(index, row) {
      row.check = this.checkArray[index] == "通过" ? 1 : 0;
      updateItemCheckState(row).then(
        val => {
          let result = val.data;
        },
        err => {}
      );
    },
    changeApply(index, row) {
      row.apply = this.applyArray[index] == "通过" ? 1 : 0;
      updateItemApplyState(row).then(
        val => {
          let result = val.data;
        },
        err => {}
      );
    },
    changeProfessor(_index, row) {
      this.professorList.forEach(item => {
        if (item.nickname == this.professorArray[_index]) {
		row.professorId=item.id;
          updateItemProfessor(row).then(
            val => {
              let result = val.data;
            },
            err => {}
          );
          return;
        }
      });
    }
  },
  created() {
    this.id = this.$route.params.id;
    getItemApplyByItemId(this.id).then(
      val => {
        let result = val.data;
        this.tableData = result.data;
        for (let i = 0; i < this.tableData.length; i++) {
          this.applyArray.push(
            this.tableData[i].apply == 0 ? "未通过" : "通过"
          );
          this.checkArray.push(
            this.tableData[i].check == 0 ? "未通过" : "通过"
          );
          getUserInfoById(this.tableData[i].applyId).then(
            val => {
              this.userList.push(val.data.data);
            },
            error => {}
          );
        }
        getAllProfessor().then(
          val => {
            this.professorList = val.data.data;
            this.professorList.forEach((item, index) => {
              this.professorOptions.push({
                value: item.nickname,
                label: item.nickname
              });
            });
            this.tableData.forEach(item => {
              let professId = item.professorId;
              this.professorList.forEach((item, index) => {
                if (professId == item.id)
                  this.professorArray.push(item.nickname);
              });
            });
          },
          err => {}
        );
      },
      err => {}
    );
  }
};
</script>

<style lang="less" scoped>
.table-box {
  .table-title {
    color: @themeColor;
  }

  .bottom {
    margin-top: 10px;
  }
}
</style>