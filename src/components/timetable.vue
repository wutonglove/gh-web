<template>
  <div>
    <table class="table" border="0" v-if="timetable">
      <!-- 表头 -->
      <tr>
        <th v-for="(item,index) in theader" :key="'bt'+index">{{item}}</th>
        <th v-if="isEdit"></th>
      </tr>
      <!-- 上午 -->
      <tr v-for="(data,index) in timetable.am" :key="'am'+index">
        <td :rowspan="timetable.am.length" v-if="index===0">上午</td>
        <td v-for="(item,i) in data" :key="i">
          <input type="text" v-if="isEdit" v-model="item.lesson">
          <span class="cnt_item" v-else @click="showPPTList('am', index, i)">{{item.lesson}}</span>
        </td>
        <td v-if="isEdit"><button @click="del(timetable.am, index)">删除</button></td>
      </tr>
      <tr v-if="isEdit">
        <td></td>
        <td :colspan="isEdit?8:7"><button @click="addAm" :disabled="addDisable">添加+</button></td>
      </tr>
      <!-- 分界 -->
      <tr>
        <td :colspan="isEdit?9:8" style="height: 20px"></td>
      </tr>
      <!-- 下午 -->
      <tr v-for="(data,index) in timetable.pm" :key="'pm'+index">
        <td :rowspan="timetable.pm.length" v-if="index===0">下午</td>
        <td v-for="(item,i) in data" :key="i">
          <input type="text" v-if="isEdit" v-model="item.lesson">
          <span class="cnt_item" v-else @click="showPPTList('pm', index, i)">{{item.lesson}}</span>
        </td>
        <td v-if="isEdit"><button @click="del(timetable.pm, index)">删除</button></td>
      </tr>
      <tr v-if="isEdit">
        <td></td>
        <td :colspan="isEdit?8:7"><button @click="addPm" :disabled="addDisable">添加+</button></td>
      </tr>
    </table>
    <div class="ppt_list" v-if="ppts.length">
      <h2>课件：</h2>
      <p class="ppt_item" v-for="(p,index) in ppts" :key="index" @click="openPPT(p)">{{p}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    mode: String
  },
  data() {
    return {
      num_ch: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'],
      theader: ['', '周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      timetable: null,
      emptyData: {
        am: [this.initLessons()],
        pm: [this.initLessons()]
      },
      ppts: []
    };
  },
  computed: {
    isEdit() {
      return this.mode === 'edit';
    },
    addDisable() {
      return this.timetable.am.length + this.timetable.pm.length > 9;
    }
  },
  mounted() {
    if (this.isEdit) {
      this.timetable = this.emptyData;
    } else {
      this.timetable = this.data.data;
    }
  },
  methods: {
    addAm() {
      this.timetable.am.push(this.initLessons());
    },
    addPm() {
      this.timetable.pm.push(this.initLessons());
    },
    del(data, index) {
      data.splice(index, 1);
    },
    initLessons() {
      let arr = [];
      for (let i = 0; i < 7; i++) {
        arr.push({
          desc: '',
          lesson: ''
        });
      }
      return arr;
    },
    showPPTList(t, r, c) {
      // 通过 am 周 第几节 等信息获取 pptlist
      console.log(t, r, c);
      let rd = parseInt(Math.random() * 6 + 1, 10); // 0-7
      let data = new Set();
      let mock = [
        '1.ppt',
        '5 对韵歌.ppt',
        '对韵歌（第二课时）_课件1.ppt',
        '对韵歌（第一课时）_课件1.ppt',
        '对韵歌.pptx',
        '金木水火土_课件1.ppt',
        '天地人.ppt'
      ];
      for (let i = 0; i < rd; i++) {
        let index = parseInt(Math.random() * 6 + 1, 10);
        data.add(mock[index]);
      }
      this.ppts = Array.from(data);
    },
    openPPT(name) {
      let baseUrl = 'https://shzhw.github.io/gh-ppts.github.io/';
      let _url = encodeURIComponent(baseUrl + name);
      window.open(`https://view.officeapps.live.com/op/view.aspx?src=${_url}`);
    }
  },
  components: {}
};
</script>

<style lang="stylus" scoped>
.table
  border-collapse: collapse
  margin: 0 auto
  td, th
    border-top: 1px solid #ccc
    border-left: 1px solid #ccc
    text-align: center
    height: 45px
    width: 70px
    line-height: 45px
    input
      width: 90%
      height: 90%
      text-align: center
    span
      display: inline-block
      width: 100%
      height: 100%
      &.cnt_item
        cursor: pointer
        &:hover
          background-color: #fff
          color: #333
  tr
    border-bottom: 1px solid #ccc
    border-right: 1px solid #ccc
.ppt_list
  margin-top: 40px
  .ppt_item
    margin: 0 10px
    line-height: 35px
    cursor: pointer
    &:hover
      text-decoration: underline
</style>
