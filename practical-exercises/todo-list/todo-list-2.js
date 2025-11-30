console.log("hello todolist optimized");

const tbody = document.getElementById("tbody");

const fetchDataFromLocalStorage = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};

const renderTodos = () => {
  const data = fetchDataFromLocalStorage();
  const html = data
    .map(
      (todo) => `
        <tr>
            <td>${todo.id}</td>
            <td>${todo.content}</td>
            <td>
                <button class="btn-delete" data-id="${todo.id}">Xóa</button>
            </td>
        </tr>
    `
    )
    .join("");

  tbody.innerHTML = html;
};

tbody.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("btn-delete")) {
    const idToDelete = Number(target.dataset.id);

    const todos = fetchDataFromLocalStorage();
    const newTodos = todos.filter((todo) => todo.id !== idToDelete);
    localStorage.setItem("todos", JSON.stringify(newTodos));

    renderTodos();
  }
});

renderTodos();
