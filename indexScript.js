
setTimeout(function() {
  document.querySelector('.loader-wrapper').style.display = "none";
  window.scrollTo(0, 0);
  document.body.style.overflow = "auto";
} ,1500);


setTimeout(function() {
  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";
  clearTimeout(1500);
});

window.onload = function() {
  window.scrollTo(0, 0);
}

setTimeout(function() {
  clearTimeout(2000);
} ,2000);

const sizeTest = document.querySelector('.size-test');
const infill = document.querySelector('.infill');

sizeTest.addEventListener('click' ,function() {
  console.log(window.innerWidth);
  const width = window.innerWidth;
  infill.innerHTML = width;
});
