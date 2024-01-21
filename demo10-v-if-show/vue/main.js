var app = new Vue({
  el: "#container",
  data() {
    return {
      password: "",
      isLogin: false,
    };
  },
  methods: {
    submit() {
      if (this.isLogin) {
        this.isLogin = false;
        alert("已登出系統");
        return;
      }

      if (this.password === "") {
        alert("請輸入密碼");
        return;
      }
      alert("登入成功");

      this.password = "";
      this.isLogin = true;
    },
  },
});
