const todoItems = document.querySelector(".TO-DO-ITEMS");
const input = document.getElementById("input");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addItem();
  }
});

function addItem() {
  const inputValue = input.value.trim();
  if (inputValue === "") return;

  const divParent = document.createElement("div");
  divParent.className = "item";

  const itemContent = document.createElement("div");
  itemContent.textContent = inputValue;
  divParent.appendChild(itemContent);

  const iconsContainer = document.createElement("div");
  iconsContainer.className = "icons-container";

  const checkIcon = document.createElement("i");
  checkIcon.className = "fas fa-check-square";
  checkIcon.style.color = "lightgray";
  checkIcon.addEventListener("click", function () {
    divParent.classList.toggle("completed");
  });
  iconsContainer.appendChild(checkIcon);

  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fa fa-trash";
  deleteIcon.style.color = "darkgray";
  deleteIcon.addEventListener("click", function () {
    divParent.remove();
  });
  iconsContainer.appendChild(deleteIcon);

  divParent.appendChild(iconsContainer);

  todoItems.appendChild(divParent);

  input.value = "";
}