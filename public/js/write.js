let writeBtn = document.querySelector(".write_save");
let writeDate = document.querySelector(".write_date");
// 공지 작성 조건 검사하기
function writePwCheck(){
  let su = true;
  let writer = document.getElementById("writeWriter");//작성자
  let noticeCont = document.getElementById("notice_cont")//공지 내용
  let writePW = document.getElementById("writePW"); //비밀번호
  let writePWCheck = document.getElementById("writePWCheck"); //비밀번호확인

  if(writer.value == '' ||noticeCont.value == '' || writePW.value == ''|| writePWCheck == ''){ 
    alert("항목을 비울 수 없습니다.");
    if (writer.value == '' ){
        writer.focus();
    }
    else if (noticeCont.value == ''){
        noticeCont.focus();
    }
    else if (writePW.value == ''){
        writePW.focus();
    }
    else{
        writePWCheck.focus();
    }
    return su = false;
    }
  if(writePW.value!=writePWCheck.value){ 
    alert("비밀번호가 일치하지 않습니다. 다시 확인하여 입력해주세요.");
    writePW.focus();
    return su = false;
  }
  return su;
}