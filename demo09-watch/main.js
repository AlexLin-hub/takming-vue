const input = document.querySelector("input");
const password = document.querySelector("#password");

input.addEventListener("input", function (e) {
  if (e.target.value.length > 10) {
    alert("密碼長度不得超過 10 個字");
    return;
  }
  password.innerHTML = e.target.value;
});
