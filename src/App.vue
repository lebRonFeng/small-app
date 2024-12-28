<template>
  <div id="app">
    <OneTab></OneTab>
  </div>
</template>

<script>
import OneTab from './components/OneTab.vue';
export default {
  name: 'App',
  components:{
    OneTab
  }
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
#app{
  width: 750px;
  height: 100px;
}
</style>
