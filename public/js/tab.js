//헤더 모바일 네비 탭(토글)
const nClick = document.querySelector('.m_nav');
const ntoggle = document.querySelector('.header_bottom');
nClick.addEventListener("click",()=>{
  ntoggle.classList.toggle('m_nav_tab');
})
// 메인 베스트 랭킹 탭
const bestBtn = document.querySelectorAll('.best_btn');
const imgWrap = document.querySelectorAll('.img_wrap')

for(let i = 0; i < bestBtn.length; i++){
  bestBtn[i].addEventListener('click', function(e){
    e.preventDefault();
    for(let j = 0; j < bestBtn.length; j++){
      bestBtn[j].classList.remove('click');
      imgWrap[j].classList.remove('active');
    }
    bestBtn[i].classList.add('click');
    imgWrap[i].classList.add('active');
  }
)}