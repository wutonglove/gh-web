<template>
  <div id="app">
    <nav-bar :active="active"></nav-bar>
    <router-view class="main"></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/nav-bar';
import bus from '@/common/js/bus';

export default {
  name: 'App',
  data() {
    return {
      active: 0
    };
  },
  created() {
    let _userinfo = window.localStorage.getItem('__gj__info__');
    bus.userinfo = JSON.parse(_userinfo);
  },
  components: {
    NavBar
  }
};
</script>

<style lang="stylus">
html, body
  width: 100%
  height: 100%
  color: #fff
  #app
    height: 100%
    min-width: 1000px
    box-sizing: border-box
    background: url('/static/images/b1.jpg') no-repeat
    background-size: cover
    padding-top: 89px
    position: relative
    .inner_box
      width: 1000px
      margin: 0 auto
    .main
      margin: 45px auto 0
      padding: 0 30px
  ul
    padding: 0
    margin: 0
  li
    list-style: none
  a
    color: inherit
    text-decoration: none
</style>
