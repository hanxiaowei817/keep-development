<!--  -->
<template>
  <div class="art">
    <router-link to="/child/:id" tag="li" class="nav">
      <van-nav-bar title="购物车" left-text="返回" left-arrow> </van-nav-bar>
    </router-link>

    <!-- 购物车列表 -->
    <ul>
      <li v-for="itme in songs" :key="itme.id">
        <img :src="itme.pimg" alt="" />
        <p class="name">{{ itme.pname }}</p>
        <p class="price">￥{{ itme.pprice }}<del>￥99</del></p>
        <el-input-number class="shu" v-model="itme.pnum"></el-input-number>
      </li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import axios from "axios";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      songs: [],
      // num: 1,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async getGD() {
      //获取商品id
      const pid = localStorage.getItem("pid");
      console.log(pid);
      const result = await axios.get(
        ` http://jx.xuzhixiang.top/ap/api/cart-list.php?id=1`
      );
      console.log(result);
      this.songs = result.data.data;
      console.log(this.songs);
    },

    //计数
    // handleChange(value) {
    //   console.log(value);
    // },
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
<style scoped>
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 2.9rem;
  border-bottom: 1px solid rgb(216, 213, 213);
}
ul li {
  width: 100%;
  height: 10rem;
  background: rgb(247, 244, 64);
  margin: 0.5rem 0;
  overflow: hidden;
  position: relative;
}
ul li:nth-child(1) {
  margin-top: 3rem;
}
ul li img {
  width: 9rem;
  margin-top: 1rem;
  float: left;
  padding: 0.5rem;
}
.name {
  float: left;
  margin-top: 1rem;
  width: 12.4rem;
}
.price {
  float: left;
  width: 13.4rem;
  position: absolute;
  bottom: 1rem;
  left: 10rem;
  font-size: 1rem;
  color: rgb(149, 248, 1);
}
.price del {
  font-size: 0.5rem;
  margin-left: 0.4rem;
  color: gray;
}

.shu {
  position: absolute;
  top: 40%;
  right: 10%;
}
</style>