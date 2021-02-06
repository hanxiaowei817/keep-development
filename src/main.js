import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from './router'

Vue.config.productionTip = false

import {
  Search,
  Sticky,
  Grid,
  GridItem,
  Swipe,
  SwipeItem,
  CountDown,
} from 'vant';

Vue.use(Search);
Vue.use(Sticky);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(CountDown);
import 'vant/lib/search/style';
import 'vant/lib/sticky/style';

new Vue({
  render: h => h(App),
  //注册 测试测试测试测试
  router
}).$mount('#app')