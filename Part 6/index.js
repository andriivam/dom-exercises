// first task id
const firstName = document.getElementById("firstname");
const displayName = document.getElementById("display-firstname");
// second task id
const age = document.getElementById("age");
const hardToBelieve = document.getElementById("a-hard-truth");
// third task id
const password = document.getElementById("pwd");
const passConfirm = document.getElementById("pwd-confirm");

// adding event listener to display user input inside of the section
firstName.addEventListener("keyup", (e) => {
  displayName.innerHTML = firstName.value;
});

// age section

age.addEventListener("keyup", (e) => {
  if (age.value < 18) {
    hardToBelieve.style.display = "none";
  } else {
    hardToBelieve.style = "visibility";
  }
});

// password section
password.addEventListener("keyup", (e) => {
  if (
    password.value.length < 6 ||
    password.value !== passConfirm.value ||
    password.value.length !== passConfirm.value.length
  ) {
    password.style.background = "red";
  } else {
    password.style.background = "green";
  }
  passConfirm.addEventListener("keyup", (e) => {
    if (
      passConfirm.value.length < 6 ||
      passConfirm.value !== password.value ||
      password.value.length !== passConfirm.value.length
    ) {
      passConfirm.style.background = "red";
    } else {
      passConfirm.style.background = "green";
    }
  });
});

// change background color
const darkMode = document.querySelector("#toggle-darkmode");

const select = document.querySelector("select");
select.addEventListener("change", (e) => {
  if (select.value === "dark") {
    const body = document.querySelector("body");
    body.style.background = "black";
    body.style.color = "white";
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
  }
});
console.log(darkMode.value)
