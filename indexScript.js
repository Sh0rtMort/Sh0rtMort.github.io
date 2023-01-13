const fader = document.querySelector('.fade-in');
const diagram = document.querySelector('.diagram');

setTimeout(function() {
  document.querySelector('.loader-wrapper').style.display = "none";
  window.scrollTo(0, 0);
  document.body.style.overflow = "auto";
} ,1500);


setTimeout(function() {
  document.body.style.overflow = "hidden";
  window.scrollTo(0, 0);
  clearTimeout(1500);
});

window.onload = function() {
  window.scrollTo(0, 0);
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
  if (window.scrollY <= 120) {
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



const p1 = document.querySelector('.p1-wrapper');
const h1 = document.querySelector('.h1-wrapper');
const col12 = document.querySelector('.col-12');


window.addEventListener('scroll', function() {

  const middle = (window.innerHeight / 2) - 20;
  const middleLow = (window.innerHeight / 2) + 550;

  if (window.scrollY >= middle && window.scrollY <= middleLow) {
    p1.style.opacity = "1";
    p1.style.transform = "translateX(0px)";
    h1.style.opacity = "1";
    h1.style.transform = "translateX(0px)";
    col12.style.opacity = "1";
    col12.style.transform = "translateY(0px)";
  } else {
    p1.style.opacity = "0";
    p1.style.transform = "translateX(-600px)";
    h1.style.opacity = "0";
    h1.style.transform = "translateX(600px)";
    col12.style.opacity = "0";
    col12.style.transform = "translateY(-100px)";
  }
});
