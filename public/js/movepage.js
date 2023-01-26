const btn = document.querySelector(".btn")
btn.addEventListener("click",click)

function click(e){
  const checktype = document.querySelectorAll(".radio-display");
  if(checktype.value == "달걀형" || checktype.value == "감각적인 디자인"){
    console.log("웰링턴 안경")
  }
  else if(checktype.value == "둥근형" || checktype.value == "단정한 디자인"){
    console.log("사각 안경")
  }
  if(checktype.value == "사각형" || checktype.value == "내츄럴한 디자인"){
    console.log("무테 안경")
  }
  if(checktype.value == "역삼각형" || checktype.value == "부드러운 디자인"){
    console.log("원형안경")
  }
  e.preventDefault();
}

onclick="javascript:location.href='/notice_view?id=<%= row.id%>'"