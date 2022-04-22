<template>
  <el-container>
    <el-aside>
      <el-button type="text" @click="comeBack()" class="come_back_btn"><i class="iconfont icon-houtui"></i><span>返回主页</span></el-button>
      <div class="aside-style">
        <div class="dish-content">
          <el-descriptions title="已点菜品" :column="1" border>
            <el-descriptions-item v-for="(item, index) in checkedDish" :key="index" :label="index+1">
              <span>{{item.dishName}}</span>
              <span>*{{item.number}}份</span>
              <span>{{item.price * item.number}}元</span>
              <el-button v-if="isClose" type="primary" @click="deleteDish(item)" class="del-btn" size="mini">取消</el-button>
              </el-descriptions-item>
          </el-descriptions>
        </div>
        <div class="dish-ok-btn">
          <el-button  v-if="isEdit" type="primary" @click="dishEdit">编辑菜单</el-button>
          <el-button type="primary" @click="closeDishEdit">退出编辑</el-button>
          <el-button type="primary" @click="dishOk">下单</el-button>
        </div>
      </div>
    </el-aside>
    <el-main>
      <main-dish @addDish="addDish"></main-dish>
    </el-main>
  </el-container>
</template>

<script>
import mainDish from './mainDish.vue'
export default {
  components: {
    mainDish
  },
  data () {
    return {
      // 已点菜品
      checkedDish: [],
      isEdit: false,
      isClose: true
    }
  },
  methods: {
    addDish (val) {
      if (!this.checkedDish.includes(val)) {
        this.checkedDish.push(val)
      }
    },
    // 取消已选菜品
    deleteDish (item) {
      if (this.checkedDish.includes(item)) {
        let area = this.checkedDish.indexOf(item)
        this.checkedDish.splice(area, 1)
      }
    },
    comeBack () {
      if (this.checkedDish.length || !this.isClose) {
        this.$confirm('所选菜品还未保存，是否离开？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push('/forHere')
        })
      } else {
        this.$router.push('/forHere')
      }
    },
    async dishOk () {
      if (!this.checkedDish.length) {
        this.$message({
          message: '不能提交空单',
          type: 'warning'
        })
        return false
      } else {
        let params = {
          checkedDish: this.checkedDish,
          nowHall: this.$route.query.nowHall
        }
        await this.$axios.post('http://localhost:3000/selectMenu', params).then(() => {
          this.$message({
            message: '订单已经提交！',
            type: 'success'
          })
        })
        this.isEdit = true
        this.isClose = false
      }
    },
    dishEdit () {
      this.isClose = true
    },
    closeDishEdit () {
      this.isClose = false
    }
  }
}
</script>

<style scoped>
.left-style {
  font-size: 20px;
}
.right-style {
  justify-content: right;
}
.el-card /deep/ .el-card__header {
  padding: 15px;
}
.card-footer {
  display: inline-block
}
.aside-style{
  height: 83vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}
.dish-content{
  overflow: auto;
  flex: 1;
}
.del-btn {
  float: right;
}
.dish-ok-btn {
  position:fixed;
  bottom: 3vh;
  left: 6vw;
}
</style>
