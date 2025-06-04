// check tìm kiếm
let number = parseInt(
  prompt(
    `Chọn cách tìm kiếm : \n 1.tìm kiếm theo tên  \n 2.Tìm kiếm theo tác giả \n 3.Tìm kiếm theo nhà xuất bản \n 4. Tìm kiếm theo chủ đề `
  )
);
switch (number) {
  case 1:
    alert("Bạn đã chọn tìm kiếm theo tên");
    break;
  case 2:
    alert("Bạn đã chọn tìm kiếm theo Tác giả");
    break;
  case 3:
    alert("Bạn đã chọn tìm kiếm theo Nhà xuất bản");
    break;
  case 4:
    alert("Bạn đã chọn tìm kiếm theo tiêu đề");
    break;
    default:
    alert("Số bạn nhập vào không hợp lệ");
    
        break;
} // END SWITH
