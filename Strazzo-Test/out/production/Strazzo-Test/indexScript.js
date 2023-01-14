const fader = document.querySelector('.fade-in');
const diagram = document.querySelector('.diagram');

setTimeout(function() {
  document.querySelector('.loader-wrapper').style.display = "none";
  document.body.style.overflow = "auto";
} ,1500);


setTimeout(function() {
  document.body.style.overflow = "hidden";
  clearTimeout(1500);
});

window.onload = function() {
  fader.style.opacity = "0";
  fader.style.transform = "translateX(-100px)";
  diagram.style.opacity = "0";
  diagram.style.transform = "translateY(-100px)";
}

setTimeout(function() {
  fader.style.opacity = "1";
  fader.style.transform = "translateX(0px)";
  diagram.style.opacity = "1";
  diagram.style.transform = "translateY(0px)";
  clearTimeout(2000);
} ,2000);


window.addEventListener('scroll', function() {
  if (window.scrollY <= 80) {
    fader.style.opacity = "1";
    fader.style.transform = "translateX(0px)";
    diagram.style.opacity = "1";
    diagram.style.transform = "translateY(0px)";
  } else {
    fader.style.opacity = "0";
    fader.style.transform = "translateX(-100px)";
    diagram.style.opacity = "0";
    diagram.style.transform = "translateY(-100px)";
  }
});
