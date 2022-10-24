
/*
// changing position of ul element
const ol = document.querySelector('ol');
const UlChild = ol.children;
console.log(UlChild)
const li_0 = ol.children[0];
const li_1 = ol.children[4];
 li_1.appendChild(li_0);
*/
 // moving h2 to the another section

 const section = document.querySelectorAll('section');
const hLast = section[2].querySelector('h2');
console.log(hLast);
const hSecond = section[1].querySelector('h2');
console.log(hSecond);
section[1].insertBefore(hLast, hSecond)
section[2].appendChild(hSecond)
 // hSecond.prepend(hLast);
 //section[1].prepend(hLast);
  section[2].remove();
  console.log(section);