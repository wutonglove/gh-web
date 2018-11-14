<template>
  <div class="class_table">
    <time-table :data="timeTableData"></time-table>
  </div>
</template>

<script>
import TimeTable from '@/components/timetable';

export default {
  data() {
    let arr = [];
    for (let i = 0; i < 7; i++) {
      arr.push({
        desc: '',
        lesson: '数学' + i
      });
    }
    return {
      timeTableData: {
        title: '',
        data: {
          am: [arr, arr, arr],
          pm: [arr, arr]
        }
      }
    };
  },
  computed: {},
  methods: {},
  components: {
    TimeTable
  }
};
</script>

<style lang="stylus" scoped>
.class_table
  width: 800px
</style>
