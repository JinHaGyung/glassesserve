var mysql = require('mysql');
var connection = mysql.createConnection({
  host: "sonytable.c1twpfacjz0u.ap-northeast-1.rds.amazonaws.com",
  user: "admin",
  password: "sonypass",
  database: "sonytable",
  dateStrings : "date",
  multipleStatements: true
});

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected!");
// });

// 회원가입(데이터 보내기)
function userjoin(mailId,pw,name,birth,callback){
  connection.query (`INSERT INTO sonyjoin(emailId,password,name,birth) values('${mailId}','${pw}','${name}','${birth}')`,
  (err)=>{
    if (err) throw err;
    callback()
  })
}
// 로그인(데이터와 비교해서 로그인)
function logincheck(loginId,loginPw,callback){
  connection.query(`select * from sonyjoin where emailId ='${loginId}' AND password ='${loginPw}'`,
  (err,results)=>{
    if (err) throw err;
    callback(results)
  })
}
// 공지사항 작성하기
function writenotice(title,writer,password,notice_cont,callback){
  connection.query(`insert into sonynotice(create_time,title,writer,password,noticecont,view) values(NOW(),'${title}','${writer}','${password}','${notice_cont}','0')`, (err)=>{
    if (err) throw err;
    callback();
  })
}
// 공지 리스트
function getNotice(callback){
  connection.query(`SELECT * FROM sonynotice ORDER BY id desc` ,(err,rows)=>{
    if (err) throw err;
    callback(rows);
  })
}
//상세 페이지로 가기
function getNoticebyid(id,callback){
  connection.query(`Select * FROM sonynotice where id =${id}` + `UPDATE sonynotice SET view = view + 1 WHERE id = ${id};`, 
  (err,row)=>
  {if (err) throw err
  callback(row);});
}
// 클릭시 조회수 추가하기
// function updateView(id,view,callback){
//   connection.query(`UPDATE sonynotice set view='${view+1}' where id = ${id}`,
//   (err) => {
//     if (err) throw err;
//     callback()
//   });
// }
// 내용 수정하기(기존 내용을 받아오는 것)
function getNoticebyid(id,callback){
  connection.query(`Select * FROM sonynotice where id =${id}`, 
  (err,row)=>
  {if (err) throw err
  callback(row);})
}
function noticeCount(id,callback){
  connection.query(`SELECT COUNT(id) FROM sonynotice`)
  console.log(4)
}
// 내용 수정하기(수정한 내용을 DB로 보내는 것)
function updateNotice(id,title,writer,password,notice_cont,callback){
  connection.query(`UPDATE sonynotice set title ='${title}',writer = '${writer}',password='${password}',noticecont='${notice_cont}' where id =${id}`,
  (err) => {
    if (err) throw err;
    callback()
  })
}
// 내용 삭제하기
function deleteByid(id,callback){
  connection.query(`DELETE FROM sonynotice where id=${id}`,
    (err) => {
      if (err) throw err;
      callback()
  })
}
// 상품페이지 등록(DB로 보내기)
function insertProduct(name,img,price,info,cont,callback){
  connection.query(`INSERT INTO sonyproduct(name,productimg,price,info,infoimg) values('${name}','${img}','${price}','${info}','${cont}')`,
      (err) => {
        if (err) throw err;
        callback()
    })
}
// 상품페이지 리스트 보여주기
function getProduct(callback){
  connection.query('SELECT * FROM sonyproduct order by id desc',(err,rows) => {
    if (err) throw err;
    callback(rows);
  })
};

// 상품 상세페이지 보여주기
function getProbyid(id,callback){
  connection.query(`Select * FROM sonyproduct where id =${id}`, 
  (err,row)=>
  {if (err) throw err
  callback(row);})
}
// 게시글(상품페이지)삭제하기
function delProbyid(id,callback){
  connection.query(`DELETE FROM sonyproduct where id=${id}`,
    (err) => {
      if (err) throw err;
      callback()
  })
}
// 상품페이지 수정(내용 받아오기)
function getProbyid(id,callback){
  connection.query(`Select * FROM sonyproduct where id =${id}`, 
  (err,row)=>
  {if (err) throw err
  callback(row);})
}
// 상품페이지 수정(내용 보내기)
function updateProduct(id,name,img,price,info,cont,callback){
  connection.query(`UPDATE sonyproduct set name = '${name}',productimg='${img}',price='${price}',info ='${info}',infoimg ='${cont}' where id = ${id}`,
  (err) => {
    if (err) throw err;
    callback()
  })
}

module.exports = {
  /* 회원가입*/ userjoin,/*로그인 */logincheck,
  //게시판
  writenotice,getNotice,getNoticebyid,updateView,updateNotice,deleteByid, noticeCount,
  // 상품(썸네일)
  insertProduct,getProduct,getProbyid,delProbyid,updateProduct
}