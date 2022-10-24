
 // Part 1
 /*
 const title = document.querySelector('title');
title.innerText = 'Hello there';
console.log(title);

document.body.style.background = 'rgb(0 2 235)' ;
*/
const body = document.querySelector('body');
const bodyChild = body.children
console.log(bodyChild);

for(child of body.children) {
    console.log(child.tagName)
}


