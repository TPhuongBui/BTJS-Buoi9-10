function NhanVien(account, fullname, email, password, workday, salary, position, workTime, totalSalary, typeEmployee) {
    this.account = account;
    this.fullname = fullname;
    this.email = email;
    this.password = password;
    this.workday = workday;
    this.salary = salary;
    this.position = position;
    this.workTime = workTime;
    this.totalSalary = tinhTongLuong(Number(salary), position);
    this.typeEmployee = xepLoaiNhanVien(Number(workTime));

    function tinhTongLuong(luongCoBan, chucVu) {
        var luongNhanDuoc = 0;
        switch (chucVu) {
            case "Sếp":
                luongNhanDuoc = luongCoBan * 3;
                break;
            case "Trưởng Phòng":
                luongNhanDuoc = luongCoBan * 2;
                break;
            default:
                luongNhanDuoc = luongCoBan
                break;
        }

        return luongNhanDuoc.toLocaleString();
    }


    function xepLoaiNhanVien(gioLam) {
        var xepLoai = "";
        if(gioLam >= 192){
            xepLoai = "Nhân Viên Xuất Sắc";
        }else if(gioLam >= 176){
            xepLoai = "Nhân Viên Giỏi";
        }else if(gioLam >= 160){
            xepLoai = "Nhân Viên Khá";
        }else{
            xepLoai = "Nhân Viên Trung Bình";
        }

        return xepLoai;
    }


}