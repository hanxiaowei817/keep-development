<!--  -->
<template>
  <div class="">
    <!-- 注册页面  -->
    <div class="my-register">
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
            placeholder="6-12个字符"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
            placeholder="不得小于6位字符"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input
            type="email"
            v-model="ruleForm.email"
            placeholder="请输入邮箱"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input
            type="text"
            v-model="ruleForm.phone"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">
            注册
          </el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {
  validateUsername,
  validatePass,
  validateEmail,
  validatePhone,
} from "../../utils/auth";
import axios from "axios"; // 引入axios

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      ruleForm: {
        username: "",
        pass: "",
        email: "",
        phone: "",
      },
      rules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
        email: [{ required: true, trigger: "blur", validator: validateEmail }],
        phone: [{ required: true, trigger: "blur", validator: validatePhone }],
      },
      //  结尾有分号
      semi: 0,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    submitForm(ruleForm) {
      // const registerBtn = document.querySelectorAll(".el-input__inner");
      // console.log(registerBtn);
      // console.log(this.$refs);
      let username = this.ruleForm.username;
      let pass = this.ruleForm.pass;
      console.log(this.ruleForm.username, this.ruleForm.pass);
      this.$refs[ruleForm].validate((valid) => {
        // console.log(valid);
        if (valid) {
          // alert("submit!");
          axios
            .get(
              // `http://jx.xuzhixiang.top/ap/api/reg.php?username=${username}&password=${pass}`
              // {
              //   username,
              //   password: pass,
              // }
              `http://jx.xuzhixiang.top/ap/api/reg.php`,
              {
                params: {
                  username,
                  password: pass,
                },
              }
            )

            .then((res) => {
              console.log(res);
              // console.log(res.data.code);
              if (res.data.code == 1) {
                this.$router.push("/login");
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(ruleForm) {
      this.$refs[ruleForm].resetFields();
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
.my-register {
  margin-left: -35px;
  margin-top: 30px;
}
</style>