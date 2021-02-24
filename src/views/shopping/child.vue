<!--  -->
<template>
  <div class="child">
    <router-link to="/shopping" tag="li" class="nav">
      <van-nav-bar title="详情" left-text="返回" left-arrow> </van-nav-bar>
    </router-link>
    <!-- 列表区域 -->
    <ul>
      <li>
        <img :src="songs.pimg" alt="" />

        <p class="price">￥{{ songs.pprice }}</p>
        <p class="name">{{ songs.pname }}</p>
        <p class="details">
          精品细腻质感柔软,精品细腻质感柔软,精品细腻质感柔软,精品细腻质感柔软,
        </p>
        <p class="member">
          Keep 会员价<span
            >开通会员可省最高26元<van-icon class="arrow" name="arrow"
          /></span>
        </p>
        <p class="member1">
          活动<span>新人礼</span
          ><span>首单惊喜，必备神器低至19元<van-icon name="arrow" /></span>
        </p>
        <p class="member2">
          <span>加购价</span
          ><span
            >全场满￥219可在购物车换购热销商品<van-icon name="arrow"
          /></span>
        </p>
      </li>
    </ul>

    <!-- 底部 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <router-link to="/cart1" tag="li" class="nav">
        <van-goods-action-icon icon="shop-o" text="购物车" />
      </router-link>
      <!-- <el-button type="text" @click="open" class="open"> -->
      <van-goods-action-button
        color="#7232dd"
        type="danger"
        text="加入购物车"
        @click="GetAdd"
      />
      <!-- </el-button> -->
    </van-goods-action>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import Footer from "../../components/footer/footer";
import axios from "axios";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    // Footer,
  },
  data() {
    //这里存放数据
    return {
      pid: "",
      songs: [],
    };
  },

  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //商品详情
    async getGD() {
      //获取商品id
      const pid = localStorage.getItem("pid");
      console.log(pid);
      const result = await axios.get(
        `http://jx.xuzhixiang.top/ap/api/detail.php?id=${pid}`
      );
      // console.log(result);
      this.songs = result.data.data;
      console.log(this.songs);
      console.log(this.songs.pname);
      console.log(this.songs.pprice);
    },
    // 加入购物车
    async GetAdd() {
      const pidtow = localStorage.getItem("pid");
      console.log(pidtow);
      const gadd = await axios.get(
        ` http://jx.xuzhixiang.top/ap/api/add-product.php?uid=1&pid=${pidtow}&pnum=1`
      );
      console.log(gadd);
      if (gadd.status == 200) {
        alert(gadd.data.msg);
      } else {
        alert("商品信息错误，无法加入购物车");
      }
    },

    // open() {
    //   this.$confirm("确定将此商品加入到购物车当中吗?", "提示", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     type: "warning",
    //   })
    //     .then(() => {
    //       this.$message({
    //         type: "success",
    //         message: "添加成功!",
    //       });
    //     })
    //     .catch(() => {
    //       this.$message({
    //         type: "info",
    //         message: "已取消添加",
    //       });
    //     });
    // },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getGD();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    //获取id
    this.pid = this.$route.params.id;
    // console.log(this.pid);
  },
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
.nav .van-nav-bar {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
ul {
  margin-top: 3rem;
}
ul li img {
  width: 90%;
  margin: auto;
}
ul li .price {
  width: 85%;
  color: red;
  font-weight: 600;
  margin-left: 2rem;
  margin-top: 1.5rem;
}
ul li .name {
  width: 85%;
  font-weight: 500;
  margin-left: 2rem;
  margin-top: 0.5rem;
}
ul li .details {
  width: 85%;
  margin: auto;
  margin-left: 2rem;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: gray;
}
.member {
  height: 2rem;
  line-height: 2rem;
  border-top: 1px solid rgb(233, 232, 232);
  border-bottom: 1px solid rgb(233, 232, 232);
  margin-top: 1rem;
  text-indent: 2rem;
  color: rgb(255, 178, 77);
  font-size: 0.6rem;
}
.member span {
  float: right;
  /* padding-right: 2rem; */
}
.member span .arrow {
  padding-right: 2rem;
  text-indent: 0.3rem;
}
.member1 {
  width: 100%;
  height: 2rem;
  /* background: rgb(94, 240, 49); */
  position: relative;
  line-height: 2rem;
  font-size: 0.6rem;
  text-indent: 2rem;
  color: gray;
  border-bottom: 1px solid rgb(233, 232, 232);
}
.member1 span:nth-child(1) {
  background: red;
  margin-left: 1rem;
  display: inline-block;
  text-indent: 0rem;
  text-align: center;
  width: 3rem;
  line-height: normal;
  /* margin-right: 1.2rem; */
  color: white;
  font-weight: 600;
}
.member1 span:nth-child(2) {
  margin-left: 2rem;
}
.member1 .van-icon {
  float: left;
  line-height: 2rem;
  position: absolute;
  top: 0;
  right: 2rem;
}
.member2 {
  width: 100%;
  height: 2rem;
  /* background: rgb(94, 240, 49); */
  position: relative;
  line-height: 2rem;
  font-size: 0.6rem;
  color: gray;
  border-bottom: 1px solid rgb(233, 232, 232);
}
.member2 span:nth-child(1) {
  background: red;
  margin-left: 0.8rem;
  display: inline-block;
  margin-left: 2rem;
  text-align: center;
  width: 3rem;
  line-height: normal;
  /* margin-right: 1.2rem; */
  color: white;
  font-weight: 600;
}
.member2 span:nth-child(2) {
  margin-left: 2rem;
}
.member2 .van-icon {
  float: left;
  line-height: 2rem;
  position: absolute;
  top: 0;
  right: 2rem;
}
</style>