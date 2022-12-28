// const { time } = require('console');
const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('./../db.js');
const multer  = require('multer');
const fs = require('fs');

// 단순 연결
/*메인페이지*/
router.get('/', function (req, res) {
  res.render('main');
})
/*스토어 페이지*/
router.get('/store',(req,res)=>{
  res.render('store');
});

// 회원가입
router.get('/join',(req,res)=>{
  res.render('join');
});
router.post('/sonyjoin',(req,res)=>{
  let param = JSON.parse(JSON.stringify(req.body));
  let mailId = param['joinmail'];
  let pw = param['joinpw'];
  let name = param['joinname'];
  let birth = param['joinbirth'];
  db.userjoin(mailId,pw,name,birth,()=>{
    res.redirect('/')
  })
});
// 로그인
router.get('/login',(req,res)=>{
  res.render('login');
});
router.post('/sonylogin',(req,res)=>{
  let param = JSON.parse(JSON.stringify(req.body));
  let loginId = param['loginID'];
  let loginPw = param['loginPW'];
  db.logincheck(loginId,loginPw,(results)=>{
    if(results.length>0){
      res.redirect('/')
    }
    else{
      res.send(`<script>
        alert("로그인 정보가 일치하지 않습니다.");
        document.location.href="/login"
      </script>`)
    }
  })
});
// 공지사항 작성
router.get('/notice_write',(req,res)=>{
  res.render('notice_write');
});
router.post('/sony_notice_write',(req,res,next)=>{
  let param = JSON.parse(JSON.stringify(req.body));
  let title = param['title'];
  let writer = param['writer'];
  let password = param['password'];
  let notice_cont = param['notice_cont'];
  db.writenotice(title,writer,password,notice_cont,()=>{
    res.redirect('/notice')
  })
})
// 공지 리스트 만들기
router.get('/notice', (req,res)=>{
  db.getNotice((rows) =>{
    res.render('notice',{rows: rows})
  })
})
//상세 페이지로 가기
router.get('/notice_view',(req,res)=>{
  let id = req.query.id;
  db. getNoticebyid(id,(row) =>{
    res.render('notice_view',{row: row[0]})
  })
})
//조회수 증가하기
router.post('/notice_view', (req,res)=>{
  let id = req.query.id;
  console.log(id);
  let view = req.query.view;
  console.log(view);
  db.updateView(id,view,(row) =>{
    res.render('notice_view',{row: row[0]})
  })
})
// 내용 수정하기(기존 내용을 받아오는 것)
router.get('/noticeUpdate', (req,res)=>{
  let id = req.query.id;
  db.getNoticebyid(id,(row) =>{
    res.render('notice_corr',{row: row[0]})
  })
})
// 내용 수정하기(수정한 내용을 DB로 보내는 것)
router.post('/notice_Update',(req,res)=>{
  let param = JSON.parse(JSON.stringify(req.body));
  let id = param['id'];
  let title = param['title'];
  let writer = param['writer'];
  let password = param['password'];
  let notice_cont = param['notice_cont'];
  db.updateNotice(id,title,writer,password,notice_cont,()=>{
    res.redirect('/notice')
  })
})
// 글(DB삭제하기)
router.get('/noticeDelete',(req,res)=>{
  let id = req.query.id;
  db.deleteByid(id,()=>{
    res.redirect('/notice')
  })
})

// 파일(이미지) 넘겨주기
// 폴더가 있다면(폴더 확인) 해당 파일에 저장
// try{
//   fs.readFileSync('../public/uploads/')
// }catch(err){
//  console.log("폴더가 존재하지 않습니다.");
//  fs.mkdirSync('../public/uploads/')//폴더가 없으면 폴더를 생성한다. 
// }

const upload = multer({
  storage: multer.diskStorage({
    destination(req,file,done){
      done(null, 'public/uploads/');
    },
    filename(req,file,done){
      const ext = path.extname(file.originalname);
      done(null,path.basename(file.originalname,ext) + Date.now() + ext);
    }
  }),
  limits : {fileSize: 1024*1024*20}
})
// 상품등록페이지(카메라 페이지) 작성 후 서버로 넘겨주기
router.get('/productUp',(req,res)=>{
  res.render('productUp');
});
router.post('/product_upload',upload.single('product_img'),(req,res)=>{
  let param = JSON.parse(JSON.stringify(req.body));
  let img = 'uploads/' + req.file.filename;
  let name = param['product_name'];
  let price = param['product_price'];
  let info = param['product_info'];
  let cont = param['product_sub'];
  // 정보 받아서 보내기
  db.insertProduct(name,img,price,info,cont,()=>{
    res.redirect('/camerainfo');
  })
})
// 상품(카메라 페이지)썸네일 리스트 페이지
router.get('/camerainfo',(req,res)=>{
  db.getProduct((rows) => {
    res.render('camerainfo',{rows:rows});
  })
})
// 상세페이지(상품소개페이지) 들어가기
router.get('/cameraView', (req,res)=>{
  let id = req.query.id;
  db.getProbyid(id,(row) =>{
    res.render('cameraView',{row: row[0]})
  })
})
// 게시글(상품페이지)삭제하기
router.get('/deletePro',(req,res)=>{
  let id = req.query.id;
  db.delProbyid(id,()=>{
    res.redirect('/camerainfo')
  })
})

// 상품 수정페이지 받아오기
router.get('/updatePro',(req,res)=>{
  let id = req.query.id;
  db.getProbyid(id,(row) =>{
    res.render('productCorr',{row: row[0]})
  })
})
// 게시글(상품페이지) 수정하기
router.post('/product_update',upload.single('product_img'),(req,res)=>{
  let param = JSON.parse(JSON.stringify(req.body));
  let id = param['product_id'];
  let name = param['product_name'];
  let price = param['product_price'];
  let info = param['product_info'];
  let cont = param['product_sub'];
  let img = 'uploads/' + req.file.filename;
  db.updateProduct(id,name,img,price,info,cont,()=>{
    res.redirect('/camerainfo')
  })
})

module.exports = router;
