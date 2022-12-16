let joinBtn = document.querySelector(".join_btn");

function Validation(){
  //이메일 유효성검사
  let mailExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  //pwassword 유효성 검사
  let passExp = /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,15}$/; 
  //이름 유효성검사
  let nameExp = /^[가-힣]{2,5}$/; 
  
  let objEmail = document.getElementById("joinmail");//메일
  let objPwd = document.getElementById("joinpw"); //비밀번호
  let objPwd2 = document.getElementById("joinpwcheck"); //비밀번호확인
  let objName = document.getElementById("joinname"); //이름
  let objbirth = document.getElementById("joinbirth")//생년월일

// ================ email 유효성검사 ================ //
    // 이메일 입력여부 검사
    if(objEmail.value == ''){ 
        alert("이메일을 입력해주세요.");
        objEmail.focus();
        return false;
    }
     //이메일 유효성 검사
    if(!mailExp.test(objEmail.value)){
        alert("올바른 이메일 형식이 아닙니다.");
        objEmail.focus();
        return false;
    }   
  // ================ PASSWORD 유효성검사 ===============//
  // 비밀번호 입력여부 검사
  if(objPwd.value==''){ 
      alert("Password를 입력해주세요.");
      objPwd.focus();
      return false;
  }
  //패스워드 유효성검사
  if(!passExp.test(objPwd.value)){ 
      alert("Password는 대/소문자,숫자,특수문자 3종 포함 8~15자리 미만으로 입력하여 주세요.");
      objPwd.focus();
      return false;
  }
  //비밀번호와 비밀번호확인이 동일한지 검사
  if(objPwd2.value!=objPwd.value){ 
      alert("비밀번호가 틀립니다. 다시 확인하여 입력해주세요.");
      objPwd2.focus();
      return false;
  }
  // ================ 이름 유효성검사 ================ //        
  if(objName.value ==''){
      alert("이름을 입력해주세요.");
      objName.focus();
      return false;
  }
  if(!nameExp.test(objName.value)){
      alert("특수문자,영어,숫자는 사용할수 없습니다. 한글만 입력하여주세요.");
      objName.focus();
      return false;
  }
  // ================ 생일 입력검사 ================ //
    // 이메일 입력여부 검사
    if(objbirth.value == ''){ 
        alert("생년월일을 입력해주세요.");
        objbirth.focus();
        return false;
    }
}
