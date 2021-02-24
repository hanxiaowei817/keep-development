<template>
    <div class="">
        <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft">
            <template #right>
                <van-icon name="search" size="18" />
            </template>
            </van-nav-bar>
        <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            input-align="center"
        />
    </div>
</template>

<script>
import Vue from 'vue';
import { Search,Toast,NavBar } from 'vant';

Vue.use(NavBar);
Vue.use(Toast);

Vue.use(Search);
export default {
    data(){
        return{
            value:""
        }
        
    },
    methods: {
        onClickLeft() {
            // Toast('返回')
        history.go(-1)
        },
        
    },
    
};
</script>

<style>

</style>