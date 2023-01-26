// ragio check & chekborder
const typeSelect = document.querySelectorAll(".type-select");
const radio = document.querySelectorAll(".radio-display");
for(let i=0; i<typeSelect.length; i++){
  typeSelect[i].addEventListener("click",()=>{
    radio[i].checked = true;
    for(let j=0; j<typeSelect.length; j++){
      typeSelect[j].classList.remove("select_border")
    }
    typeSelect[i].classList.add("select_border")
  })
}

// 토글 버튼&type 

let check = document.querySelector(".toggle-check");
const toggleSlide = document.querySelector(".toggle-slide");
const faceType = document.querySelector(".face_type");
const designType = document.querySelector(".design_type")
const type = document.querySelectorAll(".radio-check");

toggleSlide.addEventListener("click",()=>{
  check.checked = !check.checked
   for(let j=0; j<typeSelect.length; j++){
      typeSelect[j].classList.remove("select_border")
    }
  if(check.checked){
    faceType.classList.toggle("typecheck");
    designType.classList.toggle("typecheck");
    type[1].checked = true;
  }
  else{
    faceType.classList.toggle("typecheck");
    designType.classList.toggle("typecheck");

    type[0].checked = true;
  }
})

// 필수 선택
function selectCheck(){
    if(!radio[0].checked && !radio[1].checked && !radio[2].checked && !radio[3].checked && !radio[4].checked && !radio[5].checked && !radio[6].checked && !radio[7].checked){ 
      alert("한가지를 선택해주세요.");
      return false;
      }
}