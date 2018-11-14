<template>
  <div class="nav_box">
    <div class="inner_box">
      <div class="logo"><a href="/">logo</a></div>
      <div class="nav_menu">
        <router-link class="nav_item"
          v-for="(item,index) in menu"
          :key="index"
          :to="item.href"
          tag="li"
          exact
          >
          <span class="text">{{item.name}}</span>
        </router-link>
        <li class="other" v-if="userinfo">
          <a href="javascript:void(0)">
            <div class="sub_title">
              <span class="name">{{userinfo.username}}</span>
              <i class="el-icon-arrow-down"></i>
            </div>
            <ul class="sub_menu">
              <router-link tag="li" class="sub_item" to="/userinfo">个人信息</router-link>
              <router-link tag="li" class="sub_item" to="/infoedit">个人设置</router-link>
              <li class="sub_item" @click="loginout">退出</li>
            </ul>
          </a>
        </li>
        <li class="other" v-else>
          <router-link class="link" to="/login">登陆</router-link>
          <router-link class="link" to="/register">注册</router-link>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '@/common/js/bus';

export default {
  props: {
    active: Number | String
  },
  data() {
    return {
      menu: [
        {
          name: '首页',
          href: '/'
        },
        {
          name: '在线学习',
          href: '/online'
        },
        {
          name: '课程表',
          href: '/schedule'
        }
      ],
      userinfo: null
    };
  },
  mounted() {
    this.userinfo = bus.userinfo;
    bus.$on('userinfo', d => {
      this.userinfo = d;
    });
  },
  methods: {
    loginout() {
      bus.userinfo = null;
    }
  },
  components: {}
};
</script>

<style lang="stylus" scoped>
@import '../common/stylus/variable'

.nav_box
  border-top: 3px solid $color-theme
  height: 60px
  .logo
    float: left
    font-size: 60px
    line-height: 60px
    color: #fff
    img
      width: 175px
  .nav_menu
    float: right
    line-height: 60px
    height: 60px
    .nav_item
      float: left
      padding: 0 20px
      cursor: pointer
      font-weight: bold
      .text
        padding: 0 10px 5px
      &.router-link-active
        color: $color-theme
        .text
          border-bottom: 3px solid
      &:hover
        color: #fff
        background-color: rgba(0, 0, 0, 0.6)
    .other
      float: left
      position: relative
      margin-left: 15px
      min-width: 95px
      .sub_title
        text-align: center
      .sub_menu
        display: none
        position: absolute
        top: 60px
        left: 0px
        right: 0px
        text-align: center
        line-height: 40px
        background-color: rgba(0, 0, 0, 0.5)
        padding: 0 15px
        .sub_item
          cursor: pointer
          a
            padding: 0
          &:not(:last-child)
            border-bottom: 1px solid #ccc
      &:hover
        .sub_menu
          display: block
      .link
        margin: 0 5px
</style>
