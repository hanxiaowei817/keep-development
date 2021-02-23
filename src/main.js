import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// import axios from 'axios'

import {
  Search,
  Sticky,
  Grid,
  GridItem,
  Swipe,
  SwipeItem,
  CountDown,
  Sidebar,
  SidebarItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Sku,
  Dialog,
  Toast,
  SwipeCell,
  SubmitBar,
  IndexBar,
  IndexAnchor,
  Image,
  Lazyload,
  Card,
  Tag,
  NoticeBar
} from 'vant';
// 引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import {
  Cell,
  InfiniteScroll
} from 'mint-ui';
Vue.use(InfiniteScroll);

Vue.component(Cell.name, Cell);


Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Search);
Vue.use(Sticky);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(CountDown);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Sku);
Vue.use(SubmitBar);
Vue.use(Dialog);
Vue.use(Toast);
Vue.use(SwipeCell);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Image);
Vue.use(Lazyload, {
  lazyComponent: true,
});
Vue.use(Card);
Vue.use(Tag);
Vue.use(NoticeBar);
import 'vant/lib/search/style';
import 'vant/lib/sticky/style';

//引入button
import 'vant/lib/button/style';
import {
  Button
} from 'vant';
Vue.use(Button);
//引入icon
import 'vant/lib/icon/style';
import {
  Icon
} from 'vant';
Vue.use(Icon);

//标签页
import 'vant/lib/tab/style';
import 'vant/lib/tabs/style';
import {
  Tab,
  Tabs
} from 'vant';
Vue.use(Tab);
Vue.use(Tabs);
//
import 'vant/lib/nav-bar/style';
import {
  NavBar
} from 'vant';
Vue.use(NavBar);




Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  //注册 测试测试测试测试
  router
}).$mount('#app')