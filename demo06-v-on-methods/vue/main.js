var app = new Vue({
  el: "#container",
  methods: {
    submit() {
      const input = document.querySelector("input");

      if (input.value === "") {
        alert("請輸入密碼");
        return;
      }
      confirm("確定要送出嗎？");
    },
  },
});
