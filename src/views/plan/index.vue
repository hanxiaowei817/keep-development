<!--  -->
<template>
  <div id="external">
    <van-button round type="primary" id="plan">免费获取计划</van-button>

    <div class="head">
      <h3>训练计划</h3>
      <h3>高效达成减脂目标</h3>
      <ul>
        <li>多种训练计划</li>
        <li>饮食记录与分析</li>
      </ul>
    </div>

    <p>不知道该 <span>练什么</span> ? <span>练什么</span> ?</p>
    <p>锻炼很久却依然 <span>没有效果</span> ?</p>
    <p>总是 <span>无法坚持</span> 运动?</p>
    <div id="problem">
      <h3>训练计划+饮食指导</h3>
      <h3>帮你解决以上问题</h3>
    </div>
    <div id="evaluate">
      <p><span>2,000,000+</span>用户已使用</p>
      <p>真实体验，真实评价</p>
    </div>
    <!-- 轮播图 -->
    <van-swipe id="Carousel" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <div id="diet">
      <p>饮食记录与分析工具</p>

      <div id="diet-b">
        <div id="diet-b-1">
          <p id="diet-1">饮食记录</p>
          <p id="diet-2">饮食分析</p>
        </div>
        <ul id="diet-l">
          <li>海量食物库</li>
          <li>拍照识别记录</li>
          <li>三餐热量统计</li>
        </ul>

        <ul id="diet-r">
          <li>餐前饮食建议</li>
          <li>热量、健康评分</li>
          <li>专业饮食分析</li>
        </ul>
      </div>
    </div>
    <van-grid id="layout">
      <van-grid-item icon="manager-o" text="覆盖超过1万常见食物" />
      <span class="jia">+</span>
      <van-grid-item icon="eye-o" text="支持拍照记录饮食内容" />
    </van-grid>

    <van-grid id="layout">
      <van-grid-item icon="font-o" text="热量统计与评分" />
      <span class="jia">+</span>
      <van-grid-item icon="comment-o" text="每餐饮食建议" />
    </van-grid>

    <div id="diet">
      <p>两种训练计划</p>

      <div id="diet-b">
        <div id="diet-b-1">
          <p id="diet-1">个性全身计划</p>
          <p id="diet-2">部位突破计划</p>
        </div>
        <ul id="diet-l">
          <li>个性制定全身计划</li>
          <li>入门快</li>
          <li>根据效果动态调整</li>
        </ul>

        <ul id="diet-r">
          <li>针对重点</li>
          <li>见效快</li>
          <li>专业人士科学编排</li>
        </ul>
      </div>
    </div>

    <van-grid id="layout">
      <van-grid-item icon="back-top" text="4-8周训练循环渐进" />
      <span class="jia">+</span>
      <van-grid-item icon="points" text="每日数据反馈" />
    </van-grid>

    <van-grid id="layout">
      <van-grid-item icon="label-o" text="每天2节会员专属课程" />
      <span class="jia">+</span>
      <van-grid-item icon="pause-circle-o" text="专属视频讲解健身饮食知识" />
    </van-grid>

    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>

    <div>1</div>

    <div>1</div>
    <div>1</div>
    <div>1</div>

    <Footer></Footer>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "../../components/footer/footer";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
  },
  data() {
    //这里存放数据
    return {
      images: [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
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
<style  scoped>
/* 轮播图 */
#Carousel img {
  width: 100%;
  height: 100%;
}
/* 按钮 */
#plan {
  width: 300px;
  height: 70px;
  font-size: 20px;
  color: rgb(247, 246, 246);
  position: fixed;
  left: 30px;
  top: 530px;
  z-index: 999;
}
/* 头部 */
.head {
  width: 100%;
  height: 250px;
  background: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcrawl.nosdn.127.net%2Fb0db45d24efc50b53d35beb2d4cc465e.jpg&refer=http%3A%2F%2Fcrawl.nosdn.127.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615271255&t=65db3071ebde8da94e51d5c1f3f2d688)
    no-repeat;
  background-size: 100%;
  color: rgb(249, 250, 248);
  overflow: hidden;
}
.head li {
  text-indent: 40px;
  margin-top: 10px;
}
h3 {
  font-weight: 100;
  font-size: 26px;
  text-indent: 20px;
  margin-top: 10px;
}
p {
  text-align: center;
}
p span {
  font-size: 24px;
  color: rgb(4, 159, 248);
}
#problem {
  text-align: center;
  margin-top: 30px;
}
#problem h3 {
  font-weight: 600;
  color: rgb(59, 58, 58);
}
#evaluate {
  margin-top: 20px;
}
#diet {
  margin-top: 100px;
}
#diet p {
  font-size: 22px;
  font-weight: 600;
}
#diet-b {
  width: 300px;
  height: 200px;
  background: rgb(250, 222, 248);
  margin: 30px auto;
  overflow: hidden;
}
#diet-b-1 {
  margin-top: 20px;
  color: rgb(247, 149, 214);
}
#diet-1 {
  width: 150px;
  float: left;
  text-align: center;
}
#diet-l {
  width: 150px;
  float: left;
  text-align: center;
  margin-top: 40px;
}
#diet-l li,
#diet-r li {
  line-height: 35px;
}
#diet-r {
  width: 150px;
  float: right;
  text-align: center;
  margin-top: 40px;
}
.jia {
  font-size: 40px;
  color: rgb(126, 83, 243);
  margin-top: 20px;
}
#layout {
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 20px;
}
</style>