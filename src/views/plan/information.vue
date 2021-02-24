<!--  -->
<template>
<div class='information'>
<van-form @submit="onSubmit">
    <van-cell title="时间" :value="date" @click="show = true" />
    <van-calendar v-model="show" @confirm="onConfirm" />
    
    <van-field name="radio" label="性别">
        <template #input>
            <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1">男</van-radio>
            <van-radio name="2">女</van-radio>
            </van-radio-group>
        </template>
        </van-field>

            <van-field name="stepper" label="体重">
        <template #input>
            <van-stepper v-model="stepper1" /> kg
        </template>
        </van-field>

    <van-field name="stepper" label="身高">
        <template #input>
            <van-stepper v-model="stepper2" /> mg
        </template>
        </van-field>
    

    <div style="margin: 16px;">
        <router-link to="../pagehome/recommend">
    <van-button round block type="info" native-type="submit">提交</van-button>
        </router-link>
  </div>
</van-form>
  
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
    date: '',
    show: false,
    radio:'1',
    stepper1: 1,
    stepper2: 1,
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    onSubmit(values) {
      console.log('submit', values);
      this.$toast('添加成功');
    //   this.Toast.success('成功文案');
    },
    formatDate(date) {
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        },
        onConfirm(date) {
        this.show = false;
        this.date = this.formatDate(date);
        },
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
</style>