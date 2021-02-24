<!--  -->
<template>
  <div id="content" class="">
    <el-carousel :interval="4000" type="card" height="140px">
      <el-carousel-item v-for="item in 6" :key="item">
        <!-- <h3 class="medium">{{ item }}</h3> -->
      </el-carousel-item>
    </el-carousel>
    <!-- <div class="hot_swtich">
      <div class="movie_menu2">
        <div class="hot_item">适合你的计划</div>
        <div class="hot_item2">
          <van-button round size="small" @click="find">查看更多</van-button>
        </div>
      </div>
    </div> -->
    <!-- <img
      v-for="(img, index) in imageList"
      v-lazy="img"
      :key="index"
      height="150"  
      width="95%"
      id="imgList"
    /> -->
    <div class="hot_swtich2">
      <div class="movie_menu2 movie_menu3">
        <div class="hot_item">会员福利</div>
        <div class="hot_item2">
          <van-button round size="small" @click="find">查看更多</van-button>
        </div>
      </div>
    </div>
    <div class="rec">
      <div class="recs">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.16pic.com%2F00%2F52%2F95%2F16pic_5295526_b.jpg&refer=http%3A%2F%2Fpic.16pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616672172&t=b0c46afe0f5abe5c29004bdeace07a63"
          alt=""
        />
        <p>领8元抑菌洗手液立减劵</p>
      </div>
      <div class="recs">
        <img
          src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3638330220,2476236932&fm=26&gp=0.jpg"
          alt=""
        />
        <p>领蒙牛礼盒20...</p>
      </div>
      <div class="recs">
        <img
          src="https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/54fbb2fb43166d22fa0458254d2309f79052d214.jpg"
          alt=""
        />
        <p>旺仔牛奶，你值得拥有</p>
      </div>
      <div class="recs">
        <img
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3671211868,1174814700&fm=26&gp=0.jpg"
          alt=""
        />
        <p>不是每一种牛奶都叫特仑苏</p>
      </div>
    </div>
    <div class="hot_swtich2">
      <div class="movie_menu2 movie_menu3">
        <div class="hot_item">会员特权</div>
        <div class="hot_item2">
          <van-button round size="small" @click="find">查看更多</van-button>
        </div>
      </div>
    </div>
    <div class="grid">
      <!-- <van-grid icon-size="20px" class="iconGrid">
        <van-grid-item icon="search" text="找课程" />
        <van-grid-item icon="fire-o" text="全身减脂" />
        <van-grid-item icon="live" text="直播课" />
        <van-grid-item icon="audio" text="音乐" />
        <van-grid-item icon="search" text="找课程" />
        <van-grid-item icon="fire-o" text="全身减脂" />
        <van-grid-item icon="live" text="直播课" />
        <van-grid-item icon="audio" text="音乐" />
        <van-grid-item icon="search" text="找课程" />
        <van-grid-item icon="fire-o" text="全身减脂" />
        <van-grid-item icon="live" text="直播课" />
        <van-grid-item icon="audio" text="音乐" />
      </van-grid> -->
      <van-grid :border="false" class="iconGrid2">
        <van-grid-item>
          <van-image
            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=562297361,1226733042&fm=26&gp=0.jpg"
          />
          <p>直播课</p>
        </van-grid-item>
        <van-grid-item>
          <van-image
            src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2632230286,1745963419&fm=26&gp=0.jpg"
          />
          <p>饮食工具</p>
        </van-grid-item>
        <van-grid-item>
          <van-image
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1608914161,997531567&fm=26&gp=0.jpg"
          />
          <p>会员福利</p>
        </van-grid-item>
        <van-grid-item>
          <van-image
            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=170877876,1564819643&fm=26&gp=0.jpg"
          />
          <p>会员专属</p>
        </van-grid-item>
        <van-grid-item>
          <van-image
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F04%2F06%2Fe8a1f32d72fb2167148a3fc8f0d4bc41.jpg&refer=http%3A%2F%2Fku.90sjimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616676102&t=3406bab3857f2192806d7b992681f1b7"
          />
          <p>训练计划</p>
        </van-grid-item>
        <van-grid-item>
          <van-image
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=580404059,1609376314&fm=26&gp=0.jpg"
          />
          <p>运动器材</p>
        </van-grid-item>
      </van-grid>
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
      // show: false,
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
/* .el-carousel {
  margin-top: 10px;
} */
.el-carousel__item:nth-child(1n) {
  background: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg01.feiniu.com%2FC%2Fshow%2Fdetail%2Fimage%2F20150727%2Fe8576a37d377b5018adc11a630d0f5fd.jpg&refer=http%3A%2F%2Fimg01.feiniu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616674902&t=00e84075854ca88a43edadee60718c5a);
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
.rec {
  /* padding: 0 20px; */
  background: ghostwhite;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.recs {
  width: 46%;
  height: 120px;
  margin: 2px 0;
}
.recs img {
  width: 100%;
  height: 85px;
}
.recs p {
  font-size: 13px;
  font-weight: 700;
  line-height: 25px;
  font-family: "新宋体";
  color: dimgray;
}
.grid {
  width: 100%;
  margin-bottom: 50px;
  overflow-x: auto;
}
.iconGrid {
  display: flex;
  width: 230%;
  flex-wrap: nowrap;
}
.iconGrid2 {
  display: flex;
  width: 150%;
  flex-wrap: nowrap;
}
.iconGrid2 p {
  font-size: 14px;
  /* color: black; */
  font-family: "仿宋体";
  font-weight: 700;
}
.van-grid-item__content {
  width: 50px;
}
/* 遮罩层 */
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>