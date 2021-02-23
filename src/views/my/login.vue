<!--  -->
<template>
  <div class="">
    <!-- 登陆页面 -->
    <div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="username">
          <el-input
            name="username"
            type="text"
            v-model="ruleForm.username"
            placeholder="请填写账号/邮箱/手机号"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>

      <div class="login_link">
        <router-link to="/register">
          <a href="#">立即注册</a>
        </router-link>
        <a href="#">找回密码</a>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { validateUsername, validatePass } from "../../utils/auth";
import axios from "axios"; // 引入axios

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      ruleForm: {
        pass: "",
        email: "",
      },
      rules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    submitForm(ruleForm) {
      const registerBtn = document.querySelectorAll(".el-input__inner");
      let username = registerBtn[0].value;
      let pass = registerBtn[1].value;

      // console.log(this.$refs);
      this.$refs[ruleForm].validate((valid) => {
        // console.log(valid);
        if (valid) {
          // alert("submit!");
          // setToken("获取到token");
          axios
            .get(`http://jx.xuzhixiang.top/ap/api/login.php`, {
              params: {
                username,
                password: pass,
              },
            })
            .then((res) => {
              console.log(res);
              // console.log(res.data.code);
              if (res.data.code == 1) {
                this.$router.push("/my");
                localStorage.setItem("uid", res.data.data.id);
                localStorage.setItem("token", res.data.data.token);
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.login_link {
  display: flex;
  justify-content: space-between;
}
.login_link a {
  text-decoration: none;
  margin: 0 5px;
  font-size: 12px;
  color: #e54847;
}
.demo-ruleForm {
  margin-left: -30px;
  margin-top: 30px;
}
</style>