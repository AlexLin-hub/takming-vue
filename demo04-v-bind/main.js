let showPassword = false;

const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  showPassword = !showPassword;
  input.type = showPassword ? "text" : "password";
  button.innerHTML = showPassword ? "隱藏密碼" : "顯示密碼";
});
