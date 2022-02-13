<template>
  <div class="demo">
    <el-menu
      default-active="forHere"
      router>
        <el-menu-item index="forHere">
          <span slot="title">堂食</span>
        </el-menu-item>
        <el-menu-item index="takeOut">
          <span slot="title">打包</span>
        </el-menu-item>
        <el-menu-item index="orderRecord">
          <span slot="title">订单记录</span>
        </el-menu-item>
        <el-menu-item index="incomeAnalysis">
          <span slot="title">收入分析</span>
        </el-menu-item>
    </el-menu>
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

<style >
.el-menu-item {
  font-size: 16px;
  height: 80px;
  line-height: 92px;
  color: rgb(73, 68, 68);
  transition: none !important;
}
.el-menu-item .is-active{
  border-bottom-color: none !important;
}
.el-menu-item:hover{
    color: #1787FB !important;
    background-color: rgb(243, 240, 240)
}

</style>
