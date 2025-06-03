// kiem tra dieu kien if
// cau truc nhap diem
/**
    
    Nhap diem tb 
     Gioi : > 8 va <= 10 
     Kha 8 > va >=6.5 
     tb 6.5 >= > 5 
     yeu < 5 
     let dtb = Number(prompt("Nhap diemn trung binh "));
if(dtb <= 10 && dtb > 8 )
        console.log("Gioi");
    else if(dtb < 8 && dtb >= 6.5 )
        console.log("Kha");
    else  if(dtb < 6.5 && dtb >= 5 )
         console.log("tb");
    else  if(dtb < 5 && dtb >= 0 )
         console.log("Yeu");
    else
        console.log("Diem khong hop le");
 */

function TimXY() {
  let tong = Number(document.getElementById("txtTong").value);
  let hieu = Number(document.getElementById("txtHieu").value);
  /**
        vd x + y = tong 
           x - y = hieu 
           tim ` x  =>  x = (tong + hieu)/2
           tim y => x - hieu
     */
  let x = Number(tong + hieu) / 2;
  let y = Number(x - hieu);
  document.getElementById("txtKQ").value = "Số X  = " + x + "   Số Y =" + y;
  console.log(x);
  console.log(y);
}
function TimBMI() {
  let chieucao = Number(document.getElementById("txtChieuCao").value);
  let cannang = Number(document.getElementById("txtCanNang").value);
  let bmi = Number(cannang / Math.pow(chieucao, 2));
  bmi = Number(bmi.toFixed(2));
  let tb;
  if (bmi >= 35) tb = "Thân Hình Quá béo";
  else if (bmi >= 30 && bmi < 35) tb = "Thân Hình  béo";
  else if (bmi >= 25 && bmi < 30) tb = "Thân Hình  hơi béo";
  else if (bmi >= 18.5 && bmi < 25) tb = "Thân Hình bình thường";
  else if (bmi >= 16 && bmi < 18.5) tb = "Thân Hình  hơi gầy";
  else if (bmi >= 15 && bmi < 16) tb = "Thân Hình  gầy";
  else if (bmi < 15) tb = "Thân Hình  quá gầy";
  else tb = "Số bạn đưa không hợp lệ " + bmi;
  document.getElementById("txtKQBMI").value = `BMI của bạn ${bmi} -->` + tb;
}

function TimNN(a) {

  let dateObj = new Date(a); // ép kiểu từ chuỗi sang Date
  console.log(dateObj + "adobj");
  let year = Number(dateObj.getFullYear());
  console.log(typeof year);
  let tb = "";
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return (tb = "Năm nhuận");
  } else {
    return (tb = "Năm không nhuận");
  }
}
function TimNT() {
  let month = Number(document.getElementById("txtMonth").value);
  if(month > 0 && month <=12 && !isNaN(month))
    {
        alert("Vui lòng nhập tháng hợp lệ");
        return; // ✋ Dừng hàm, không tính tiếp
    }
    else{
  let tb;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      tb = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      tb = 30;
      break;
    case 2:
      document.getElementById("mainYear").style.display = "block";
    let yearStr = document.getElementById("txtYear").value;
      if (!yearStr) {
        alert("Vui lòng nhập năm khi chọn tháng 2!");
        return; // ✋ Dừng hàm, không tính tiếp
      }
      if(TimNN(yearStr) == 0) 
        {
        alert("Vui lòng nhập năm khi chọn tháng 2!");
        return; // ✋ Dừng hàm, không tính tiếp
      }
      let year = Number(yearStr);
      tb = TimNN(year) ? 29 : 28;
      break;
    default:
      tb = "không hợp lệ";
  } // swithc
    console.log(typeof tb);
  document.getElementById("txtKQNT").value =
    "Tháng " + month + " có " + tb + " ngày";
}

}
