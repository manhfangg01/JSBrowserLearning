console.log("hello todolist");

const tbody = document.getElementById("tbody");

const fetchDataFromLocalStorage = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};

const assignDeleteEvent = (idBtn) => {
  const btn = document.getElementById(idBtn);
  const todoId = Number(idBtn.split("-")[1]);
  btn.addEventListener("click", () => {
    const todos = fetchDataFromLocalStorage();
    const after = todos.filter((todo) => todo.id !== todoId);
    localStorage.setItem("todos", JSON.stringify(after));

    // Ngay lập tức render lại giao diện sau khi người dùng xóa
    renderTodos();
  });
};

const renderDeleteButton = (id) => `<button id="remove-${id}">Xóa</button>`;
const renderTodos = async () => {
  const data = fetchDataFromLocalStorage();
  const html = data
    .map(
      (todo) =>
        `<tr>
          <td>${todo.id}</td>
          <td>${todo.content}</td>
          <td>${renderDeleteButton(todo.id)}</td>
        </tr>
        `
    )
    .join("");
  tbody.innerHTML = html;
  // Sau khi các nút có id hiện ra rồi sẽ bắt đầu gán event cho từng nút
  data.forEach((todo) => {
    assignDeleteEvent(`remove-${todo.id}`);
  });
};

renderTodos();
