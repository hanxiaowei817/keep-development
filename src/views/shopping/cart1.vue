<!--  -->
<template>
  <div class="cart1">
    <div id="app">
      <router-link to="/child/:id" tag="li" class="nav">
        <van-nav-bar title="购物车" left-text="返回" left-arrow> </van-nav-bar>
      </router-link>

      <div class="shoppingMain">
        <div
          class="shoppingItem"
          v-for="(item, index) in shoppingList"
          :key="index"
        >
          <!--列表项-->
          <div
            class="selectCircle dan"
            :class="{ checked: item.isSelect }"
            @click="selectGoods(item)"
          ></div>
          <div class="shoppingImg">
            <img :src="item.pimg" alt="" />
          </div>
          <div class="itemRight">
            <p class="title">{{ item.pname }}</p>
            <!-- <p>{{ item.pprice }}</p> -->
            <div class="numAndMoney">
              <p>￥{{ item.pprice }}</p>
              <div class="numberControl">
                <a class="btn" @click="numDel(item, index)">-</a>
                <input type="text" v-model="item.pnum" readonly="readonly" />
                <a class="btn" @click="numAdd(item, index)">+</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottomMain">
        <!--底部固定栏-->
        <div
          class="selectCircle quan"
          :class="{ checked: allSelect }"
          @click="allGoodsSelect"
        ></div>
        <span style="padding: 10px">全选</span>
        <button class="bottombtn2" @click="delGoods">删除</button>
        <button class="bottombtn1" @click="buyGoods">
          ￥{{ sum }}&nbsp;结算
        </button>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import axios from "axios";
import Footer from "../../components/footer/footer";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
  },
  data() {
    //这里存放数据
    return {
      shoppingList: [],
      isSelect: false,
      sum: 0,
      allSelect: false,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async getGD() {
      const id = localStorage.getItem("uid");
      console.log(id);
      const result = await axios.get(
        `http://jx.xuzhixiang.top/ap/api/cart-list.php?id=${id}`
      );
      this.shoppingList = result.data.data;
      console.log(this.shoppingList);
    },
    selectGoods(item) {
      //商品单选选择方法
      item.isSelect = !item.isSelect; //改变选择状态
      this.allSelect = false;
      console.log(item.isSelect);

      if (item.isSelect == true) {
        this.sum = this.sum + parseInt(item.pprice) * item.pnum;
      } else {
        this.sum = this.sum - parseInt(item.pprice) * item.pnum;
      } //结算处商品总额计算
    },
    allGoodsSelect() {
      //全选商品方法
      // console.log(this.allSelect);
      this.allSelect = !this.allSelect; //改变选择状态
      if (this.allSelect == true) {
        this.sum = 0;
        for (let i = 0; i < this.shoppingList.length; i++) {
          this.shoppingList[i].isSelect = true;
          this.sum =
            this.sum +
            parseInt(this.shoppingList[i].pprice) *
              parseInt(this.shoppingList[i].pnum);
        }
      } else {
        for (let i = 0; i < this.shoppingList.length; i++) {
          this.shoppingList[i].isSelect = false;
          this.sum =
            this.sum -
            parseInt(this.shoppingList[i].pprice) *
              parseInt(this.shoppingList[i].pnum);
        }
      } //结算处商品总额计算
    },
    async numAdd(item) {
      //商品数量增加
      item.pnum++;
      //获取商品id
      console.log(item.pid);
      const id = localStorage.getItem("uid");
      console.log(id);
      const result = await axios.get(
        `http://jx.xuzhixiang.top/ap/api/cart-update-num.php?uid=${id}&pid=${item.pid}&pnum=${item.pnum}`
      );
      console.log(result);

      if (item.isSelect == true) {
        this.sum = this.sum + parseInt(item.pprice);
      } //已选择商品增加数量，需要增加总额
    },
    async numDel(item, index) {
      //商品数量减少
      item.pnum--;
      //获取商品id
      console.log(item.pid);
      const id = localStorage.getItem("uid");
      console.log(id);
      const result = await axios.get(
        `http://jx.xuzhixiang.top/ap/api/cart-update-num.php?uid=${id}&pid=${item.pid}&pnum=${item.pnum}`
      );
      console.log(result);

      if (item.isSelect == true) {
        this.sum = this.sum - parseInt(item.pprice);
      } //已选择商品减少数量，需要减少总额
      if (item.pnum < 1) {
        console.log(item.pid);
        this.shoppingList.splice(index, 1);
        const id = localStorage.getItem("uid");
        console.log(id);
        const result = await axios.get(
          `http://jx.xuzhixiang.top/ap/api/cart-delete.php?uid=${id}&pid=${item.pid}`
        );
        console.log(result);
      } //数量减少为0，需要删除对应数据
    },
    buyGoods() {
      //购买方法，这里只弹出提示所购买商品总额
      this.$dialog.alert({
        message: "购买成功,共花费" + this.sum + "元",
      });
      // alert("购买成功,共花费" + this.sum + "元");
    },
    async delGoods() {
      //删除商品方法
      this.sum = 0; //所选商品被删除，总额置0
      const id = localStorage.getItem("uid");
      console.log(id);
      for (var i = 0; i < this.shoppingList.length; i++) {
        if (this.shoppingList[i].isSelect) {
          console.log(this.shoppingList[i].pid);

          const result = await axios.get(
            `http://jx.xuzhixiang.top/ap/api/cart-delete.php?uid=${id}&pid=${this.shoppingList[i].pid}`
          );
          console.log(result);

          this.shoppingList.splice(i, 1);
          i--;
        }
      } //对所选商品进行删除操作
      if (this.allSelect) {
        this.shoppingList.splice(0, this.shoppingList.length);
        this.allSelect = false;
      } //全选商品后进行全部删除
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
body {
  margin: 0;
  padding: 0;
  background: #e0dada;
}
.nav {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
}
button {
  outline: none;
  border-color: transparent;
  box-shadow: none;
}
#app {
  margin: 0;
  padding: 0;
  width: 100%;
}
.shoppingMain {
  width: 100%;
  height: auto;
  margin-bottom: 70px;
}
.shoppingItem {
  width: 96%;
  margin-left: 2%;
  margin-bottom: 10px;
  background: #fff;
  border-radius: 5px;
  display: flex;
}
.shoppingItem:nth-child(1) {
  margin-top: 3rem;
}
.shoppingItem:last-child {
}
.selectCircle {
  width: 15px;
  height: 15px;
  border: 1px solid #a7a5a5;
  border-radius: 50%;
  margin: auto 0px auto 10px;
}
.shoppingImg {
  width: 100px;
  height: 100px;
  padding: 10px;
}
.shoppingImg img {
  height: 100%;
  width: 100%;
}
.itemRight {
  font-size: 10px;
  width: 200px;
}
.title {
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
  /* white-space: nowrap; */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 1rem 0;
}
.numAndMoney {
  display: flex;
}
input {
  width: 40px;
  height: 18px;
  margin: 10px;
  text-align: center;
}
.numberControl {
  position: absolute;
  margin: -0.5rem 0 0 0;
  right: 35px;
}
.numberControl input {
  height: 15px;
}
.bottomMain {
  position: fixed;
  width: 99%;
  height: 1.5rem;
  border: 1px #c0bfbf solid;
  border-bottom: none;
  border-left: none;
  border-right: none;
  bottom: 3rem;
  left: 0;
  background: #fff;
  display: flex;
  padding: 10px;
}
.bottomMain span {
  margin: -0.5rem 0 0 0;
}
.bottombtn1 {
  min-width: 80px;
  height: 30px;
  border: 15px;
  color: #fff;
  background-color: #e26411;
  font-size: 0.5rem;
  border-radius: 25px;
  margin: -2.8px 0 0 10px;
}
.bottombtn2 {
  width: 70px;
  height: 30px;
  font-size: 0.8rem;
  border: none;
  color: #fff;
  background-color: #cecac7;
  border-radius: 25px;
  margin: -3px 0 0 80px;
}
.checked {
  background: #e26411;
  border: 1px solid rgba(0, 0, 0, 0);
}
.bottomMain span {
  padding: 0;
  height: 100%;
  width: 3rem;
}
</style>