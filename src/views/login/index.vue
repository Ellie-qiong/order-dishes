<template>
  <div>
    <div class="signIn">
      <el-form ref="form" :model="userInfo" label-width="80px" :rules="rule">
        <el-form-item label="账号：" prop="userId">
          <el-input v-model="userInfo.userId" placeholder="请输入用户手机号"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="userPassword">
          <el-input v-model="userInfo.userPassword" placeholder="请输入用户密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
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
      userInfo: {
        userId: '',
        userPassword: ''
      },
      rule: {
        userId: [{ required: true, message: '必填项', trigger: 'change' }],
        userPassword: [{ required: true, message: '必填项', trigger: 'change' }]
      }
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
    login () {
      this.$router.push({ path: '/home' })
    }
  }
}
</script>

<style scoped>
.signIn {
  display: flex;
  justify-items: center;
}

</style>
