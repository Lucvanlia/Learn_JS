// hàm căn bậc 2 
let soA = 4 ;
console.log(Math.sqrt(soA));
// hàm mũ  tham số (số mũ và cơ số )
let soB = Math.pow(2,2) ; 
console.log(soB);
// hàm trị tuyệt đối 
let soC = Math.abs(-4);
console.log(soC);
// cel trần (tròn lên 4.01 - > 5 ) nhà và floor tròn xuống (4.01 - > 4) là trần nhà  4
let soD = Math.ceil(4.05); 
let soE = Math.floor(4.05);
console.log("ceil "+soD);
console.log("floor : "+ soE);
// tron 0.5 -> 1  
let soF = Math.round(4.55);
let soX = Math.round(4.55);
console.log("round  "+soF);
console.log("round  "+soX);
// lam` tron` bat ki` 
let x = 1.123423 ; 
let roundX = Number(x.toFixed(2));
// tofixed chuyen? sang string luu y
console.log(typeof x + typeof roundX + roundX) 
let g = roundX + 456 ; 
console.log(g);
// tim Max va Min 


 