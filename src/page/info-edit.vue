<template>
  <div>
    <div class="info_panel">
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
        <span class="info_desc">
          <el-select v-model="grade" placeholder="请选择" size="mini">
            <el-option label="一年级" value="1"></el-option>
            <el-option label="一年级" value="2"></el-option>
          </el-select>
        </span>
      </p>
      <p class="info_line">
        <span class="info_name">班级:</span>
        <span class="info_desc">
          <el-input placeholder="请输入班级" size="mini"></el-input>
        </span>
      </p>
      <p class="info_line">
        <span class="info_name">性别:</span>
        <span class="info_desc">
          <el-radio v-model="gender" label="男">男</el-radio>
          <el-radio v-model="gender" label="女">女</el-radio>
        </span>
      </p>
      <el-button type="primary">保存</el-button>
      <el-button type="danger">重置</el-button>
    </div>
  </div>
</template>

<script>
import bus from '@/common/js/bus';

export default {
  data() {
    return {
      gender: '男',
      classs: '112',
      grade: '一年级',
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
  .info_desc
    display: inline-block
</style>
