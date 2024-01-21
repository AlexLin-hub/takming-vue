let isLogin = false;

const input = document.querySelector("input");
const button = document.querySelector("button");
const state = document.querySelector("#state");

function submit() {
  if (isLogin) {
    button.style.backgroundColor = "#222";
    button.textContent = "登入系統";
    input.disabled = false;
    isLogin = false;
    state.style.display = "none";
    alert("已登出系統");
    return;
  }

  if (input.value === "") {
    alert("請輸入密碼");
    return;
  }
  alert("登入成功");

  isLogin = true;

  input.value = "";
  input.disabled = true;
  button.style.backgroundColor = "#ff5500";
  button.textContent = "登出系統";
  state.style.display = "block";
}

button.addEventListener("click", function () {
  submit();
});

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submit();
  }
});
