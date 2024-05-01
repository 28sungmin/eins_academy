/* 
이미지 슬라이드
- 자동 롤링 슬라이드
- 마우스 오버시, 슬라이드의 일시 정지
- next, prev 버튼을 활용하여 이미지가 좌우로 넘어가도록 구성
*/

// #1) 선택자 구성
var $sliderBox = document.querySelector("#slider_box");
var $slider = document.querySelector(".slider");
var $slide = document.querySelectorAll(".slide");
/* 
0: div.slide.slide1
1: div.slide.slide2
2: div.slide.slide3
3: div.slide.slide4
4: div.slide.slide5
*/
console.log($slide);

var $prev_btn = document.querySelector(".arrow_prev");
var $next_btn = document.querySelector(".arrow_next");

// #2) 초기 위치 설정(마지막 이미지 슬라이드를 맨 좌측으로 배치한다면, 5-1-2-3-4)
// console.log($slide[$slide.length - 1]); // $slide[4]와 같음. 되도록 변수를 이용해서 작성하기
$slider.prepend($slide[$slide.length - 1]);

// #6) 각 슬라이드 진입간 효과 적용
function slideMotion() {
  $slide.forEach(function (v) {
    // 객체를 찾아가면서 active라는 클래스명을 제거
    v.classList.remove("active");
  });

  // 2번의 영역에 active를 넣어야 하니까. 1번은 좌측에 하나 빠져나와있는거고,
  // 2번이 보여지는 면이다.
  var $standard_slide = document.querySelector(".slide:nth-child(2)");
  console.log($standard_slide);
  $standard_slide.classList.add("active");
}
// 초기 브라우저 로딩되자마자 함수를 호출하여 첫 번째 슬라이드에 모션 적용하기 위함
// 즉, 새로고침 하자마자 글귀가 나오도록 하기 위함
slideMotion();

// #3) 자동 반복설정
setInterval(function () {
  // #4-1) 슬라이드 영역(#slider_box => $sliderBox)에서 현재 클래스명에 hover라는 존재의 유무를 판단
  var $hover = $sliderBox.classList.contains("hover");
  console.log(
    // true(마우스가 슬라이드 영역 내부로 오버된 상태) 또는
    // false(마우스가 슬라이드 영역 외부로 빠져나간 상태)
    `현재 마우스의 위치가 슬라이드 영역 내부로 진입한 상태 : ${$hover}`
  );

  if ($hover == true) {
    // 아무것도 진행하지 않는다.
    // alert("마우스 오버된 상태");
  } else {
    // 반복하는 시점상에서 첫 번째 객체만을 저장
    var $first_slide = document.querySelector(".slide:first-child");
    console.log($first_slide);
    // margin-left:-100% => margin-left:-200% 로 변경시키겠다. (모션 효과)
    $slider.classList.add("next");

    setTimeout(function () {
      // 맨 좌측의 이미지를 맨 우측으로 0.5초마다 배치한다. (css의 transition 초와 ms 는 일치해야 함)
      $slider.append($first_slide);
      // margin-left:-200% => margin-left:-100% 로 변경시키겠다. (모션 효과)
      $slider.classList.remove("next");

      slideMotion();
    }, 500);
  }
}, 3000);

// #4) 슬라이드 영역 내부로 커서가 진입했을 때, 자동 반복설정을 제어
// (마우스 오버시 일시정지, 마우스 이탈시 자동 반복 진행)
$sliderBox.addEventListener("mouseover", function () {
  console.log(this);
  this.classList.add("hover");
});
$sliderBox.addEventListener("mouseout", function () {
  this.classList.remove("hover");
});

// #5) 양측 화살표를 클릭시 해당하는 이미지로 보여주기
// #5-1) 이전(<) 버튼 클릭시 : 좌측 이미지가 본 영역으로 들어온다.
$prev_btn.addEventListener("click", function (event) {
  // a태그 영역이 포함된 경우, href 속성에 의한 초기화를 막는다.
  event.preventDefault();
  // 버튼을 누른 시점상에서 가장 우측에 위치한 슬라이드를 선택
  var $last_slide = document.querySelector(".slide:last-child");
  // margin-left:-100% => margin-left:0% 로 이동되는 모션 효과
  $slider.classList.add("prev");
  setTimeout(function () {
    $slider.prepend($last_slide);
    // margin-left:0% => margin-left:-100% 로 이동되는 모션 효과
    $slider.classList.remove("prev");
    slideMotion();
  }, 500);
});

// #5-2) 다음(>) 버튼 클릭시 : 우측 이미지가 본 영역으로 들어온다.
$next_btn.addEventListener("click", function (event) {
  // a태그 영역이 포함된 경우, href 속성에 의한 초기화를 막는다.
  event.preventDefault();
  console.log(event);
  // 버튼을 누른 시점상에서 가장 좌측에 위치한 슬라이드를 선택
  var $first_slide = document.querySelector(".slide:first-child");
  // margin-left:-100% => margin-left:-200% 로 이동되는 모션 효과
  $slider.classList.add("next");
  setTimeout(function () {
    $slider.append($first_slide);
    // margin-left:-200% => margin-left:-100% 로 이동되는 모션 효과
    $slider.classList.remove("next");
    slideMotion();
  }, 500);
});
