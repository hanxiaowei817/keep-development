<!--  -->
<template>
  <div id="my">
    <div id="content">
      <div class="login_body">
        <div v-if="!isLogin">
          <div>
            <input
              class="login_text"
              type="text"
              placeHolder="账户名/手机号/Email"
            />
          </div>
          <div>
            <input
              class="login_text"
              type="password"
              placeHolder="请输入您的密码"
            />
          </div>
          <div class="login_btn">
            <input type="submit" value="登录" @click="login" />
          </div>
          <div class="login_link">
            <a href="#">立即注册</a>
            <a href="#">找回密码</a>
          </div>
        </div>

        <div v-else>
          <div class="my-header">
            <i class="iconfont icon-wode"></i>
            <i class="iconfont icon-dianying"></i>
            <i class="iconfont icon-yingyuan"></i>
          </div>
          <div>
            <p class="my-huanying">尊敬的客户：</p>
            <p class="my-continue">相信自己，坚持锻炼，坚持瘦身</p>
          </div>
          <div class="keep-huiyuan">
            <p>keep会员</p>
            <p>首月立减10元！</p>
            <p class="lijikaitong">立即开通</p>
          </div>
          <div class="my-shujuall">
            <div class="my-shuju">
              <p>运动数据</p>
              <p>总运动</p>
              <p>337分钟</p>
              <p>本周消耗0千卡</p>
            </div>
            <div class="my-shuju">
              <p>健康数据</p>
              <p>体重</p>
              <p>55kg</p>
              <p>上次记录181天前</p>
            </div>
          </div>
          <div class="my-kecheng">
            <span>我的课程</span>
            <i class="iconfont icon-dianying"></i>
            <div class="my-kecheng1">
              <div>
                <img
                  class="my-shoucangkecheng"
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190209%2F62aead63100b46adba1ccc445663ee35.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615201393&t=2970979c32b60d266ca1a570e7bca658"
                  alt=""
                />
              </div>
              <div class="my-shoucang">
                <p>我收藏的课程</p>
                <p>0节课程</p>
              </div>
            </div>
            <div class="my-kecheng1">
              <div>
                <img
                  class="my-shoucangkecheng"
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190209%2F62aead63100b46adba1ccc445663ee35.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615201393&t=2970979c32b60d266ca1a570e7bca658"
                  alt=""
                />
              </div>
              <div class="my-shoucang">
                <p>我收藏的课程</p>
                <p>0节课程</p>
              </div>
            </div>
          </div>

          <mt-cell
            title="退出登录"
            is-link
            value="退出"
            @click.native="loginout"
          >
          </mt-cell>
          <Footer></Footer>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "../../components/footer/footer";
import { setToken, getToken, removeToken } from "../../utils/auth";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
  },
  data() {
    //这里存放数据
    return {
      isLogin: getToken() || "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    login() {
      setToken("获取到token");
      this.isLogin = true;
    },
    loginout() {
      removeToken();
      this.isLogin = false;
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
#content .login_body {
  width: 100%;
}
.login_body .login_text {
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px #ccc solid;
  margin-bottom: 5px;
  outline: none;
  text-indent: 10px;
}
.login_body .login_btn {
  height: 50px;
  margin: 10px;
}
.login_body .login_btn input {
  width: 100%;
  height: 100%;
  background: #e54847;
  border-radius: 3px;
  border: none;
  display: block;
  color: white;
  font-size: 20px;
}
.login_body .login_link {
  display: flex;
  justify-content: space-between;
}
.login_body .login_link a {
  text-decoration: none;
  margin: 0 5px;
  font-size: 12px;
  color: #e54847;
}

/* 以下是自己写的 */
.my-header {
  height: 30px;
  /* position: fixed;
  top: 30px;
  left: 0; */
}
.icon-wode,
.icon-yingyuan,
.icon-dianying {
  font-size: 30px;
}
.icon-dianying {
  margin-left: 276px;
}
.my-huanying {
  height: 70px;
  font-size: 40px;
}
.my-continue {
  height: 30px;
  font-size: 24px;
  line-height: 30px;
}
.keep-huiyuan {
  height: 60px;
  background: purple;
  position: relative;
}
.keep-huiyuan p:nth-child(1) {
  text-indent: 16px;
  color: yellowgreen;
  padding: 6px;
}
.keep-huiyuan p:nth-child(2) {
  text-indent: 16px;
  color: yellowgreen;
}
.lijikaitong {
  height: 24px;
  border-radius: 10px;
  width: 70px;
  position: absolute;
  top: 20px;
  right: 10px;
  background: yellowgreen;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
}
.my-shujuall {
  height: 100px;
}
.my-shuju {
  width: 177px;
  margin-right: 10px;
  background: gray;
  height: 100px;
  float: left;
}
.my-kecheng {
  height: 160px;
  background: grey;
  margin-top: 4px;
}
.my-shoucangkecheng {
  width: 50px;
  height: 50px;
  float: left;
}
.my-shoucang {
  float: left;
}
.my-kecheng1 {
  height: 50px;
  margin-bottom: 10px;
}
</style>