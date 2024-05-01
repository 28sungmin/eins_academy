// 메인 이미지 넘기기
var slide = document.querySelector(".slider");
var $nav = document.querySelector(".welcome_nav");
var $menu = document.querySelector(".menu");
var no = 1;
setInterval(function () {
  no++;
  slide.style.backgroundImage = `url(./img/header2_${no}.jpeg)`;
  if (no == 1) {
    $nav.classList.remove("nav_right");
    $menu.classList.remove("menu_color");
  }
  if (no == 2) {
    $nav.classList.add("nav_right");
    $menu.classList.add("menu_color");
    no = 0;
  }
}, 5000);

// 아이콘 넣기
const diffList = document.querySelectorAll(".diff ul li");

for (let i = 0; i < diffList.length; i++) {
  const diffItem = diffList[i];
  const img = document.createElement("img");
  img.src = `./img/diff_${i + 1}.png`; // 이미지 경로 설정
  img.alt = "차별점 이미지";
  diffItem.querySelector("div").appendChild(img);
}
