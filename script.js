var slide = document.querySelector(".slider");
var no = 1;

setInterval(function () {
  no++;
  slide.style.backgroundImage = `url(./img/header2_${no}.jpeg)`;
  if (no == 2) no = 0;
}, 5000);
