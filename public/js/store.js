const storeImg = document.querySelector('#storeImg');

window.addEventListener("resize",()=>{
    if (window.innerWidth <= 1200){
        storeImg.src = "img/9.store/store_1200.jpg"
    }
    else{
        storeImg.src = "img/9.store/store.jpg"
    }
})

// 제품 갯수 표기
let productCount = document.querySelector('#productCount');
let infoSum = document.querySelectorAll(".camera_info");
productCount.innerHTML = `(${infoSum.length})`

// 상품페이지 NEW 표시
let fiveNew = document.querySelectorAll(".new");

for(let i = 0; i<5; i++){
    fiveNew[i].innerHTML = "NEW"
}

