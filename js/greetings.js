const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const logoutBtn = document.querySelector("#logout-btn");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const loginID = loginInput.value;
  localStorage.setItem("USERNAME_KEY", loginID);
  paintGreetings(loginID);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}!!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logoutBtn.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("USERNAME_KEY");

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

function logout(event) {
  event.preventDefault();
  const loginID = loginInput.value;
  localStorage.removeItem("USERNAME_KEY", loginID);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
  logoutBtn.classList.add(HIDDEN_CLASSNAME);
}

logoutBtn.addEventListener("click", logout);
