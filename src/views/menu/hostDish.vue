<template>
  <div class="main-sty">
    <div v-for='(item, index) in allDishes' :key="index" class="dish-sty">
      <el-card class="box-card" :body-style="{padding: '15px'}">
        <div slot="header" class="box-header">
          <span class="left-style"> {{item.dishName}} </span>
          <span class="right-style"> {{item.price}}元 </span>
        </div>
        <div class="card-footer">
          <el-input-number v-model="item.number" :min="1" :max="10" size="small" class="card-footer"></el-input-number>
          <el-button type="primary" @click="hitDishes(item)" size="mini">选中</el-button>
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
    dishType: {
      type: String,
      default: '热菜'
    }
  },
  data () {
    return {
      allDishes: []
    }
  },
  created () {
    this.getHostDishMenu()
  },
  methods: {
    // 选中菜品
    hitDishes (val) {
      this.$emit('addDish', val)
    },
    // 初始化菜单
    getHostDishMenu () {
      console.log('this.dishType', this.dishType)
      this.$axios.get('http://localhost:3000/dishMenu?dishType=' + this.dishType).then((res) => {
        this.allDishes = res.data[0].dishList
      })
    }
  }
}
</script>

<style scoped>
.main-sty {
  display: flex;
  flex-wrap: wrap;
}
.el-input-number.is-without-controls .el-input__inner {
  width: 1px  !important;
  line-height: 3px;
  height: 28px;
}
.dish-sty {
  width: 200px;
  height: 150px;
  margin: 10px
}
</style>
