var app = new Vue({
  el: "#container",
  data() {
    return {
      password: "",
    };
  },
  methods: {
    submit() {
      if (this.password === "") {
        alert("請輸入密碼");
        return;
      }
      confirm("確定要送出嗎？");
    },
  },
});
