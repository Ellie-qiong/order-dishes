<template>
  <div class="demo">
    <el-menu
      default-active="forHere"
      router
      :collapse="isCollapse"
      class="el-menu-vertical-demo">
        <el-menu-item index="/forHere">
          <i class="iconfont icon-tangshi-"></i><span slot="title">堂食</span>
        </el-menu-item>
        <el-menu-item index="/orderRecord">
          <i class="iconfont icon-dingdanjilu"></i><span slot="title">订单记录</span>
        </el-menu-item>
        <el-menu-item index="/incomeAnalysis">
          <i class="iconfont icon-shouru"></i><span slot="title">收入分析</span>
        </el-menu-item>
        <el-submenu index="/userManage">
        <template slot="title">
          <i class="iconfont icon-yonghuguanli"></i><span>用户管理</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="/userManage/userInfo"><i class="iconfont icon-yonghubianji"></i><span>用户基本信息</span></el-menu-item>
            <el-menu-item index="/userManage/userUp"><i class="iconfont icon-icon_xinyong_xianxing_jijin-180"></i><span>用户注册</span></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: '',
  components: {

  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
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

 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
    min-height: 100%;
  }
</style>
