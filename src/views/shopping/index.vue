<!--  -->
<template>
  <div class="shopping">
    <van-sticky>
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </van-sticky>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(itme, index) in images" :key="index">
        <img :src="itme" alt="" />
      </van-swipe-item>
    </van-swipe>

    <van-grid>
      <van-grid-item icon="photo-o" text="家用智能" />
      <van-grid-item icon="photo-o" text="健康食品" />
      <van-grid-item icon="photo-o" text="运动手环" />
      <van-grid-item icon="photo-o" text="男女服饰" />
    </van-grid>
    <van-grid>
      <van-grid-item icon="photo-o" text="室内健身" />
      <van-grid-item icon="photo-o" text="户外跑步" />
      <van-grid-item icon="photo-o" text="运动护具" />
      <van-grid-item icon="photo-o" text="keep周边" />
    </van-grid>

    <!-- 倒计时 -->
    <div class="daoji">
      <van-count-down :time="time">
        <template #default="timeData"
          >限时秒杀：
          <span class="block">{{ timeData.hours }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.minutes }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
      <div class="van">
        <dl>
          <dt>
            <img
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=853373313,2651194444&fm=26&gp=0.jpg"
              alt=""
            />
          </dt>
          <dd>￥20 <del>￥199</del></dd>
        </dl>
        <dl>
          <dt>
            <img
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=853373313,2651194444&fm=26&gp=0.jpg"
              alt=""
            />
          </dt>
          <dd>￥20<del>￥199</del></dd>
        </dl>
      </div>
    </div>

    <div class="daoji daoji2">
      <p>新品情报局</p>
      <div class="van">
        <dl>
          <dt>
            <img
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=853373313,2651194444&fm=26&gp=0.jpg"
              alt=""
            />
          </dt>
          <dd>￥20 <del>￥199</del></dd>
        </dl>
        <dl>
          <dt>
            <img
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=853373313,2651194444&fm=26&gp=0.jpg"
              alt=""
            />
          </dt>
          <dd>￥20<del>￥199</del></dd>
        </dl>
      </div>
    </div>

    <!-- 倒计时 -->
    <div class="daoji">
      <p>拼团嗨购</p>
      <div class="van">
        <dl>
          <dt>
            <img
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=853373313,2651194444&fm=26&gp=0.jpg"
              alt=""
            />
          </dt>
          <dd>￥20 <del>￥199</del></dd>
        </dl>
        <dl>
          <dt>
            <img
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=853373313,2651194444&fm=26&gp=0.jpg"
              alt=""
            />
          </dt>
          <dd>￥20<del>￥199</del></dd>
        </dl>
      </div>
    </div>
    <div class="daoji daoji2">
      <p>会员专区</p>
      <div class="van">
        <dl>
          <dt>
            <img
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=853373313,2651194444&fm=26&gp=0.jpg"
              alt=""
            />
          </dt>
          <dd>￥20 <del>￥199</del></dd>
        </dl>
        <dl>
          <dt>
            <img
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=853373313,2651194444&fm=26&gp=0.jpg"
              alt=""
            />
          </dt>
          <dd>￥20<del>￥199</del></dd>
        </dl>
      </div>
    </div>
    <img
      class="logo"
      src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=963641137,2157786980&fm=26&gp=0.jpg"
      alt=""
    />
    <!-- 歌单区域 -->
    <ul class="movde">
      <li v-for="itme in songs" :key="itme.id" @click="toChild(itme.name)">
        <img :src="itme.coverImgUrl" alt="" />
        <p>{{ itme.name }}</p>
      </li>
    </ul>

    <span class="goods"><i class="el-icon-s-goods"></i></span>

    <Footer></Footer>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "../../components/footer/footer";
import axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
  },
  data() {
    //这里存放数据
    return {
      value: "",
      images: [
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3896601762,374333792&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3488147428,3962514625&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=831479040,1172852968&fm=26&gp=0.jpg",
      ],
      songs: [],
      time: 30 * 60 * 60 * 1000,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //获取歌单
    async getGD() {
      const result = await axios.get(
        "http://localhost:3000/user/playlist?uid=32953014"
      );
      console.log(result);
      this.songs = result.data.playlist;
    },
    //跳转传参
    toChild(id) {
      this.$router.push({ path: `/child/${id}` });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getGD();
  },
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
/* 轮播u图 */
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 200px;
}
/* 倒计时 */
.colon {
  display: inline-block;
  margin: 0 3px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 0.8rem;
  text-align: center;
  background-color: #ee0a24;
}
.daoji {
  width: 45%;
  height: 150px;
  margin-left: 1.2rem;
  margin-bottom: 0.5rem;
  float: left;
}
.daoji2 {
  margin-left: 0.6rem;
}
.daoji,
.daoji2 p {
  font-size: 0.8rem;
}
.van {
  margin-top: 0.5rem;
  width: 100%;
  height: 100%;
}
.van dl {
  width: 50%;
  height: 90%;
  float: left;
}
.van dl dt img {
  width: 85%;
  height: 85%;
}
.van dl dd {
  font-size: 1rem;
  color: red;
}
.van dl dd del {
  font-size: 0.5rem;
  color: gray;
}
.hotlist-banner {
  overflow: hidden;
  width: 100%;
  height: 40rem;
  background: red;
}
.hotlist-banner .hotlist {
  width: 100%;
  height: 30%;
}
.hotlist img {
  width: 100%;
  height: 6rem;
}
.equipment h3 {
  font-size: 0.7rem;
  margin-top: 2.2rem;
}
.equipment p {
  font-size: 0.4rem;
}
.hotlist .equipment dl {
  width: 20%;
  height: 5rem;
  float: left;
  margin-left: 0.5rem;
}

.hotlist .equipment img {
  width: 100%;
  height: 80%;
}
.logo {
  width: 100%;
  height: 8rem;
}
.movde {
  width: 100%;
  height: 7rem;
}
.movde li {
  width: 40%;
  float: left;
  margin: 1rem;
}
.movde img {
  width: 100%;
  height: 7rem;
}
.movde p {
  font-size: 0.8rem;
}
.goods {
  position: fixed;
  right: 1.3rem;
  top: 44rem;
  width: 2.5rem;
  height: 2.5rem;
  background: yellowgreen;
  border-radius: 50%;
}
.el-icon-s-goods {
  font-size: 1.5rem;
  color: white;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
}
</style>