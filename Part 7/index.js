// node list
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");

for (let i = 0; i < li.length; i++) {
  let child = li[i];
  console.log(child.innerText);
  child.addEventListener("click", callAlert);

  if (child.innerText === "Fast and Furious") {
    const liFast = child;
    ul.prepend(liFast);
    liFast.className = "important";
    //console.log(liFast);
  }
}



// function to call alert for click event
const body = document.querySelector("body");
function callAlert() {
  if (this.innerText === "Fast and Furious") {
    alert(
      "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family"
    );
  } else {
    alert(this.innerText);
  }
}
// creating new div
const newDiv = document.createElement("div");
body.insertBefore(newDiv, ul);
const select = document.createElement("select");
newDiv.appendChild(select);
select.innerHTML =
  "<option value='important franchises'>Best movie</option> <option value='normal franchises'>Good movie</option>";
// select item with class important
const importChild = document.querySelector(".important");
// adding event listener and loop all our ul
select.addEventListener("change", (e) => {
  for (let i = 0; i < li.length; i++) {
    let child = li[i];
    if (select.value === "important franchises") {
      importChild.style.visibility = "visible";
      child.style.visibility = "hidden";
    } else if (select.value === "normal franchises") {
      child.style.visibility = "visible";
      importChild.style.visibility = "hidden";
    }
  }
});

// remove duplicates 
let newList = [];
for (const child of li) {

  if(newList.includes(child.textContent))
  {
 
   child.parentNode.removeChild(child)
  } else {
    li.innerHtml = newList.push(child.textContent);
  }
}

// adding event listener for the body element
const ulChild = ul.childNodes;
console.log(ulChild)
// sorting ul items in random order
const sortList = (e) => {
  if (e.code === 'KeyR') { 
    for (var i = ulChild.length; i >= 0; i--) {
      ul.appendChild(ulChild[Math.random() * i | 0]);
  }
  if (importChild) {                   // if our <li></li> has class important it should stay tat top of <ul></ul>
    ul.prepend(importChild)
    console.log('i am important')
  }
  } else if (e.code === 'KeyD') {
    const clone = importChild.cloneNode(true);
    ul.prepend(clone)
  }

}

body.addEventListener('keyup', sortList);