let i = 0;
let txt = 'Lorem ipsum typing effect!';
let speed = 100; 
window.onload = function typeWriter() {
    if (i < txt.length) {
document.querySelector(".firstOne").innerHTML += txt.charAt(i);
       i++;
        setTimeout(typeWriter, speed);
    }
}