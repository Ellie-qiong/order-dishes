<template>
  <div>
    <div class="signIn">
      <el-form ref="form" :model="userInfo" label-width="80px" :rules="rule">
        <el-form-item label="账号：" prop="userId">
          <el-input v-model="userInfo.userId" placeholder="请输入用户手机号"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="userPassword" >
          <el-input type="password" v-model="userInfo.userPassword" placeholder="请输入用户密码" autocomplete="off"></el-input>
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
  methods: {
    login () {
      this.$refs.form.validate(async valid => {
        if (!valid) {
          return false
        }
        await this.$axios.get('http://localhost:3007/userConfig?userName=' + this.userInfo.userId).then(res => {
          this.$router.push({ path: '/forHere' })
          this.$store.commit('SET_USER', res.data[0])
        }).catch()
      })
    }
  }
}
</script>

<style scoped>
.signIn {
  display: flex;
  justify-items: center;
  padding: 20% 0 0 40%
}

</style>
