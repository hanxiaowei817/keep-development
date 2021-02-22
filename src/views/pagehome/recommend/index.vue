<!-- 
 -->
<template>
  <div class="">
    <van-swipe :autoplay="3000" height="200" id="swipe">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" height="100%" width="100%" />
      </van-swipe-item>
    </van-swipe>
    <van-grid icon-size="30px">
      <van-grid-item icon="search" text="找课程" />
      <van-grid-item icon="fire-o" text="全身减脂" />
      <van-grid-item icon="live" text="直播课" />
      <van-grid-item icon="audio" text="音乐" />
    </van-grid>
    <van-grid icon-size="30px">
      <van-grid-item to="/cart1" icon="cart" text="购物车" />
      <van-grid-item icon="setting" text="设置" />
      <van-grid-item icon="star" text="收藏" />
      <van-grid-item icon="bars" text="更多" />
    </van-grid>
    <van-card
      desc="keep官方课"
      title="跑后拉伸"
      thumb="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F05imgmini.eastday.com%2Fmobile%2F20181018%2F20181018232403_dfb15b02bc630af4aeedfa470334b23d_3.jpeg&refer=http%3A%2F%2F05imgmini.eastday.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616586631&t=27bfda84de1289a36651307c466b4c5b  "
    >
      <template #tags>
        <van-tag plain type="danger">热门</van-tag>
        <van-tag plain type="danger">5400</van-tag>
      </template>
      <template #footer>
        <van-button size="mini" @click="add">添加课程</van-button>
        <van-button size="mini">观看</van-button>
      </template>
    </van-card>
    <van-card
      desc="keep官方课"
      title="腹肌训练"
      thumb="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1812299540,381457769&fm=26&gp=0.jpg"
    >
      <template #tags>
        <van-tag plain type="danger">热门</van-tag>
        <van-tag plain type="danger">2750</van-tag>
      </template>
      <template #footer>
        <van-button size="mini" @click="add">添加课程</van-button>
        <van-button size="mini">观看</van-button>
      </template>
    </van-card>
    <van-card
      desc="keep官方课"
      title="腹肌强化"
      thumb="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fx0.ifengimg.com%2Fres%2F2020%2F16917B14A5A120CEF4A6C1FAB5EB2C6B3E9D5A17_size65_w1023_h682.jpeg&refer=http%3A%2F%2Fx0.ifengimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616586923&t=941fa3173aaa1884009c13d3de043d57 "
    >
      <template #tags>
        <van-tag plain type="danger">热门</van-tag>
        <van-tag plain type="danger">3400</van-tag>
      </template>
      <template #footer>
        <van-button size="mini" @click="add">添加课程</van-button>
        <van-button size="mini">观看</van-button>
      </template>
    </van-card>
    <img
      v-for="(img, index) in imageList"
      v-lazy="img"
      :key="index"
      height="200"
      width="95%"
      id="img"
    />
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
      images: [
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2814054145,2848210201&fm=26&gp=0.jpg",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg03.o2oteam.com%2Fwp-content%2Fuploads%2F2018%2F05%2F152661037194667500.jpg&refer=http%3A%2F%2Fimg03.o2oteam.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616477682&t=189863c5fad631e725f432ea3bb84491",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2932379107,1782139988&fm=26&gp=0.jpg",
      ],
      imageList: [
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=323660265,633030067&fm=26&gp=0.jpg",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20191225%2F186feed6fdd64eea98724554a2a62002.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616586065&t=4bed61724d89f0efb552dc057bcf6c8e",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1399277936,1957811708&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=318999306,3009880777&fm=26&gp=0.jpg",
      ],
      show: true,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    add() {
      this.$dialog
        .alert({
          // title: "标题",
          message: "添加成功",
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
<style  scoped>
#swipe {
  margin-top: 50px;
}
#img {
  margin: 10px auto;
}
</style>