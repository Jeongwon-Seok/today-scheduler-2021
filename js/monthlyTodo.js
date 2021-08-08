const monthlyToDoForm = document.getElementById("monthlyTodo-form");
const monthlyToDoInput = monthlyToDoForm.querySelector("input");
const monthlyToDoList = document.getElementById("monthlyTodo-list");

const monthlyTODOS_KEY = "monthlyTodos";

let monthlyToDos = [];

function savemonthlyToDos() {
  localStorage.setItem(monthlyTODOS_KEY, JSON.stringify(monthlyToDos));
}
function deletemonthlyToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  monthlyToDos = monthlyToDos.filter(
    (monthlyToDo) => monthlyToDo.id !== parseInt(li.id)
  );
  savemonthlyToDos();
}

function paintmonthlyToDo(newmonthlyTodo) {
  const li = document.createElement("li");
  li.id = newmonthlyTodo.id;
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newmonthlyTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deletemonthlyToDo);
  li.appendChild(span);
  li.appendChild(button);
  monthlyToDoList.appendChild(li);
}

function handlemonthlyToDoSubmit(event) {
  event.preventDefault();
  const newmonthlyTodo = monthlyToDoInput.value;
  monthlyToDoInput.value = "";
  const newmonthlyTodoObj = {
    text: newmonthlyTodo,
    id: Date.now(),
  };
  monthlyToDos.push(newmonthlyTodoObj);
  paintmonthlyToDo(newmonthlyTodoObj);
  savemonthlyToDos();
}

monthlyToDoForm.addEventListener("submit", handlemonthlyToDoSubmit);

const savedmonthlyToDos = localStorage.getItem(monthlyTODOS_KEY);

if (savedmonthlyToDos !== null) {
  const parsedmonthlyToDos = JSON.parse(savedmonthlyToDos);
  monthlyToDos = parsedmonthlyToDos;
  parsedmonthlyToDos.forEach(paintmonthlyToDo);
}
