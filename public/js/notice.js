// 공지사항 갯수
let listLength = document.querySelectorAll('.notice_list');
let noticeNum = document.querySelectorAll('.notice_count');
let numarray = [];
for(let i = listLength.length ; i > 0 ; i--){
    numarray.push(i)
}
for(let j = 0; j<noticeNum.length;j++){
    noticeNum[j].innerHTML = `${numarray[j]}`
}