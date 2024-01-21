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
        const button = document.querySelector("button");
        button.style.backgroundColor = "#222";
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

      const button = document.querySelector("button");
      button.style.backgroundColor = "#ff5500";
    },
  },
});
