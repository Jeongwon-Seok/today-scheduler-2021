const loginForm = document.querySelector("#login-form");
const loginInputText = document.querySelector("#login-form input:first-child");
const loginInputSubmit = document.querySelector("#login-form input:last-child");
const firstColumn = document.querySelector(".data-column");
const secondColumn = document.querySelector(".scheduler-column");
const greeting = document.querySelector("#greeting");
const screen = document.querySelector(".main-screen");
const userData = document.querySelector(".data-column__user-data");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInputText.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginInputText.classList.add(HIDDEN_CLASSNAME);
  loginInputSubmit.classList.add(HIDDEN_CLASSNAME);
  firstColumn.classList.remove(HIDDEN_CLASSNAME);
  secondColumn.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginInputText.classList.remove(HIDDEN_CLASSNAME);
  loginInputSubmit.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
  firstColumn.classList.remove(HIDDEN_CLASSNAME);
  secondColumn.classList.remove(HIDDEN_CLASSNAME);
}
