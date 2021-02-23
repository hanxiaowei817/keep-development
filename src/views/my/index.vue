<!--  -->
<template>
  <div id="my" @click="first">
    <div id="content">
      <div class="login_body">
        <!-- 主页面 -->
        <div>
          <div class="my-header">
            <van-icon name="coupon-o" size="30" @click.stop="myList" />
            <van-icon name="smile-o" size="30" class="smile-o" />
            <van-icon name="envelop-o" badge="43" size="30" />
          </div>
          <br />
          <br />
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
              <p>运动数据<van-icon name="arrow" size="" class="arrow" /></p>
              <p>总运动</p>
              <p>337分钟</p>
              <p>本周消耗0千卡</p>
            </div>
            <div class="my-shuju">
              <p>健康数据 <van-icon name="arrow" size="" class="arrow" /></p>
              <p>体重</p>
              <p>55kg</p>
              <p>上次记录181天前</p>
            </div>
          </div>
          <div class="my-kecheng">
            <div class="my-kechengheader">
              <span class="my-kechengtext">我的课程</span>
              <van-icon name="more-o" size="30" class="more-o" />
            </div>
            <br />
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
          <div class="my-footerall">
            <div class="my-footerheader">
              <div class="my-footer1">
                <p class="footericon">
                  <van-icon
                    name="comment-o"
                    size="40"
                    color="white"
                    class="comment-o"
                  />
                </p>
                <p>我的计划</p>
              </div>
              <div class="my-footer1">
                <p class="footericon">
                  <van-icon
                    name="bag-o"
                    size="40"
                    color="white"
                    class="comment-o"
                  />
                </p>
                <p>已购课程</p>
              </div>
              <div class="my-footer1">
                <p class="footericon">
                  <van-icon
                    name="down"
                    size="40"
                    color="white"
                    class="comment-o"
                  />
                </p>
                <p>下载的课</p>
              </div>
            </div>

            <mt-cell
              title="退出登录"
              is-link
              value="退出"
              @click.native="loginout"
              class="loginout"
            >
            </mt-cell>
          </div>

          <Footer></Footer>
        </div>
        <router-view></router-view>
      </div>
    </div>

    <!-- 侧边栏 -->
    <div v-show="show" class="my-left" @click.stop>
      <div>
        <div>
          <p class="leftHeader">尊敬的客户</p>
        </div>
        <div>
          <p class="leftActive">活动中心<van-icon name="arrow" /></p>
          <ul class="leftList">
            <li><van-icon name="location-o" />我的kg</li>
            <li><van-icon name="like-o" />我的收藏</li>
            <li><van-icon name="star-o" />草稿箱</li>
          </ul>
          <ul class="leftList">
            <li><van-icon name="location-o" />我的钱包</li>
            <li><van-icon name="like-o" />我的订单</li>
            <li><van-icon name="star-o" />购物车</li>
            <li><van-icon name="star-o" />卡路里币</li>
          </ul>
          <ul class="leftList">
            <li><van-icon name="location-o" />智能硬件</li>
            <li><van-icon name="like-o" />keepland</li>
          </ul>
          <ul class="leftList">
            <li><van-icon name="location-o" />饮食工具</li>
            <li><van-icon name="like-o" />分类菜谱</li>
          </ul>
          <ul class="leftList">
            <li><van-icon name="location-o" />身体测试</li>
            <li><van-icon name="like-o" />难度测试</li>
          </ul>
          <ul class="leftList">
            <li><van-icon name="location-o" />我的目标</li>
            <li><van-icon name="like-o" />卡路里银行</li>
          </ul>
        </div>

        <div class="leftFooter">
          <span><van-icon name="phone-circle-o" />帮助中心</span>
          <span style="margin-left: 40px"
            ><van-icon name="discount" />设置</span
          >
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "../../components/footer/footer";
import {
  setToken,
  getToken,
  removeToken,
  validateUsername,
  validatePass,
} from "../../utils/auth";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
  },
  data() {
    //这里存放数据
    return {
      isLogin: getToken() || "",
      activeKey: 0,
      show: false, //先让侧边栏 不显示
      ruleForm: {
        pass: "",
      },
      rules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
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
    loginout() {
      removeToken();
      this.$router.push({
        path: "/login",
      });
    },
    myList() {
      this.show = true; //点击icon 让侧边栏显示
    },
    submitForm(ruleForm) {
      console.log(this.$refs);
      this.$refs[ruleForm].validate((valid) => {
        console.log(valid);
        if (valid) {
          alert("submit!");
          setToken("获取到token");
          this.isLogin = true; //登录成功，让登录页面消失，显示主页面
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(ruleForm) {
      this.$refs[ruleForm].resetFields();
    },

    first() {
      this.show = false; //点击主页面，让侧边栏隐藏，做了阻止冒泡
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
.arrow {
  margin-left: 50px;
}
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
  height: 50px;
  position: fixed;
  top: 0px;
  left: 0;
  margin: 5px;
  margin-top: 10px;
}
.smile-o {
  margin-left: 260px;
  margin-right: 6px;
}

.my-huanying {
  height: 50px;
  font-size: 30px;
  margin-left: 5px;
  padding-top: 10px;
  line-height: 50px;
  font-weight: 900;
}
.my-continue {
  height: 30px;
  font-size: 22px;
  line-height: 30px;
  margin-left: 5px;
  padding-top: 10px;
  padding-bottom: 5px;
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
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
}
.my-shuju {
  width: 160px;
  margin: 10px 5px;
  background: snow;
  height: 100px;
}
.my-shuju p {
  margin-left: 5px;
  margin-bottom: 3px;
}
.my-kecheng {
  height: 270px;
  background: snow;
  margin: 4px 0px;
}
.my-shoucangkecheng {
  width: 50px;
  height: 50px;
  float: left;
}
.my-shoucang {
  float: left;
}
.my-shoucang p {
  margin-left: 10px;
}
.my-shoucang p:nth-child(1) {
  margin-bottom: 5px;
}
.my-kechengheader {
  height: 60px;
  margin-left: 5px;
}
.my-kechengtext {
  font-size: 24px;
  font-weight: 900;
  line-height: 60px;
}
.more-o {
  margin-left: 230px;
  line-height: 60px;
}
.my-kecheng1 {
  height: 50px;
  margin: 10px 5px;
}

.my-footerall {
  height: 140px;
  margin: 5px;
  background: snow;
  margin-bottom: 50px;
}
.my-footerheader {
  display: flex;
  justify-content: space-between;
}
.footericon {
  width: 60px;
  height: 60px;
  background: springgreen;
  text-align: center;
  border-radius: 50%;
  margin-left: 10px;
}
.my-footer1 {
  width: 80px;
  height: 90px;
  text-align: center;
  float: left;
}
.comment-o {
  margin-top: 10px;
}
.loginout {
  width: 375px;
  height: 40px;
  background: #e54847;
}
.my-left {
  width: 280px;
  position: absolute;
  top: 0;
  left: 0;
}
.leftList {
  width: 280px;
  border-bottom: solid 1px;
  background: gainsboro;
}
.leftList li {
  height: 60px;
  line-height: 60px;
  margin-left: 30px;
}
.leftHeader {
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 20px;
  font-weight: 900;
  line-height: 50px;
  background: ghostwhite;
  width: 280px;
}
.leftActive {
  margin-top: 50px;
  width: 280px;
  font-size: 20px;
  background: fuchsia;
  text-indent: 30px;
  height: 40px;
  border-radius: 20px;
  line-height: 40px;
}
.leftFooter {
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  line-height: 50px;
  background: ghostwhite;
  width: 280px;
}
.regitershow {
  position: absolute;
  top: 20px;
  left: 0;
}
.loginandregister {
  padding-top: 20px;
  height: 300px;
}
</style>