var i = 0;
var firsttxt = 'Hi.  My name is Sarah'; 
var speed = 50; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementsByClassName("firstone").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}