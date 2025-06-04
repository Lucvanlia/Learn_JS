//  toán tử 3 ngôi 
// Cấu trúc 
/* 
    Biến = Diều kiện : Biểu thức 1[True] : Biểu thức 2 [false]
    let number  = 10 
    let lowNumber = number > 10 ?  "So duong": "So am";
    Đây là bản rút gọn của if else 
    
*/

let number = -10 ; 
let lowNumber = number >= 0 ? "Số dương" : "Số âm";
console.log(lowNumber);

let soChan = 11 
let chkNumber = soChan % 2 == 0 ? "Số chẵn" : "Số lẻ";
console.log(chkNumber);


let dtb = Number(prompt("Nhập số điểm bạn vào: "));

let chkdtb = dtb>= 8 ? "Giỏi" :( dtb >= 6.5 ?  "Khá" :( dtb >= 5 ? "Trung bình":"Yếu"));
console.log(chkdtb);