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
      this.$refs.form.validate(valid => {
        if (!valid) return false

        this.$router.push({ path: '/home' })
        this.$store.commit('SET_USER', this.userInfo)
        console.log('userInfo:', this.$store.state)
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
