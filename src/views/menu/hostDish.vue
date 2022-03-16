<template>
  <el-row :gutter="10">
    <el-col :span="4"  v-for='(item, index) in allDishes' :key="index">
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
    </el-col>
  </el-row>
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
      allDishes: [
        {price: 35, dishName: '鱼香肉丝', number: 1},
        {price: 36, dishName: '宫保鸡丁', number: 1},
        {price: 29, dishName: '麻婆豆腐', number: 1},
        {price: 16, dishName: '地三鲜', number: 1},
        {price: 86, dishName: '大盘鸡', number: 1},
        {price: 18, dishName: '蒜蓉油麦菜', number: 1},
        {price: 18, dishName: '红烧茄子', number: 1}
      ],
      dishNumber: 1
    }
  },
  methods: {
    // 选中菜品
    hitDishes (val) {
      this.$emit('addDish', val)
    }
  }
}
</script>

<style scoped>

.el-input-number.is-without-controls .el-input__inner {
  width: 1px  !important;
  line-height: 3px;
  height: 28px;
}

</style>
