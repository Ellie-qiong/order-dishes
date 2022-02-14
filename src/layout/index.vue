<template>
  <div>
    <el-container class="main">
      <el-aside class="el-aside">
        <my-aside></my-aside>
      </el-aside>
      <el-container>
        <el-header>
          <h3>{{$route.meta.title}}</h3>
        </el-header>
        <el-main class="el-main">
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
    text-align: center;
    line-height: 200px;
    width:15%
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 100%;
  }
  .main {
    height: 100vh;
  }
</style>
