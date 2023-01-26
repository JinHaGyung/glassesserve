const express = require('express');
const router = express.Router();
const db = require('./../db.js');

// 단순 연결
/*메인페이지*/
router.get('/', function (req, res) {
  res.render('main');
})
// 선택 보내기
router.post('/glassesform',(req,res)=>{
  let param = JSON.parse(JSON.stringify(req.body));
  let type = param['type'];
  let checktype = param['checktype'];
  db.select(type,checktype,()=>{
    if(checktype == "달걀형" || checktype == "감각적인 디자인"){
      res.redirect('wellglasses')
    }
    else if(checktype == "둥근형" || checktype == "단정한 디자인"){
      res.redirect('squareglass')
    }
    if(checktype == "사각형" || checktype == "내츄럴한 디자인"){
      res.redirect('nolineglasses')
    }
    if(checktype == "역삼각형" || checktype == "부드러운 디자인"){
      res.redirect('roundglasses')
    }
  })
})
// 결과 페이지
router.get('/wellglasses', function (req, res) {
  db.getwell((count1,count2) =>{ 
    res.render('wellglasses',{  
      count1: count1[0],
      count2: count2[0],
    })
  })
})
router.get('/squareglass', function (req, res) {
  db.getsquare((count3,count4) =>{
    res.render('squareglass',{
      count3:count3[0],
      count4:count4[0],
    })
  })
})
router.get('/nolineglasses', function (req, res) {
  db.getnoline((count5,count6) =>{
    res.render('nolineglasses',{
      count5:count5[0],
      count6:count6[0]
    })
  })
})
router.get('/roundglasses', function (req, res) {
  db.getround((count7,count8) =>{
    res.render('roundglasses',{
      count7:count7[0],
      count8:count8[0]
    })
  })
})


module.exports = router;
