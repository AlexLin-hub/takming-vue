const input = document.querySelector("input");
const button = document.querySelector("button");
const empty = document.querySelector("#empty");
const list = document.querySelector("#list");
const listItems = document.querySelector("#list-items");

let items = [];

function addItem() {
  items.push(input.value);
  input.value = "";
  render();
}

function render() {
  empty.style.display = "none";

  const listItemsDOM = document.querySelector("#list-items");
  listItemsDOM.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const itemDOM = document.createElement("li");
    itemDOM.innerHTML = item;
    listItemsDOM.appendChild(itemDOM);
  }
}

function submit() {
  if (input.value === "") {
    alert("待辦事項不得為空");
    return;
  }
  addItem();
}

button.addEventListener("click", function () {
  submit();
});

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submit();
  }
});
