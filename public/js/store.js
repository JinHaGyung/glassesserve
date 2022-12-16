const storeImg = document.querySelector('#storeImg');

window.addEventListener("resize",()=>{
    if (window.innerWidth <= 1200){
        storeImg.src = "img/9.store/store_1200.jpg"
    }
    else{
        storeImg.src = "img/9.store/store.jpg"
    }
})

