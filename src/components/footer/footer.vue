<!--  -->
<template>
  <div id="footer">
    <ul>
      <router-link to="/pagehome" tag="li">
        <van-icon name="label" />
        <p>首页</p>
      </router-link>
      <router-link to="/plan" tag="li">
        <van-icon name="todo-list" />
        <p>计划</p>
      </router-link>
      <router-link to="/motion" tag="li">
        <van-icon name="friends" />
        <p>社区</p>
      </router-link>
      <router-link to="/shopping" tag="li">
        <van-icon name="bag" />
        <p>商城</p>
      </router-link>
      <router-link to="/my" tag="li">
        <van-icon name="manager" />
        <p>我的</p>
      </router-link>
    </ul>
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
    return {};
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
#footer {
  width: 100%;
  height: 50px;
  background: white;
  border-top: 2px #ebe8e3 solid;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
}
#footer ul {
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
}
#footer ul li {
  flex: 1;
  height: 40px;
}
#footer ul li.active {
  color: #f03d37;
}
#footer ul i {
  font-size: 20px;
}
#footer ul p {
  font-size: 12px;
  line-height: 18px;
}
</style>