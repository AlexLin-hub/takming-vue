var app = new Vue({
  el: "#content",
  data() {
    return {
      time: "23:59:59",
      date: "民國 113 年 01 月 24 日",
      timer: null,
    };
  },

  mounted() {
    this.start();
  },

  methods: {
    getNowTime() {
      // 補 0，維持 2 位數
      const padStart = (str = "") => str.toString().padStart(2, "0");

      // 計算現在時間
      const NOW = new Date();
      const [YEAR, MONTH, DATE, HOUR, MIN, SEC] = [
        NOW.getFullYear(),
        NOW.getMonth() + 1,
        NOW.getDate(),
        NOW.getHours(),
        NOW.getMinutes(),
        NOW.getSeconds(),
      ];
      const C_YEAR = YEAR - 1911; // 西元年 - 1911 = 民國年
      // 排版現在時間
      const TIME_FORMAT = `${padStart(HOUR)}:${padStart(MIN)}:${padStart(SEC)}`;
      const DATE_FORMAT = `民國 ${C_YEAR} 年 ${padStart(MONTH)} 月 ${padStart(
        DATE
      )} 日`;
      // 將內容替換畫面內容
      this.time = TIME_FORMAT;
      this.date = DATE_FORMAT;
    },

    start() {
      this.timer = setInterval(() => {
        this.getNowTime();
      }, 1000);
    },
  },

  beforeDestroy() {
    clearInterval(this.timer);
  },
});
