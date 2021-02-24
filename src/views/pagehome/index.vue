<!--  -->
<template>
  <div class="">
    <Header></Header>
    <Footer></Footer>
    <!-- <van-sticky>
      <div>
        <h3 style="height: 40px; line-height: 40px; background: red">
          首页123
          <van-icon name="search" />
          <van-icon name="friends" />
        </h3>
      </div>
    </van-sticky> -->
    <!-- <van-tabs v-model="active">
      <van-tab title="关注">
        <p id="follow"></p>
      </van-tab>
      <van-tab title="动态">
        <p id="dynamic"></p>
      </van-tab>
      <van-tab title="圈子">
        <p id="circle"></p>
      </van-tab>
    </van-tabs> -->
    <!-- <div id="content">
      <div class="hot_swtich">
        <div class="movie_menu">
          <router-link to="/pagehome/recommend" class="hot_item"
            >推荐</router-link
          >
          <router-link to="/pagehome/member" class="hot_item">会员</router-link>
          <van-icon class="hot_item2" name="search" />
        </div>
      </div>
    </div> -->
    <van-tabs sticky animated>
      <van-tab
        v-for="item in list"
        :title="item.title"
        :key="item.index"
        :to="item.router"
      >
        <router-view></router-view>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    Header,
  },
  data() {
    //这里存放数据
    return {
      list: [
        { title: "推荐", router: "/pagehome/recommend" },
        { title: "会员", router: "/pagehome/member" },
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
<style scoped>
#follow {
  width: 100%;
  height: 500px;
  background: coral;
}
#dynamic {
  width: 100%;
  height: 500px;
  background: cornflowerblue;
}
#circle {
  width: 100%;
  height: 500px;
  background: crimson;
}
</style>