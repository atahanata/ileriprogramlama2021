const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
let todoList = [];
const generateTemplate = (todo) => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

  list.innerHTML += html;
};
if (localStorage.getItem("todoList")) {
  todoList = JSON.parse(localStorage.getItem("todoList"));
  todoList.forEach(todo => {
    generateTemplate(todo);
  });
}


addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if (todo.length) {
    todoList.push(todo);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    generateTemplate(todo);
    addForm.reset();
  }
});

// Delete Todos
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    let value = e.target.parentElement.querySelector("span").innerHTML;
    const index = todoList.indexOf(value);
    if (index !== -1) {
      todoList.splice(index, 1);
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }
    e.target.parentElement.remove();
  }
});
