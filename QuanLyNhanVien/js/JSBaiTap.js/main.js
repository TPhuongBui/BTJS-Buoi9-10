// Global
const dsnv = new DanhSachNhanVien();
// const validation = new validation();

// hàm rút gọn cú pháp document.getElemenById
function getELE(id) {
    return document.getElementById(id);
}

function setLocalStorage() {
    //? lưu mảng nhân viên xuống localStorage
    localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
}

function getLocalStorage() {
    if (localStorage.getItem("DSNV") != null) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        hienThiTable(dsnv.mangNV);
    }
}

getLocalStorage();

function addEmploy() {
    const validation = new Validation();
    var account = getELE("tknv").value;
    var fullname = getELE("name").value;
    var email = getELE("email").value;
    var password = getELE("password").value;
    var workday = getELE("datepicker").value;
    var salary = getELE("luongCB").value;
    var position = getELE("chucvu").value;
    var workTime = getELE("gioLam").value;
    // console.log(account, fullname, email, password, workTime, workday, salary, position );

    // xử lý dữ liệu cho user
    account = account.replace(/\s/g,"");
    console.log(account);

    var isValid = true;

    // TÀI KHOẢN
    //? account: kiểm tra rỗng, tài khoản không được trùng
    isValid &= validation.checkEmpty(account, "Tài khoản không được để trống", "tbTKNV") && validation.checkIDNV(account,"Mã sinh viên đã tồn tại","tbTKNV", dsnv.mangNV);

    // TÊN NHÂN VIÊN
    //? Kiểm tra rỗng và kiểm tra hợp lệ
    isValid &= validation.checkEmpty(fullname,"Tên nhân viên không được để trống","tbTen") && validation.checkName(fullname,"Tên sinh viên không phù hợp","tbTen");

    // EMAIL NHÂN VIÊN
    //? Kiểm tra rỗng và kiểm tra hợp lệ
    isValid &= validation.checkEmpty(email,"Email nhân viên không được để trống","tbEmail") && validation.checkEmail(email,"Email không hợp lệ","tbEmail");

    // MẬT KHẨU NHÂN VIÊN
    //? Kiểm tra rỗng và kiểm tra hợp lệ
    isValid &= validation.checkEmpty(password,"Mật Khẩu nhân viên không được để trống","tbMatKhau") && validation.checkPass(password,"Mật khẩu phải chứa ít nhất 1 chữ in hoa, 1 chữ thường, 1 số, 1 ký tự đặc biệt và có độ dài từ 6 đến 10 ký tự","tbMatKhau");

    // NGÀY LÀM
    //? Kiểm tra rỗng và kiểm tra hợp lệ 
    isValid &= validation.checkEmpty(workday,"ngày làm không được để trống","tbNgay") && validation.checkDate(workday,"Ngày làm không hợp lệ(tháng/ngày/năm)","tbNgay");

    // LƯƠNG CƠ BẢN
    //? Kiểm tra rỗng và kiểm tra hợp lệ 
    isValid &= validation.checkEmpty(salary,"Lương cơ bản không được để trống","tbLuongCB") && validation.checkSalary(salary,"Lương cơ bản không hợp lệ(Lương từ 1.000.000 đến 20.000.000)","tbLuongCB");

    // CHỨC VỤ
    //? kiểm tra hợp lệ
    isValid &= validation.checkDropdown("chucvu","Bạn chưa chọn chức vụ","tbChucVu");

    // GIỜ LÀM
    //? Kiểm tra rỗng và kiểm tra hợp lệ 
    isValid &= validation.checkEmpty(workTime,"Giờ làm không được để trống","tbGiolam") && validation.checkTime(workTime,"Giờ làm không hợp lệ (giờ làm từ 80 đến 200 giờ)","tbGiolam");



    if (isValid) {
        var nv = new NhanVien(account, fullname, email, password, workday, salary, position, workTime);
        console.log(nv);

        // thêm vào mảng nhân viên
        dsnv.themNV(nv);

        // hiển thị danh sách nhân viên lên table
        hienThiTable(dsnv.mangNV);

        // cập nhật cho localStorage
        setLocalStorage();
    }

}


function hienThiTable(listEmploy) {
    var content = "";
    listEmploy.map(function (nv) {
        console.log(nv);
        content += `<tr>
            <td>${nv.account}</td>
            <td>${nv.fullname}</td>
            <td>${nv.email}</td>
            <td>${nv.password}</td>
            <td>${nv.workday}</td>
            <td>${nv.position}</td>
            <td>${nv.salary}</td>
            <td>${nv.workTime}</td>
            <td>${nv.totalSalary}</td>
            <td>${nv.typeEmployee}</td>
            <td>
            <button class="btn btn-danger" onclick="xoaSinhVien('${nv.account}')">Xóa</button>

            <button class="btn btn-success" onclick="xemChiTiet('${nv.account}')">Xem</button>
        </td>
        </tr>`
    });

    getELE("tableDanhSach").innerHTML = content;
}


