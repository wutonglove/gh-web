<template>
  <div>
    <iframe v-show="!userinfo" id="login_rg" class="iframe" src="/api/xiti/login.html#/register" frameborder="0"></iframe>
    <h2 v-show="userinfo" class="succ">注册成功！</h2>
  </div>
</template>

<script>
import bus from '@/common/js/bus';

export default {
  data() {
    return {
      userinfo: null
    };
  },
  mounted() {
    let _height = window.innerHeight;
    let iframe = document.getElementById('login_rg');
    iframe.height = _height - iframe.offsetTop;
    // 注册成功
    window.addEventListener('message', e => {
      try {
        let _userinfo = JSON.parse(e.data);
        bus.userinfo = _userinfo;
      } catch (e) {}
    });

    this.userinfo = bus.userinfo;
    bus.$on('userinfo', d => {
      this.userinfo = d;
    });
  },
  computed: {},
  methods: {},
  components: {}
};
</script>

<style lang="stylus" scoped>
.iframe
  display: block
  width: 100%
.succ
  width: 100%
  height: 100%
  text-align: center
  padding-top: 50px
</style>
