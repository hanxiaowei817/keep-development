<!--  -->
<template>
  <div class="shopping">
    <Header></Header>
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
              src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2761424134,4196129814&fm=26&gp=0.jpg"
              alt=""
            />
          </dt>
          <dd>￥20 <del>￥19999</del></dd>
        </dl>
        <dl>
          <dt>
            <img
              src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2171053430,3437009484&fm=26&gp=0.jpg"
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
              src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3567045420,2464869570&fm=26&gp=0.jpg"
              alt=""
            />
          </dt>
          <dd>￥20 <del>￥199</del></dd>
        </dl>
        <dl>
          <dt>
            <img
              src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2953153701,2003217363&fm=26&gp=0.jpg"
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
              src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3217228244,3996885929&fm=15&gp=0.jpg"
              alt=""
            />
          </dt>
          <dd>￥20 <del>￥199</del></dd>
        </dl>
        <dl>
          <dt>
            <img
              src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3419714950,1840670010&fm=26&gp=0.jpg"
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
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2609405578,1076414391&fm=26&gp=0.jpg"
              alt=""
            />
          </dt>
          <dd>￥20 <del>￥199</del></dd>
        </dl>
        <dl>
          <dt>
            <img
              src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=353517405,2504196192&fm=26&gp=0.jpg"
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
    <!-- 列表区域 -->
    <ul
      class="infinite-list movde"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="0"
    >
      <li
        class="infinite-list-item"
        v-for="itme in songs"
        :key="itme.id"
        @click="toChild(itme.pid)"
      >
        <img :src="itme.pimg" alt="" />
        <p><span>满减</span>{{ itme.pname }}</p>
        <p class="price">￥{{ itme.pprice }}<del>￥99</del></p>
      </li>
    </ul>

    <div v-if="showloading" class="loding">加载中...</div>
    <div v-if="showmore" class="showmore">没有更多数据了...</div>

    <router-link to="/cart1">
      <span class="goods"><i class="el-icon-s-goods"></i></span>
    </router-link>

    <Footer></Footer>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
// import { getToken } from "../../utils/auth";
import axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    Header,
  },
  data() {
    //这里存放数据
    return {
      value: "",
      images: [
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3665546742,3479837807&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=201621336,1558706459&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2676080722,3166371197&fm=26&gp=0.jpg",
      ],
      songs: [], //电影列表
      time: 30 * 60 * 60 * 1000,
      showloading: false, //默认不显示，请求接口数据的时候显示，请求成功后隐藏
      loading: false,
      pagenume: 1, //默认页数
      pagesize: 10, //默认条数
      showmore: false, //控制没有更多字样产生
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //默认方法，会执行一次
    async loadMore() {
      // this.loading = true;
      this.showloading = true;
      const start = this.pagenume;
      const end = this.pagesize;
      const result = await axios.get(
        `http://jx.xuzhixiang.top/ap/api/allproductlist.php?pagesize=${end}&pagenum=${start}`
      );
      this.showloading = false;
      const list = result.data.data;
      this.songs = this.songs.concat(list);
      // console.log(this.songs);
      if (list.length < this.pagesize) {
        //如果list小于pagesize说明数据已经加载完了
        this.showmore = true; //没有更多数据，显示没有更多数据
      } else {
        this.pagenume = this.pagenume + 1;
        this.loading = false; //开关打开或关闭
      }
    },

    //跳转传参
    toChild(id) {
      this.$router.push({ path: `/child/${id}` });
      localStorage.setItem("pid", id);
      console.log(id);
      console.log(localStorage.setItem("pid", id));
      console.log(localStorage.getItem("pid"));
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // this.getGD();
    this.loadMore();
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
.loading {
  height: 52px;
  text-align: center;
  line-height: 50px;
  background: url("./ajax-loader.gif") no-repeat 10px conter;
  background-size: 22px 22px;
}
.showmore {
  height: 52px;
  line-height: 52px;
  text-align: center;
  color: red;
}
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
  height: 10rem;
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
  height: 5.5rem;
}
.van dl dd {
  font-size: 1rem;
  color: red;
}
.van dl dd del {
  font-size: 0.4rem;
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
  height: 11rem;
}
.movde li {
  width: 40%;
  height: 100%;
  float: left;
  margin: 1rem;
  background: rgb(238, 238, 237);
}
.movde img {
  width: 100%;
  height: 7rem;
}
.movde p {
  font-size: 0.8rem;
  margin: 0.3rem 0 0.3rem 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods {
  position: fixed;
  right: 1.3rem;
  top: 85%;
  width: 2.5rem;
  height: 2.5rem;
  background: red;
  border-radius: 50%;
  z-index: 333;
}
.el-icon-s-goods {
  font-size: 1.5rem;
  color: white;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
}

.movde li p span {
  display: inline-block;
  margin-right: 0.5rem;
  color: #fff;
  background: red;
  font-size: 0.5rem;
}
.price {
  font-size: 0.5rem;
  color: red;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.price del {
  color: gray;
  font-size: 1.5px;
}
</style>