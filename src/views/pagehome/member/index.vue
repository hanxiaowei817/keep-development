<!--  -->
<template>
  <div id="content" class="">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="hot_swtich">
      <div class="movie_menu2">
        <div class="hot_item">适合你的计划</div>
        <div class="hot_item2">
          <van-button round size="small" @click="find">查看更多</van-button>
        </div>
      </div>
    </div>
    <img
      v-for="(img, index) in imageList"
      v-lazy="img"
      :key="index"
      height="150"
      width="95%"
      id="imgList"
    />
    <div class="hot_swtich">
      <div class="movie_menu2 movie_menu3">
        <div class="hot_item">会员福利</div>
        <div class="hot_item2">
          <van-button round size="small" @click="find">查看更多</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      imageList: [
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=323660265,633030067&fm=26&gp=0.jpg",

        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1399277936,1957811708&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=318999306,3009880777&fm=26&gp=0.jpg",
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    find() {
      this.$dialog
        .alert({
          // title: "标题",
          message: "没有了~",
        })
        .then(() => {
          // on close
        });
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
/* .el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
} */
.el-carousel {
  margin-top: 10px;
}
.el-carousel__item:nth-child(1n) {
  background: url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2289105540,2340076539&fm=26&gp=0.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}

.el-carousel__item:nth-child(2n) {
  background-image: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F0%2F51c41352bfadd.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616640681&t=fcbb6bf2d3cb81476d184f327e6c4c70);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
</style>