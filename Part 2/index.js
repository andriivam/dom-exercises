/*
const nameClass = document.getElementsByClassName("important");
console.log(nameClass, 1);


for(let item of nameClass) {
    item.setAttribute('title', 'This is an important item');
console.log(item, 2);
}


for (let i = 0; i < nameClass.length; i++) {
    nameClass[i].setAttribute('title', 'This is an important item');
    console.log(nameClass[i]);
}

const img = document.querySelectorAll("img");
console.log(img);

for(let i = 0; i< img.length; i++) {
    if(img[i].className !== 'important') {
        img[i].style.display = 'none';
    }
}
*/
 
const p = document.querySelectorAll("p");
console.log(p);
// checking if p has any classes
for (let i = 0; i < p.length; i++) {
     console.log(p[i].innerText);
    console.log('className ' + p[i].className);
}


// creating random colors
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
// iterating out p and set random color for each p

for(let i = 0; i < p.length; i++) {

      if(p[i].className !== '') {
        p[i].style.color = 'none'
      } else {
  
        p[i].style.color = getRandomColor();
      }
  

}
