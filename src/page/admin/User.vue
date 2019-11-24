<template>
  <div class="user-box">
    <div class="table-box">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="注册日期" width="110">
          <template
            slot-scope="scope"
          >{{tableData[scope.$index].createDate.slice(0,4)}}-{{tableData[scope.$index].createDate.slice(5,10)}}</template>
        </el-table-column>
        <el-table-column label="头像" width="100">
          <template slot-scope="scope">
            <img
              class="head-icon"
              width="80px"
              height="80px"
              :src="tableData[scope.$index].headIcon"
            />
          </template>
        </el-table-column>
        <el-table-column prop="username" label="账户名" width="120"></el-table-column>
        <el-table-column prop="nickname" label="姓名" width="100"></el-table-column>
        <el-table-column prop="apply" label="账号状态">
          <template slot-scope="scope">
            <el-select
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
          </template>
        </el-table-column>
        <el-table-column label="重置密码">
          <template slot-scope="scope">
            <el-button type="text" @click="choice(scope.$index)">点击重置</el-button>
          </template>
        </el-table-column>
        <el-table-column label="更改用户类型">
          <template slot-scope="scope">
            <el-select
              @change="changeUserType(scope.$index,scope.row)"
              v-model="userTypeArray[scope.$index]"
              placeholder="未选择"
            >
              <el-option
                v-for="item in userTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column label="操作用户">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="bottom-box">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="userPagination.total"
          :page-size="userPagination.pageSize"
          @current-change="userCurrentChange"
          @prev-click="userCurrentChange"
          @next-click="userCurrentChange"
        ></el-pagination>
      </div>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>{{passwordTip}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="resetPassword()">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="提示"
      :visible.sync="deleteDialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>{{deleteTip}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="deletUser()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import {
  getAllUserInfo,
  getUserCount,
  updataUserLoginStatus,
  resetUserPassword,
  updataUserType,
  deleteUserById
} from ".././../request/api";
export default {
  data() {
    return {
      dialogVisible: false,
      deleteDialogVisible: false,
      userPagination: {
        total: 10,
        pageSize: 4,
        currentPage: 0
      },
      passwordTip: "",
      deleteTip: "",
      choiceCurrent: -1,
      tableData: [],
      applyArray: [],
      applyOptions: [
        {
          value: "禁用",
          label: "禁用"
        },
        {
          value: "正常",
          label: "正常"
        }
      ],
      userTypeArray: [],
      userTypeOptions: [
        {
          value: "普通用户",
          label: "普通用户"
        },
        {
          value: "科研管理人员",
          label: "科研管理人员"
        },
        {
          value: "专家",
          label: "专家"
        }
      ]
    };
  },
  created() {
    getUserCount().then(
      val => {
        let result = val.data;
        this.userPagination.total = result.data;
      },
      err => {}
    );
    getAllUserInfo().then(
      val => {
        let result = val.data;
        this.tableData = result.data;
        for (let i = 0; i < this.tableData.length; i++) {
          this.applyArray.push(this.tableData[i].status == 0 ? "禁用" : "正常");
        }
        for (let i = 0; i < this.tableData.length; i++) {
          this.userTypeArray.push(
            this.userTypeOptions[this.tableData[i].type].value
          );
        }
      },
      err => {}
    );
  },
  methods: {
    choice(index) {
      (this.passwordTip = "是否重置密码？"), (this.dialogVisible = true);
      this.choiceCurrent = index;
    },
    handleDelete(index) {
      this.deleteTip = "是否删除该用户？";
      this.deleteDialogVisible = true;
      this.choiceCurrent = index;
    },
    resetPassword() {
      resetUserPassword({
        username: this.tableData[this.choiceCurrent].username
      }).then(
        val => {
          this.passwordTip = "重置密码成功";
          setTimeout(() => {
            this.dialogVisible = false;
          }, 1000);
        },
        err => {
          this.passwordTip = "重置密码失败";
          setTimeout(() => {
            this.dialogVisible = false;
          }, 1000);
        }
      );
    },
    deletUser() {
      deleteUserById({ id: this.tableData[this.choiceCurrent].id }).then(
        val => {
          this.deleteTip = "删除用户成功";
          setTimeout(() => {
            this.deleteDialogVisible = false;
          }, 1000);
        },
        err => {
          this.deleteTip = "删除用户失败";
          setTimeout(() => {
            this.deleteDialogVisible = false;
          }, 1000);
        }
      );
    },
    changeApply(index, row) {
      row.status = this.applyArray[index] == "正常" ? 1 : 0;
      updataUserLoginStatus(row).then(
        val => {
          let result = val.data;
        },
        err => {}
      );
    },
    changeUserType(index, row) {
      let typeNumber = {
        普通用户: 0,
        科研管理人员: 1,
        专家: 2
      };
      row.type = typeNumber[this.userTypeArray[index]];
      updataUserType(row).then(
        val => {
          let result = val.data;
        },
        err => {}
      );
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    userCurrentChange(page) {
      this.userPagination.currentPage = page;
      let obj = { currentPage: page, pageSize: this.userPagination.pageSize };
      getAllUserInfo(obj).then(
        val => {
          let result = val.data;
          this.tableData = result.data;
          for (let i = 0; i < this.tableData.length; i++) {
            this.applyArray.push(
              this.tableData[i].status == 0 ? "禁用" : "正常"
            );
          }
          for (let i = 0; i < this.tableData.length; i++) {
            this.userTypeArray.push(
              this.userTypeOptions[this.tableData[i].type].value
            );
          }
        },
        err => {}
      );
    }
  }
};
</script>
<style lang="less" scoped>
.table-box {
  .table-title {
    color: @themeColor;
  }

  .bottom-box {
    display: flex;
    justify-content: center;
  }
}
</style>