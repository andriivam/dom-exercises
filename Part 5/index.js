const container = document.getElementById("container");
const actionUl = document.getElementById("action");
const green = document.getElementById("green");
const violet = document.getElementById("violet");
const orange = document.getElementById("orange");

// creating green square
green.addEventListener("click", (e) => {
   const newDiv = document.createElement("div");
  newDiv.className = "actionsquare green";

  container.appendChild(newDiv);
  newDiv.addEventListener('click', (e) => {
    alert(('green'), green.style.backgroundColor);
  })
  if (green) {
    const time = new Date();
    let seconds = time.getSeconds();
    const liEl = document.createElement("li");
    liEl.innerText = `[${seconds}s]` + " Created a new green square";
    actionUl.appendChild(liEl);
  }
});

// creating green violet
violet.addEventListener("click", (e) => {
  const newDiv = document.createElement("div");
  newDiv.className = "actionsquare violet";
  container.appendChild(newDiv);
  newDiv.addEventListener('click', (e) => {
    alert(('violet'), green.style.backgroundColor);
  })
  if (violet) {
    const time = new Date();
    let seconds = time.getSeconds();
    const liEl = document.createElement("li");
    liEl.innerText = `[${seconds}s]` + " Created a new violet square";
    actionUl.appendChild(liEl);
  }
});

// creating green orange
orange.addEventListener("click", (e) => {
  const newDiv = document.createElement("div");
  newDiv.className = "actionsquare orange";
  container.appendChild(newDiv);
  newDiv.addEventListener('click', (e) => {
    alert(('orange'), green.style.backgroundColor);
  })
  if (orange) {
    const time = new Date();
    let seconds = time.getSeconds();
    const liEl = document.createElement("li");
    liEl.innerText = `[${seconds}s]` + " Created a new orange square";
    actionUl.appendChild(liEl);
  }
});

// adding event listener to the body
const body = document.querySelector("body");

const backColor = (e) => {
  if (e.code === "Space") {
    body.style.backgroundColor = getRandomColor();
    // display time
    const time = new Date();
    let seconds = time.getSeconds();
    // create dynamic list
    const liEl = document.createElement("li");
    liEl.innerText = `[${seconds}s]` + " You hit the space!!!";
    actionUl.appendChild(liEl);
  } else if (e.code === 'KeyI') {
actionUl.innerHTML = '';
  } else if (e.code === 'KeyS') {
   container.innerHTML = ''
  }

  // generate random color
  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
};

body.addEventListener("keyup", backColor);


