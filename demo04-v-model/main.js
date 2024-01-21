const input = document.querySelector("input");
const password = document.querySelector("#password");

input.addEventListener("input", function (e) {
  password.innerHTML = e.target.value;
});
