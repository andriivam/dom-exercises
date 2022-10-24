const body = document.querySelector("body");

const students = ["Andrii", "Yurii", "Arsenia", "Thomas", "Youssef"];

window.addEventListener("DOMContentLoaded", (e) => {});

const nameList = () => {
  // random order of name
  let randomOrder = students.sort(() => {
    return Math.random() - 0.5;
  });
  console.log(randomOrder);

  for (student of students) {
    const section = document.createElement("section");
    const p = document.createElement("p");
    p.innerHTML = student;

    // append our element to the dom
    body.appendChild(section);
    section.appendChild(p);

    // generating random color

    function getRandomColor() {
      let letters = "0123456789ABCDEF";
      let color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    // iterating out p and set random color for each p

    for (let i = 0; i < students.length; i++) {
      section.style.background = getRandomColor();
    }
  }
};
nameList();
