// 메인 이미지 넘기기
const slide = document.querySelector(".slider_box .slider");
const $nav = document.querySelector(".welcome_nav");
const $menu = document.querySelector(".menu");

let no = 1;
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

// 온라인 강의 슬라이드
const $arrow = document.querySelector(".arrow");
const $sliderBox = document.querySelector("#slider_box");
const $slider = document.querySelector("#slider_box .slider");
const $slide = document.querySelectorAll("#slider_box .slider .slide");
const $prev_btn = document.querySelector(".arrow_prev");
const $next_btn = document.querySelector(".arrow_next");

let currentSlide = 0;

// 화살표 누르면 이동
// $next_btn.addEventListener("click", function () {
//   $slider.classList.add("next");
// });
$prev_btn.addEventListener("click", function () {
  currentSlide = (currentSlide - 1 + $slide.length) % $slide.length;

  $slider.classList.add("prev");
  $slider.style.marginLeft = `${currentSlide * -100}%`;
});

$next_btn.addEventListener("click", function () {
  currentSlide = (currentSlide + 1) % 7;

  $slider.classList.add("next");
  $slider.style.marginLeft = `${currentSlide * -100}%`;
});
setInterval(function () {
  const $hover = $sliderBox.classList.contains("hover");
  const $hover2 = $arrow.classList.contains("hover");

  if ($hover == true || $hover2 == true) {
  } else {
    currentSlide = (currentSlide + 1) % 7;

    $slider.classList.add("next");
    $slider.style.marginLeft = `${currentSlide * -100}%`;
  }
}, 3000);

$sliderBox.addEventListener("mouseover", function () {
  this.classList.add("hover");
});
$arrow.addEventListener("mouseover", function () {
  this.classList.add("hover");
});
$sliderBox.addEventListener("mouseout", function () {
  this.classList.remove("hover");
});
$arrow.addEventListener("mouseout", function () {
  this.classList.remove("hover");
});

$slide.forEach(function (slide) {
  slide.addEventListener("click", function () {
    window.location.href = "p1.html";
  });
});
