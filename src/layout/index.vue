<template>
  <div>
    <el-container class="main">
      <el-aside class="aside">
        <my-aside :isCollapse="isCollapse"></my-aside>
      </el-aside>
      <el-container class="context">
        <el-main class="el-main">
          <div class="header">
          <span v-if="isCollapse"  @click="closeMenu">
          <i class="iconfont icon-zhankaicaidan"></i>
          </span>
          <span v-else @click="openMenu">
            <i class="iconfont icon-shouqicaidan"></i>
          </span>
          <span>{{tab}}</span>
          <span class="font">用户名：{{userName.userId}}</span>
        </div>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import myAside from './myAside.vue'
export default {
  name: '',
  components: {
    myAside
  },
  props: {
    currentPage: {
      type: String,
      default: ''
    }

  },
  data () {
    return {
      userName: JSON.parse(localStorage.getItem('state')),
      // 展开收起菜单
      isCollapse: false
    }
  },
  computed: {
    tab () {
      return this.$route.meta.title ? this.$route.meta.title : '堂食'
    }
  },
  methods: {
    // 关闭菜单
    closeMenu () {
      this.showMenu = !this.showMenu
      this.isCollapse = !this.isCollapse
    },
    // 展开菜单
    openMenu () {
      this.showMenu = !this.showMenu
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="less" scoped>

  .main {
    height: 100vh;
    .aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 100%;
  }
  }
  .font {
    color:rgb(135, 181, 219);
    font-size: 15px;
    display: flex;
    justify-content: flex-end;
  }
  .header {
    background-color: #576e88;
  }
  .iconfont{
       font-size: 30px;
  }
</style>
