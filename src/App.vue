<template>
  <div id="app">
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
  </div>
</template>

<script>

export default {
  name: 'App',
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
  background: #f00;
}
</style>
