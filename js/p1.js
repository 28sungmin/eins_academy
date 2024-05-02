// 이미지 슬라이드

// #1) 선택자 구성
var $sliderBox = document.querySelector("#slider_box");
var $slider = document.querySelector(".slider");
var $slide = document.querySelectorAll(".slide");
var $prev_btn = document.querySelector(".arrow_prev");
var $next_btn = document.querySelector(".arrow_next");
console.log($slide);

// #2) 초기 위치 설정(마지막 이미지 슬라이드를 맨 좌측으로 배치한다.)
// ==> 5-1-2-3-4 순으로 배치
$slider.prepend($slide[$slide.length - 1]);

// #3) 자동 반복설정
setInterval(function () {
  // #4-1) 슬라이드 영역(#slider_box => $sliderBox)에서
  //현재 클래스명에 hover라는 존재의 유무를 판단
  var $hover = $sliderBox.classList.contains("hover");
  console.log($hover);

  //   마우스가 슬라이드 영역 내부로 오버된 상태
  if ($hover == true) {
    // 아무것도 진행하지 않는다.
  } else {
    var $first_slide = document.querySelector(".slide:first-child");
    console.log($first_slide);
    $slider.classList.add("next");

    setTimeout(function () {
      $slider.append($first_slide);
      $slider.classList.remove("next");
    }, 500);
  }
}, 3000);

// #4) 슬라이드 영역 내부로 커서가 진입했을 때, 자동 반복설정을 제어
// 마우스 오버시 일시정지, 마우스 이탈시 자동 반복 진행
$sliderBox.addEventListener("mouseover", function () {
  console.log(this);
  this.classList.add("hover");
});
$sliderBox.addEventListener("mouseout", function () {
  this.classList.remove("hover");
});

// #5) 양측 화살표를 클릭 시 해당하는 이미지로 보여주기
// #5-1) 이전 버튼(<) 클릭시 : 좌측 이미지가 본 영역으로 들어온다.
$prev_btn.addEventListener("click", function (event) {
  event.preventDefault();

  var $last_slide = document.querySelector(".slide:last-child");
  $slider.classList.add("prev");

  setTimeout(function () {
    $slider.prepend($last_slide);
    $slider.classList.remove("prev");
  }, 500);
});
// #5-2) 다음 버튼(>) 클릭시 : 우측 이미지가 본 영역으로 들어온다.
$next_btn.addEventListener("click", function (event) {
  event.preventDefault();

  var $first_slide = document.querySelector(".slide:first-child");
  $slider.classList.add("next");

  setTimeout(function () {
    $slider.append($first_slide);
    $slider.classList.remove("next");
  }, 500);
});
