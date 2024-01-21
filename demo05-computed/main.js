const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  if (input.value === "") {
    alert("請輸入密碼");
    return;
  }
  confirm("確定要送出嗎？");
});

input.addEventListener("input", function () {
  if (input.value.length < 6) {
    button.disabled = true;
    return;
  }
  button.disabled = false;
});
