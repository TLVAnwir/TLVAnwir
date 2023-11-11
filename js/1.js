biểu diễn biến số
var a=   ;

console.log("   ") in nội dung ra màn hình console
alert("   ") hiện thị nội dung ra 1 hộp thoại thông báo
document.write("   ")thêm nội dung vào đúng câu lệnh được gọi
text note nội dung dùng // biến tất cả các nội dung đằng sau trên 1 dòng là ghi chú
muốn 1 đoạn thì dùng /*   */

&& phép và (kết hợp điều kiện) //tất cả true thì mới true
|| phép hoặc (lựa chọn 1 điều kiện đúng) // chỉ cần 1 true là true

khi dùng if else nếu có 1 khối lệnh thì phải cho vào dấu {} còn 1 thì thôi
kết thúc 1 câu lệnh phải có dấu ;
vd:
if (a>c){
    a=6;
    alert("a=6");
}

// Vòng lặp
for(;điều kiện;){
    
}


while giống như python
1 số lệnh của while can thiệp vào vòng lặp
break vòng lặp dừng ngay lập tức
continue vòng lặp bỏ những lệnh sau và bắt đầu chạy vòng mới
còn dạng khác của while
do{
    // các lệnh bị lặp
}while(điều kiện)
Cú pháp này đảm bảo lệnh được chạy ít nhất 1 lần r mới kiểm tra điều kiện

cú pháp so sánh khác switch...case
vd:
switch(Anwir(tên biến cần so sánh)) {
    case 50 :{câu lênnhj 1...,break}
    case "xin chào" :{câu lên 2,...,break}
    default::{câu lênnhj 3...,break}
}
biến Anwir nếu =50 thì thực hiện lệnh 1 ="xin chào" thì thực hiện lệnh 2 còn ko thì thực hiện 3 giống else của if


//hàm function
function tenham(thamso1,thamso2){
    //câu lệnh
}
tenham(giatrithamso1,giatrithamso2 (hoặc dùng biến));
return giống python
function tinhtong(a,b){
    return a+b
}
var tong=tinhtong(5,10);
alert(tong);
đặt biến tong gắn cho hàm tinhtong() để lấy giá trị return là a+b 
=> tong=a+b=15

//xử lý lỗi
try{
    //đoạn code có thể xảy ra lỗi
    //bị lỗi sẽ dừng ngay và chuyển xuống dưới
}catch(e){
    //chỗ xử lý lỗi hoặc dùng để thông báo xem bị lỗi gì
    alert(e.messsage)
}

//Tạo lệnh nếu gặp lỗi trong quá trình nhập dữ liệu
vd if (b/0){
    throw "không thể chia cho 0";
}
khi này lỗi nó sẽ gắn cho biến e ở catch còn không sẽ ở trong màn hình console
hiện lỗi =>  catch(e) {alert("lỗi"+e);}

//Mảng Array
var ten_bien=[''giatri1'',''giatri2'',''giatri3'',...];
lấy giá trị trong mảng
từng giá trị được đánh số từ 0 đến hết
var ha=ten_bien[0]; //=> ha ="giatri1"
//thêm giá trị vào Array
ten_bien[4]="Anwir"
//Có thể gắn id cho từng giá trị để lấy ra dễ dàng hơn thay vì dùng số
ten_bien[Andy]="Anwir"; // khi gọi ra chỉ gần ten_bien[Andy] sẽ ra Anwir

//Phương thức hỗ trợ chuỗi( các phương thức phân biệt viết hoa viết thường nên cần chú ý)
vd Andy là 1 biến kiểu chuỗi
Andy.length => độ dài chuỗi
Andy.indexOf("Anwir")=> tìm từ Anwir đầu tiên tìm thấy trong chuỗi
Andy.lastIndexOf("Anwir") => tìm từ Anwir cuối cùng tìm thấy trong chuỗi
Andy.search("Anwir")=> giống indexOf nhưng có thể dùng regular expressing
Andy.slide(start,end)=> cắt chuỗi con trong chuỗi Andy từ vị trí start tới trước vị trí end
Andy.substr(start,length)=>cắt chuỗi con trong chuỗi Andy từ vị trí start lấy length kí tự
Andy.split(" ") tìm các kí tự đc điền trong "" để cắt thành các mảng 