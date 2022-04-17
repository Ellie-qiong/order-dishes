<template>
  <div>
    <div v-for="(item, index) in hallList" :key="index">
      <el-card class="card">
        <div slot="header">{{item.hallNum}}号大厅</div>
          <div>
            <el-button class="button" size="mini" type="primary" @click="setDishes(item.hallNum)">点菜</el-button>
            <el-button class="button" size="mini" type="primary">结账</el-button>
          </div>
          <div>
            <el-button class="button" size="mini" type="primary">移桌</el-button>
            <el-button class="button" size="mini" type="primary">取消</el-button>
          </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {

  },
  props: {

  },
  data () {
    return {
      hallList: [],
      oldDish: []
    }
  },
  mounted () {
    this.getHall()
  },
  methods: {
    getHall () {
      this.$axios.get('http://localhost:3000/hallNumList').then((res) => {
        this.hallList = res.data || []
      })
    },
    // 进入菜单
    async setDishes (item) {
      let { data } = await this.$axios.get('http://localhost:3000/selectMenu?nowHall=' + item)
      console.log('getData', data)
      this.oldDish = data.checkDish
      this.$router.push({
        path: '/menu',
        query: {
          nowHall: item,
          oldDish: this.oldDish
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.card {
  width:20%;
  height: 20%;
}
</style>
