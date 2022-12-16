
//상품 갯수로 금액 처리하기
let buycount = document.querySelectorAll('input[name="buycount"]');
let buyNum = document.querySelector(".buyNum_Count");
let clickLook = document.querySelector(".clickhidden")
let paySum = document.querySelector(".sum");
 sum = Number(paySum.innerHTML);

 for(let i = 0; i<buycount.length;i++){
    count = "";
    
    buycount[i].addEventListener("click",()=>{
        clickLook.style.display = "block";
        count = Number(buycount[i].value);
        buyNum.innerHTML = `${buycount[i].value}`
        cameraPay = (sum*count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        paySum.innerHTML = `${cameraPay}`
    })   
}