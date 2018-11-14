<template>
  <div>
    <div class="info_panel" v-if="userinfo">
      <p class="info_line">
        <span class="info_name">用户ID:</span>
        <span class="info_desc">{{userinfo.userid}}</span>
      </p>
      <p class="info_line">
        <span class="info_name">用户名:</span>
        <span class="info_desc">{{userinfo.username}}</span>
      </p>
      <p class="info_line">
        <span class="info_name">学校名称:</span>
        <span class="info_desc">{{userinfo.school}}</span>
      </p>
      <p class="info_line">
        <span class="info_name">年级:</span>
        <span class="info_desc">{{userinfo.grade}}</span>
      </p>
      <p class="info_line">
        <span class="info_name">班级:</span>
        <span class="info_desc">{{userinfo.class}}</span>
      </p>
      <p class="info_line">
        <span class="info_name">性别:</span>
        <span class="info_desc">{{userinfo.gender*1 === 1? '男':'女'}}</span>
      </p>
    </div>
    <div class="info_panel none" v-else>请<router-link to="/login" tag="a">登录</router-link></div>
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
.info_panel
  width: 80%
  margin: 0 auto
  padding: 20px
  background-color: rgba(0, 0, 0, 0.3)
  min-height: 300px
  &.none
    text-align: center
    font-size: 30px
    padding-top: 80px
    a
      border-bottom: 1px solid
</style>
