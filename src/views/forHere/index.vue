<template>
  <div>
    <el-card class="card">
      <div slot="header">大厅01</div>
      <div>
        <div>
          <el-button size="mini" type="primary" @click="setDishes">点菜</el-button>
          <el-button size="mini" type="primary">结账</el-button>
        </div>
        <div>
          <el-button size="mini" type="primary">移桌</el-button>
          <el-button size="mini" type="primary">取消</el-button>
        </div>
      </div>
    </el-card>
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
    setDishes () {
      this.$router.push()
    }
  }
}
</script>

<style scoped>
.card {
  width:20%;
  height: 20%;
}
</style>
