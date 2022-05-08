<template>
  <div>
    <el-container class="main">
      <div class="aside">
        <my-aside :isCollapse="isCollapse"></my-aside>
      </div>
      <div class="main-style" :class="{isActive: isCollapse}">
        <div class="header">
          <div class="left-icon" @click="changeCollapse">
            <i v-if="isCollapse" class="iconfont icon-zhankaicaidan"></i>
            <i v-else class="iconfont icon-shouqicaidan" ></i>
            <span>{{this.$route.meta.title}}</span>
          </div>
          <span class="font">用户名：{{role.userName}}</span>
        </div>
        <router-view></router-view>
      </div>
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
      role: JSON.parse(localStorage.getItem('state')),
      // 展开收起菜单
      isCollapse: false
    }
  },
  methods: {
    // 关闭菜单
    changeCollapse () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="less" scoped>

  .main {
    .aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    }
  .main-style {
    text-align: center;
    height: 100%;
    width: 100%;
    margin-left: 300px;
    }
    .isActive {
      margin-left: 64px !important
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
    height: 60px;
    .left-icon {
    display: flex;
    justify-items: left;
    font-size: 25px;
    }
  }

</style>
