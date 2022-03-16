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
            isCollapse{{isCollapse}}
            <span>{{tab}}</span>
          </div>
          <span class="font">用户名：{{userName.userId}}</span>
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
    a () {
      console.log('ok')
    },
    // 关闭菜单
    changeCollapse () {
      this.isCollapse = !this.isCollapse
      console.log('dianji', this.isCollapse)
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
    height: 100vh;
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
