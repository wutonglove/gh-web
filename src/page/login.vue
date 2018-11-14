<template>
  <div>
    <iframe v-show="!userinfo" id="login_if" class="iframe" src="http://localhost:8070/login.html#/login" frameborder="0"></iframe>
    <h2 v-show="userinfo" class="succ">登录成功！</h2>
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
    let iframe = document.getElementById('login_if');
    iframe.height = _height - iframe.offsetTop;
    this.userinfo = bus.userinfo;
    // 登陆成功
    window.addEventListener('message', e => {
      try {
        let _userinfo = JSON.parse(e.data);
        bus.userinfo = _userinfo;
      } catch (e) {}
    });

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
