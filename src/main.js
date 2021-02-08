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
  Sidebar, SidebarItem
} from 'vant';


Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Search);
Vue.use(Sticky);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(CountDown);
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

// 引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


Vue.use(MintUI)


Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  //注册 测试测试测试测试
  router
}).$mount('#app')