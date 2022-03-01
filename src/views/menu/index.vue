<template>
  <el-container>
    <el-aside width="25%">
      点单
    </el-aside>
    <el-main>
      <el-tabs tab-position="left">
        <el-tab-pane label="热菜">
          <div class="menu-style">
            <el-card class="menuCard">
              <div slot="header">鱼香肉丝</div>
              <el-button type="primary">35</el-button>
            </el-card>
          </div>
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
export default {
  name: '',
  components: {

  },
  props: {

  },
  data () {
    return {

    }
  },
  computed: {

  },
  watch: {

  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped>
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .menu-style{
    width: 100px;

  }
</style>
