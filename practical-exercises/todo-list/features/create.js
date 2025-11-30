console.log("Hello let's create something");
const save = document.getElementById("btn-save");
const input = document.getElementById("input");

const randInt = () => {
  return Math.floor(Math.random() * 100000);
};

save.addEventListener("click", () => {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push({ id: randInt(), content: input.value });
  localStorage.setItem("todos", JSON.stringify(todos));
  input.value = "";
});
