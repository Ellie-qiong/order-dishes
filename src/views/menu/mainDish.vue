<template>
  <div>
    <el-tabs tab-position="left">
      <el-tab-pane label="热菜">
        <host-dish @addDish="addDish" dishType="热菜"></host-dish>
      </el-tab-pane>
      <el-tab-pane label="凉菜">
        <host-dish @addDish="addDish" dishType="凉菜"></host-dish>
      </el-tab-pane>
      <el-tab-pane label="饮料">饮料</el-tab-pane>
      <el-tab-pane label="香烟">香烟</el-tab-pane>
      <el-tab-pane label="赠送">赠送</el-tab-pane>
      <el-tab-pane label="兑奖">兑奖</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import hostDish from './hostDish.vue'
export default {
  components: {
    hostDish
  },
  props: {

  },
  data () {
    return {
      dishType: {
        1: '热菜',
        2: '凉菜',
        3: '饮料',
        4: '香烟',
        5: '赠送',
        6: '兑奖'
      }
    }
  },
  methods: {
    // 增加消费
    addDish (val) {
      this.$emit('addDish', val)
    }
  }
}
</script>

<style scoped>

</style>
