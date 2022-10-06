
let button = document.getElementById("button_top");
let header = document.getElementById("header");


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    button.classList.add("to-top");
  } else {
    button.classList.remove("to-top");
  }
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("header_background");
    console.log('alo', button.classList);
  } else {
    header.classList.remove("header_background");
  }
}

