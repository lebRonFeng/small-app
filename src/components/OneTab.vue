<template>
  <div>一级导航</div>
</template>

<script>
import { mapActions } from 'vuex';
import api from '../api/index'
export default {
  data(){
    return {

    }
  },
  methods: {
    ...mapActions(['getSideList']),
    async getData () {
      const value = await api.getSideList('蔬菜');
      console.log(value, 'value===')
    }
  },
  mounted(){
    this.getData()
  }
}
</script>

<style>

</style>