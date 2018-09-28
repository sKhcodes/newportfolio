let i = 0;
let txtOne = 'Hi.';
let txtTwo = 'My name is Sarah ';
let txtThree = " and I'm learning web development.";
let speed = 100; 
let firstdiv = document.querySelector("#firstOne");
let nextdiv = document.querySelector("#nextOne");
let lastdiv = document.querySelector("#lastOne");
let btn = document.querySelector("button");
function typeWriter(txtname, divname, i) {
    i || (i = 0);

    if (i < txtname.length) {
        divname.innerHTML += txtname.charAt(i);
        setTimeout(function () { typeWriter(txtname, divname, i + 1) }, speed);
    }
}

window.onload = function() { typeWriter(txtOne, firstdiv) };
firstdiv.addEventListener("animationend", function() { typeWriter(txtTwo, nextdiv) });
nextdiv.addEventListener("animationend", function() { typeWriter(txtThree, lastdiv) });
lastdiv.addEventListener("animationend", function() { 
   btn.style.display = "block";
   btn.style.animation = "animate-drop 1s linear";
 });

 btn.addEventListener("click", function() {
     document.querySelector("#about").style.display = "block";
 })
 