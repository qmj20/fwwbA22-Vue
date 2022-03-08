<template>
  <div id="app">
  <app-header v-if="header_show"></app-header>
  <router-view v-on:public_header="public_header"></router-view>
  </div>
</template>

<script>
import AppHeader from './components/Header'
export default {
  name: 'App',
  data(){
    return {
      header_show:true,
    }
  },
  components: {
    'app-header':AppHeader,
  },
  methods:{
    //是否显示头部
    public_header:function (bool) {
      this.header_show = bool;
    },
  }
}
</script>

<style>

</style>
