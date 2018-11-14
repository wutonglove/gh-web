import Vue from 'vue';

export default new Vue({
  data() {
    return {
      info: null
    };
  },
  computed: {
    userinfo: {
      get() {
        return this.info;
      },
      set(val) {
        window.localStorage.setItem('__gj__info__', JSON.stringify(val));
        this.info = val;
        this.$emit('userinfo', val);
      }
    }
  }
});
