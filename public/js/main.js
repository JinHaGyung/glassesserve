const loginVeiw = document.querySelector('.login_none');
const usericon = document.getElementById('user');

usericon.addEventListener("mouseover",()=>{
  loginVeiw.style.display="block";
})
usericon.addEventListener("mouseout",()=>{
  loginVeiw.style.display="none";
})