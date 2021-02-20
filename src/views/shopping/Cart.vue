<!--  -->
<template>
  <div class="art">
    <router-link to="/child/:id" tag="li" class="nav">
      <van-nav-bar title="购物车" left-text="返回" left-arrow> </van-nav-bar>
    </router-link>

    <!-- 购物车列表 -->
    <ul>
      <li v-for="itme in songs" :key="itme.id">
        <input type="checkbox" name="" id="" />
        <img :src="itme.pimg" alt="" />
        <p class="name">{{ itme.pname }}</p>
        <p class="num">
          <button class="jian">-</button>
          <span class="pnum">{{ itme.pnum }}</span>
          <button class="jia">+</button>
        </p>
        <p class="price">￥{{ itme.pprice }}<del>￥99</del></p>
      </li>
    </ul>
    <!-- 结算 -->
    <div class="">
      <p>
        总价:<span v-for="(itme, index) in songs" :key="index"
          ><br />
          {{ index }}--- {{ itme.pprice }}---{{ itme.pnum }} ---
          {{ (itme.price = Number(itme.pprice) * Number(itme.pnum)) }}
        </span>
      </p>

      <button>提交订单</button>
    </div>
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
      price: 0,
      sum: 0,
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
        `http://jx.xuzhixiang.top/ap/api/cart-list.php?id=1`
      );
      // console.log(result);
      this.songs = result.data.data;
      console.log(this.songs);
      let num = 0;
      for (let i = 0; i <= this.songs.length; i++) {
        const sun =
          parseFloat(this.songs[i].pprice) * parseInt(this.songs[i].pnum);
        console.log(sun);
        num += sun;
        console.log(num);
      }
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
<style scoped>
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 2.9rem;
  border-bottom: 1px solid rgb(216, 213, 213);
  z-index: 3;
}
ul li {
  width: 95%;
  height: 10rem;
  margin: auto;
  /* background: rgb(247, 244, 64); */
  border: 1px solid gold;
  margin: 0.5rem 0;
  padding-left: 1rem;
  overflow: hidden;
  position: relative;
}
ul li input {
  position: absolute;
  left: 0.25rem;
  top: 50%;
  width: 1rem;
  height: 1rem;
}
ul li:nth-child(1) {
  margin-top: 3rem;
}
ul li img {
  width: 8.5rem;
  margin: 1.2rem 0.5rem 0;
  float: left;
  padding: 0.5rem;
  border: 1px solid rgb(214, 214, 214);
}
.name {
  float: left;
  margin-top: 1rem;
  width: 9.4rem;
}
.price {
  float: left;
  width: 9.4rem;
  position: absolute;
  bottom: 1rem;
  left: 12rem;
  font-size: 1rem;
  color: rgb(149, 248, 1);
}
.price del {
  font-size: 0.5rem;
  margin-left: 0.4rem;
  color: gray;
}
.num {
  float: left;
  position: absolute;
  top: 50%;
  right: 20%;
}
.num .jian,
.num .jia {
  width: 1.5rem;
  height: 1.5rem;
  color: white;
  font-weight: 600;
  background: grey;
  border-radius: 50%;
  opacity: 0.5;
}
.num span {
  display: inline-block;
  margin: 0 0.6rem;
}
.settlement {
  width: 100%;
  height: 3rem;
  background: gold;
  position: fixed;
  bottom: 0;
  left: 0;
}
.settlement button {
  width: 30%;
  height: 100%;
  font-size: 1rem;
  color: #fff;
  border-radius: 15px;
  border: none;
  float: right;
  margin-right: 1rem;
  background: #eb4d1d;
}
.settlement p {
  float: left;
  line-height: 3rem;
  margin-left: 6rem;
}
.settlement p span {
  font-size: 1.5rem;
  color: red;
}
</style>