const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logOut = document.querySelector("#logOut");
const toDoListContainer = document.getElementById("toDoList");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  toDoInput.classList.remove(HIDDEN_CLASSNAME);
  toDoListContainer.classList.remove(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  toDoInput.value = "";
  loginInput.value = "";
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logOut.classList.remove(HIDDEN_CLASSNAME);
}

function logOutUser(event) { //로그아웃
  event.preventDefault();
  logOut.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
  toDoInput.classList.add(HIDDEN_CLASSNAME);
  toDoListContainer.classList.add(HIDDEN_CLASSNAME);
  localStorage.removeItem(USERNAME_KEY);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  toDoInput.classList.add(HIDDEN_CLASSNAME);
  logOut.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  toDoListContainer.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  toDoInput.value = "";
  loginInput.value = "";
} else {
  paintGreetings(savedUsername);
}

logOut.addEventListener("click", logOutUser);