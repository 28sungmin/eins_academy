var slide = document.querySelector(".slider");
var no = 1;

setInterval(function () {
  no++;
  slide.style.backgroundImage = `url(./img/header_${no}.jpg)`;
  if (no == 4) no = 1;
}, 5000);
