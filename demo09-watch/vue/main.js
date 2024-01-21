var app = new Vue({
  el: "#container",
  data() {
    return {
      password: "",
    };
  },
  watch: {
    password(newValue, oldValue) {
      if (newValue.length > 10) {
        alert("密碼長度不得超過 10 個字");
        this.password = oldValue;
      }
    },
  },
});
