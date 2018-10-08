// Typewriter section

let i = 0;
let txtOne = 'Hi.';
let txtTwo = 'My name is Sarah ';
let txtThree = " and I'm learning web development.";
let speed = 100; 
let firstdiv = document.querySelector("#firstOne");
let nextdiv = document.querySelector("#nextOne");
let lastdiv = document.querySelector("#lastOne");
let btn = document.querySelector("button");
let sect = document.querySelectorAll(".section");
function typeWriter(txtname, divname, i) {
    i || (i = 0);

    if (i < txtname.length) {
        divname.innerHTML += txtname.charAt(i);
        setTimeout(function () { typeWriter(txtname, divname, i + 1) }, speed);
    }
}

window.onload = function() { typeWriter(txtOne, firstdiv) };

// Timing animations and typewriter
firstdiv.addEventListener("animationend", function() { typeWriter(txtTwo, nextdiv) });
nextdiv.addEventListener("animationend", function() { typeWriter(txtThree, lastdiv) });
lastdiv.addEventListener("animationend", function() { 
   btn.style.display = "block";
   btn.style.animation = "animate-drop 1s linear";
 });
//   Button to reveal rest of portfolio
 btn.addEventListener("click", function() {
     for (div of sect) {
         div.style.display = "inline-grid";
     }
 })

//  Flex panels for projects
const projects= document.querySelectorAll('.project');
projects.forEach(project => projects.addEventListener('click', () => {
  project.classList.toggle('open');
}));

 