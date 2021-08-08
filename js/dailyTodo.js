const dailyToDoForm = document.getElementById("dailyTodo-form");
const dailyToDoInput = dailyToDoForm.querySelector("input");
const dailyToDoList = document.getElementById("dailyTodo-list");

const dailyTODOS_KEY = "dailyTodos";

let dailyToDos = [];

function savedailyToDos() {
  localStorage.setItem(dailyTODOS_KEY, JSON.stringify(dailyToDos));
}
function deletedailyToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  dailyToDos = dailyToDos.filter(
    (dailyToDo) => dailyToDo.id !== parseInt(li.id)
  );
  savedailyToDos();
}

function paintdailyToDo(newdailyTodo) {
  const li = document.createElement("li");
  li.id = newdailyTodo.id;
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newdailyTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deletedailyToDo);
  li.appendChild(span);
  li.appendChild(button);
  dailyToDoList.appendChild(li);
}

function handledailyToDoSubmit(event) {
  event.preventDefault();
  const newdailyTodo = dailyToDoInput.value;
  dailyToDoInput.value = "";
  const newdailyTodoObj = {
    text: newdailyTodo,
    id: Date.now(),
  };
  dailyToDos.push(newdailyTodoObj);
  paintdailyToDo(newdailyTodoObj);
  savedailyToDos();
}

dailyToDoForm.addEventListener("submit", handledailyToDoSubmit);

const saveddailyToDos = localStorage.getItem(dailyTODOS_KEY);

if (saveddailyToDos !== null) {
  const parseddailyToDos = JSON.parse(saveddailyToDos);
  dailyToDos = parseddailyToDos;
  parseddailyToDos.forEach(paintdailyToDo);
}
