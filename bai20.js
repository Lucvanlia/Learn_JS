let n  =parseInt(prompt ("Nhập vào số từ 1 -> 99: "));
while(  n < 0 || n > 99 || n % 1  !== 0){
         n  =parseInt(prompt ("Số bạn nhập không hợp lệ nhập lại vào số từ 1 -> 99: "));

}
alert("Số bạn vừa nhập vào là:  " + n )