const input = document.querySelector("input");
const button = document.querySelector("button");

function submit() {
  if (input.value === "") {
    alert("請輸入密碼");
    return;
  }
  confirm("確定要送出嗎？");
}

button.addEventListener("click", function () {
  submit();
});

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submit();
  }
});
