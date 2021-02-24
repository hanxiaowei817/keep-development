<!--  -->
<template>
  <div class="">
    <Footer></Footer>

    <div class="header">
      <van-tabs v-model="active" class="headtop">
        <van-tab title="关注">

          <!-- 动态部分 -->
          <!-- <van-cell title="单元格" is-link /> -->
          <div class="ranking" is-link >
            <b>本周运动排名</b>

            <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202008%2F13%2F20200813152423_wCHyn.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616672239&t=8d05d15fa40e64e613c7e9b9cca9d52a"
              alt="">
            <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202010%2F31%2F20201031163129_1840e.thumb.400_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616672239&t=365b614f0f58c60af594362c3b405f82"
              alt="">
            <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202008%2F26%2F20200826113745_UcxQK.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616672239&t=709b0dfbd7635addad56a417056fb764"
              alt="">
          </div>
          <div class="dynamic">
            <div class="dynamic-head">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1117037978,3561004881&fm=26&gp=0.jpg" alt="">
              <span>薇薇安</span>
              <p>4小时</p>
            </div>
            <div class="dynamic-main">
              <p>1</p>
            </div>
            <div class="dynamic-footer">
              <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=201917290,2516663893&fm=26&gp=0.jpg" alt="">
            </div>
            <div class="dynamic-fg">
              视频吧##
            </div>
          </div>
          <div class="Movemen-data">
            <div class="movemen">
              <van-icon name="fire"  color="#ee0a24"/>
              <span>完成<b>跑后拉伸</b>第356次</span>
            </div>
          </div>
          <div class="exercise-course">
            <div>
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3919557002,1478584835&fm=26&gp=0.jpg" alt="">
            </div>
            <div>
              <p><b>跑后拉伸</b></p>
            </div>
            <div>
              <p><span>K1零基础 6分钟</span></p>
            </div>
            
          </div>
          <div class="mayknow">
            
            <van-cell title="你可能想认识他们" is-link class="mayknow-nmd"/>
            <van-divider />
            <ul class="">
              <li>
                <van-card
                  desc="有可能认识的人"
                  title="东子EaMILE"
                  thumb="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2980445260,41238050&fm=26&gp=0.jpg"
                >
                  <template #footer>
                    <van-button size="mini">点赞11</van-button>
                    <van-button size="mini">关注</van-button>
                  </template>
                </van-card>
              </li>
              <li>
                <van-card
                  desc="附近的人"
                  title="惠子"
                  thumb="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg"
                >
                  <template #footer>
                    <van-button size="mini">点赞40</van-button>
                    <van-button size="mini">关注</van-button>
                  </template>
                </van-card>
              </li>
              <li>
                <van-card
                  desc="附近的人"
                  title="宋家乐"
                  thumb="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1870521716,857441283&fm=26&gp=0.jpg"
                >
                  <template #footer>
                    <van-button size="mini">点赞88</van-button>
                    <van-button size="mini">关注</van-button>
                  </template>
                </van-card>
              </li>
              <li>
                <van-card
                  desc="优品内容贡献者"
                  title="miss朱zhu"
                  thumb="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1456245851,2859541796&fm=26&gp=0.jpg"
                  class="personal-details">
                  <template #footer class="footer">
                    <van-button size="mini">点赞65</van-button>
                    <van-button size="mini">关注</van-button>
                  </template>
                </van-card>
              </li>
             
            </ul>
          </div>
        </van-tab>
        <van-tab title="动态">
          <div id="Individual">
            <div class="Individual-model">
              <div>
                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3112949958,3368392492&fm=11&gp=0.jpg" alt="">
                <div class="Individual-name">
                  <p><b>婷大仙儿--</b></p>
                  <p>5.1万人关注了她</p>
                </div>
                <div class="Individual-attention">
                  关注
                </div>
              </div>
            </div>
            <div class="van-multi-ellipsis--l2 Individual-text">
              这是一段最多显示两行的文字，多余的内容会被省略这是一段最多显示两行的文字，多余的内容会被省略这是一段最多显示两行的文字，多余的内容会被省略
            </div>
            <div class="Individual-img">
                <van-image
                  width="33%"
                  height="100px"
                  fit="contain"
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi1.sinaimg.cn%2FIT%2F2010%2F0419%2F201041993511.jpg&refer=http%3A%2F%2Fi1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616740093&t=36aa6fb453da10a3c9cc531aaa0b031c"
                />
                <van-image
                  width="33%"
                  height="100px"
                  fit="contain"
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi1.sinaimg.cn%2FIT%2F2010%2F0419%2F201041993511.jpg&refer=http%3A%2F%2Fi1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616740093&t=36aa6fb453da10a3c9cc531aaa0b031c"
                />
                <van-image
                  width="33%"
                  height="100px"
                  fit="contain"
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi1.sinaimg.cn%2FIT%2F2010%2F0419%2F201041993511.jpg&refer=http%3A%2F%2Fi1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616740093&t=36aa6fb453da10a3c9cc531aaa0b031c"
                />
            </div>
            <div class="Individual-give">
             <van-icon name="bullhorn-o" class="Individual-give1"/>
             <span>1.6万</span>
             <van-icon name="chat-o"  class="Individual-give2"/>
             <span>3552</span>
             <van-icon name="ellipsis"  class="Individual-give3"/>
            </div>
            
            


          </div>
        </van-tab>
        <van-tab title="朋友圈">
          <p id="circle">3</p>
        </van-tab>
      </van-tabs>
      <router-link to="/appfriends">
        <van-icon name="friends-o" class="appfriends" />
      </router-link>
      <router-link to="/searchBox">
        <van-icon name="search" class="searchBox" />
      </router-link>
    </div>

  </div>

</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Footer from "../../../components/footer/footer";
import Vue from 'vue';
import { Cell, CellGroup } from 'vant';
import { Divider } from 'vant';

Vue.use(Divider);
// 引入全部样式
// import 'vant/lib/index.less';

// 引入单个组件样式
// import 'vant/lib/button/style/less';

Vue.use(Cell);
Vue.use(CellGroup);


export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
  },
  data() {
    //这里存放数据
    return {
      active:"",
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
*{
  margin: 0;
  padding: 0;
}

.headtop {
  width: 70%;
  height: 50px;
  float: left;
  font-size: 18px;
}
.appfriends {
  margin-left: 30px;
  font-size: 21px;
  line-height: 50px;
}
.searchBox {
  margin-left: 10px;
  margin-top: 12px;
  font-size: 21px;
}
.ranking,
.dynamic,
.Movemen-data,
.exercise-course ,
#Individual,
.mayknow{
  width: 143%;
}

.ranking {
  height: 50px;
  background-color: rgb(243, 243, 243);
  margin-top: 10px;
  line-height: 50px;
  overflow: hidden;
}
.ranking b {
  margin-left: 20px;
}
.ranking img {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  /* float: right; */
  margin-top: 10px;
  margin-right: 10px;
  float: right;
}
.dynamic {
  min-height: 50px;
  background-color: #fff;
  margin-top: 10px;
  position: relative;
}
.dynamic-head img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  float: left;
  margin-left: 10px;
}
.dynamic-head span {
  float: left;
  margin-top: 5px;
  margin-left: 20px;
}
.dynamic-head p {
  position: absolute;
  top: 30px;
  left: 80px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
}
.dynamic-main {
  width: 100%;
  min-height: 30px;
  float: left;
  line-height: 30px;
}
.dynamic-main p {
  margin-left: 10px;
  margin-right: 10px;
}
.dynamic-footer {
  width: 100%;
  height: 300px;
}
.dynamic-footer img {
  width: 100%;
  height: 100%;
}
.dynamic-fg {
  max-width: 150px;
  height: 30px;
  background-color: rgb(223, 226, 230);
  /* float: left; */
  margin-top: 90px;
  line-height: 30px;
  margin-left: 10px;
  border-radius: 20px;
  text-align: center;
  color: rgb(66, 181, 216);
}
.Movemen-data {
  min-height: 30px;
  background-color: rgb(241, 243, 243);
}
.movemen {
  width: 98%;
  min-height: 50px;
  background-color: rgb(243, 243, 243);
  margin-left: 1%;
  line-height: 50px;
  color: rgb(118, 120, 121);
  margin-top: 10px;
}
.movemen span{
  margin-left: 10px;
}
.movemen b {
  margin-left: 10px;
  margin-right: 10px;
  color: rgb(7, 199, 199);
}
.exercise-course {
  min-height: 80px;
  background-color: rgb(243, 243, 243);
  margin-top: 10px;
  overflow: hidden;
}
.exercise-course img {
  width: 80px;
  height: 80px;
  float: left;
}
.exercise-course b{
  margin-top: 80px;
  margin-left: 10px;
}
.exercise-course span{
  margin-top: 80px;
  margin-left: 10px;
}
.exercise-course div:nth-of-type(2){
  margin-top: 10px;
}
.exercise-course div:nth-of-type(3) p{
  margin-top: 10px;
  color: rgb(134, 134, 134);
  font-size: 16px;
}
.mayknow{
  overflow: hidden;
  margin-top: 20px;
  min-height: 30px;
}

#Individual{
  /* width: 100%; */
  min-height: 40px;
  /* background-color: aqua; */
}
.Individual-model{
  width: 100%;
  min-height:40px;
  /* background-color: bisque; */
  overflow: hidden;
}
.Individual-model img{
  width: 50px;
  height: 50px;
  border-radius:50% ;
  margin-top: 10px;
  margin-left: 10px;
  float: left;

}
.Individual-name{
  min-width: 60px;
  height: 60px;
  margin-top: 10px;
  float: left;
  margin-left: 10px;
}
.Individual-name p:nth-of-type(2){
  opacity: .3;
  font-size: 12px;
}
.Individual-attention{
  width: 80px;
  height: 30px;
  /* background-color: blueviolet; */
  float: right;
  margin-top: 20px;
  margin-right: 20px;
  border-radius:20px ;
  text-align: center;
  line-height: 30px;
}
.Individual-img img{
  width: 100%;
  height: 300px;
}
.Individual-text{
  width: 90%;
  margin-left:7% ;

}
.Individual-give{
  width: 100%;
  height: 30px;
  /* background-color: brown; */
  line-height: 30px;
  /* margin-left: 10px; */
}
.Individual-give span{
  margin-left: 5px;
}
.Individual-give1{
  margin-left: 10px;
  margin-top: 5px;
}
.Individual-give2{
  margin-left: 10px;
  margin-top: 5px;
}
.Individual-give3{
  float: right;
  margin-right:20px ;
  margin-top: 5px;
}



</style>