// 상단 슬라이드
var swiper = new Swiper(".Swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: { 
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// 베스트 탭
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    380: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});

// 스마트 제품
var swiper = new Swiper(".selectSwiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    380: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});
// 정품등록이벤트
var swiper = new Swiper(".regoSwiper", {
  slidesPerView: 0,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    380: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});