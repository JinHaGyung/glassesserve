var mysql = require('mysql');
var connection = mysql.createConnection({
  host: "sonytable.c1twpfacjz0u.ap-northeast-1.rds.amazonaws.com",
  user: "admin",
  password: "sonypass",
  database: "glassesmatch",
  multipleStatements: true
});

// 데이터 보내기
function select(type,checktype,callback){
  connection.query (`INSERT INTO glassesmatch(selecttype,checktype) values('${type}','${checktype}')`,
  (err)=>{
    if (err) throw err;
    callback()
  })
}
// 통계(웰링턴 안경용)
function getwell(callback){
  connection.query(`SELECT COUNT(checktype) as cnt FROM glassesmatch WHERE checktype = '달걀형';` + `SELECT COUNT(checktype) as cnt FROM glassesmatch WHERE checktype = '감각적인 디자인'` ,(err,row)=>{
    if (err) throw err;
    let count1 = row[0];
    let count2 = row[1];
    callback(count1,count2);
  })
}
// 통계(사각 안경용)
function getsquare(callback){
  connection.query(`SELECT COUNT(checktype) as cnt FROM glassesmatch WHERE checktype = '둥근형';` + `SELECT COUNT(checktype) as cnt FROM glassesmatch WHERE checktype = '단정한 디자인';`,(err,row)=>{
    if (err) throw err;
    let count3 = row[0];
    let count4 = row[1];
    callback(count3,count4);
  })
}
// 통계(무테 안경용)
function getnoline(callback){
  connection.query(`SELECT COUNT(checktype) as cnt FROM glassesmatch WHERE checktype = '사각형';` + `SELECT COUNT(checktype) as cnt FROM glassesmatch WHERE checktype = '내츄럴한 디자인'` ,(err,row)=>{
    if (err) throw err;
    let count5 = row[0];
    let count6 = row[1];
    callback(count5,count6);
  })
}
// 통계(둥근 안경용)
function getround(callback){
  connection.query(`SELECT COUNT(checktype) as cnt FROM glassesmatch WHERE checktype = '역삼각형';` + `SELECT COUNT(checktype) as cnt FROM glassesmatch WHERE checktype = '부드러운 디자인'` ,(err,row)=>{
    if (err) throw err;
    let count7 = row[0];
    let count8 = row[1];
    callback(count7,count8);
  })
}

module.exports = {
  select,getwell,getsquare,getnoline,getround
}