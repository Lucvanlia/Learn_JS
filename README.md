# Learn_JS
============================ BÀI 17========================================
                               
Bài tập 13: Viết chương trình nhập vào điểm trung bình, và xuất ra kết quả xếp loại của học sinh theo tiêu chuẩn sau: (dùng toán tử 3 ngôi ) 
Giỏi: Nếu Điểm >= 8 
Khá: Nếu 8 > Điểm >= 6.5 
Trung bình: Nếu 6.5 > Điểm >= 5 
Yếu: Nếu Điểm < 5 
Biến = biểu_thức_1 ? Biểu thức 2 : (biểu thức 1' ? Biểu thức 2' : biểu thức 3) 
===============================END==========================================
- Giá trị được coi là "falsy" (giá trị sai) 
Những giá trị này khi được chuyển đổi thành kiểu Boolean → sẽ mang giá trị false Ngược lại, các giá trị không phải là "falsy" được coi là "truthy" (giá trị đúng). 
1. false: Giá trị Boolean false luôn là "falsy". 
2. 0: Số không (0) được coi là "falsy". 
3.-0: Số âm không (-0) cũng là "falsy". 
4. 0n: Số BigInt không (0n) cũng là "falsy". 
5. "": Chuỗi rỗng (không có ký tự nào) cũng là "falsy". 
6. null: Giá trị null được coi là "falsy". 
7. undefined: Giá trị undefined cũng là "falsy". 
8. NaN: Giá trị NaN (Not-a-Number) được coi là "falsy". 
===============================================================================
Cú pháp: 
switch (biểu_thức) 
case giá_trị1: 
// Đoạn mã được thực thi nếu biểu_thức có giá trị là giá_trị1 
break; 
case giá_trị2: + 
// Đoạn mã được thực thi nếu biểu_thức có giá trị là giá_trị2 
break; 
// Các case khác ở đây... 
default: 
// Đoạn mã được thực thi nếu không có trường hợp nào khớp 
ứng dụng cho tìm số ngày trong tháng let month = parseInt(prompt("Nhập tháng vào"))
switch (month )
{
    case 1 :
    case 3 :
    case 5 :
    case 7 :
    case 8 :
    case 10 :
    case 12 :
         console.log("31 ngày")
        break
    case 4 :
    case 6:
    case 9 :
    case 11 :
        console.log("30 ngày")
        break
    case 2 :
         console.log("29 or 28 ngày")
        break
    default :
         console.log("Không phải số")

    break
}// kt swith 