<!-- 
 -->
<template>
  <div class="">
    <van-swipe :autoplay="3000" height="200">
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
      <van-grid-item to="/Cart" icon="cart" text="购物车" />
      <van-grid-item icon="setting" text="设置" />
      <van-grid-item icon="star" text="收藏" />
      <van-grid-item icon="bars" text="更多" />
    </van-grid>
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
<style lang='scss' scoped>
</style>