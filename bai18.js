// truthy and falsy values 
// number to string 
let a = 123 ; 
console.log( typeof a);
let b = String(a);
console.log(typeof b );

// 8 gía trị khi đổi sang bool là false 
// 0 , -0 , 0n, null,undefine ,Nan,"",false 
let c = Boolean(false);
console.log(typeof c + " " + c )

let d = Boolean(null);
console.log(typeof d + " " + d )

let f = Boolean("null");
console.log(typeof f + " " + f )
// check được xem biến đó gán giá trị không 
let salary ;
console.log(salary);
if(salary)
        console.log("Có lương");
    else
    console.log("Không tìm thấy")