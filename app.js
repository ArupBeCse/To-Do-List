function addTodo() {
  const newTodo = document.getElementById("new-todo").value;
  if (newTodo) {
    const listItem = document.createElement("li");
    listItem.innerText = newTodo;
    const todoList = document.getElementById("todo-list");
    todoList.appendChild(listItem);
    document.getElementById("new-todo").value = "";
  }
}
