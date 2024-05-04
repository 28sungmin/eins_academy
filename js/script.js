// 메인 이미지 넘기기
const slide = document.querySelector(".slider_box .slider");
const $nav = document.querySelector(".welcome_nav");
const $menu = document.querySelector(".menu");
// 반응형 메뉴를 위한 변수들
const $body = document.querySelector("body");
const $resBtn = document.querySelector(".resBtn");
const $menuBtn = document.querySelector(".resBtn .menuBtn");
const $closeBtn = document.querySelector(".resBtn .closeBtn");

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

// 반응형에서 클릭할 대상(for Showing menu)

$menuBtn.addEventListener("click", function () {
  $body.classList.add("showMenu");
  $resBtn.classList.add("active");
  $menu.classList.add("active");
});
$closeBtn.addEventListener("click", function () {
  $body.classList.remove("showMenu");
  $resBtn.classList.remove("active");
  $menu.classList.remove("active");
});

// 다른 교육기관과 차이가 있다면?? 아이콘 넣기
const $diffList = document.querySelectorAll(".diff ul li");
const $detail = document.querySelector(".detail");

for (let i = 0; i < $diffList.length; i++) {
  const $diffItem = $diffList[i];
  const img = document.createElement("img");
  img.src = `./img/diff_${i + 1}.png`; // 이미지 경로 설정
  img.alt = "차별점 이미지";
  $diffItem.querySelector("div").appendChild(img);
}

function reviewMore() {
  for (let i = 2; i < $diffList.length; i++)
    $diffList[i].classList.add("active");
  $detail.innerHTML = `<span class="less" onclick="reviewLess();">-감추기</span>`;
}
function reviewLess() {
  for (let i = 2; i < $diffList.length; i++)
    $diffList[i].classList.remove("active");
  $detail.innerHTML = `<span class="more" onclick="reviewMore();">+더보기</span>`;
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

// 슬라이드 색 입히기
const $color_div = [
  [226, 240, 217],
  [218, 227, 243],
  [255, 242, 204],
  [237, 237, 237],
  [251, 229, 214],
  [222, 235, 247],
  [214, 220, 229],
];
const $color_text = [
  [84, 130, 53],
  [47, 85, 151],
  [191, 144, 0],
  [124, 124, 124],
  [197, 90, 17],
  [46, 117, 182],
  [51, 63, 80],
];

const $slide_h5 = document.querySelectorAll("#slider_box .slider .slide h5");
const $slide_p = document.querySelectorAll("#slider_box .slider .slide p");
console.log($slide[2].innerHTML);

let $slide_no1 = 0;
for (let i of $color_div) {
  $slide[$slide_no1].style.backgroundColor = `rgba(${i[0]}, ${i[1]}, ${i[2]})`;
  $slide_no1++;
}
let $slide_no2 = 0;
for (let j of $color_text) {
  $slide_h5[$slide_no2].style.color = `rgba(${j[0]}, ${j[1]}, ${j[2]})`;
  $slide_no2++;
}
