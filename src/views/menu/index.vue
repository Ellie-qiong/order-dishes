<template>
  <el-container>
    <el-aside>
      <el-button type="text" @click="comeBack()" class="come_back_btn"><i class="iconfont icon-houtui"></i><span>返回主页</span></el-button>
      <el-descriptions title="已点菜品" :column="1" border>
        <el-descriptions-item v-for="(item, index) in checkedDish" :key="index" :label="index+1">
          <span>{{item.dishName}}</span>
          <span>*{{item.number}}份</span>
          <span>{{item.price * item.number}}元</span>
          <el-button type="primary" @click="deleteDish(item)" class="del-btn" size="mini">取消</el-button>
          </el-descriptions-item>
      </el-descriptions>
    </el-aside>
    <el-main>
      <el-tabs tab-position="left">
        <el-tab-pane label="热菜">
          <host-dish @addDish="addDish"></host-dish>
        </el-tab-pane>
        <el-tab-pane label="凉菜">凉菜</el-tab-pane>
        <el-tab-pane label="饮料">饮料</el-tab-pane>
        <el-tab-pane label="香烟">香烟</el-tab-pane>
        <el-tab-pane label="赠送">赠送</el-tab-pane>
        <el-tab-pane label="兑奖">兑奖</el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
import hostDish from './hostDish.vue'
export default {
  name: '',
  components: {
    hostDish
  },
  props: {

  },
  data () {
    return {
      checkedDish: []
    }
  },
  methods: {
    // 增加消费
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
      this.$confirm('所选菜品还未保存，是否离开？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$router.push('/forHere')
      })
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

.del-btn {
  float: right;
}
</style>
