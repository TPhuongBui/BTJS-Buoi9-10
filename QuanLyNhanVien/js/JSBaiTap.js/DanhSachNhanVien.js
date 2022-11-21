function DanhSachNhanVien() {
    this.mangNV = [];

    // Phương thức
    //? input: nhân viên, output: lưu nhân viên vào mảng
    this.themNV = function(nv){
        // thêm phần tử nhân viên vào mảng
        this.mangNV.push(nv);
    } 

    //? tìm vị trí
    this.timViTri = function(maNVXoa){
        var viTri = -1;

        viTri = this.mangNV.findIndex(function(nv){
            return maNVXoa == nv.account
        });
    
        return viTri;
    }

    //? Xóa nhân viên
    this.xoaNV = function(maNVXoa){
        var viTri = this.timViTri(maNVXoa);
        if (viTri != -1) {
            this.mangNV.splice(viTri,1);
        }
    }

    //? cập nhật nhân viên
    this.capNhatNV = function(nvCapNhat){
        var viTri = this.timViTri(nvCapNhat.account);
        if(viTri > -1){
            dsnv.mangNV[viTri] = nvCapNhat;
        }
    }
    
}

DanhSachNhanVien.prototype.timXLNV = function(keySearch){
    var mangKetQua = [];
    // Bước 1: chuyển từ khóa tìm kiếm sang kiểu chữ thường, xóa khoảng trắng(replace(/\s/g,"")
    var tuKhoa = keySearch.toLowerCase().replace(/\s/g,"");
    console.log(tuKhoa);

    this.mangNV.map(function(nv){
    // Bước 2: chuyển tên sv sang kiểu chữ thường(toLowerCase), xóa khoảng trắng(replace(/\s/g,"")

        var loaiNV = nv.typeEmployee.toLowerCase().replace(/\s/g,"");
        console.log(loaiNV);

        // Bước 3: so sánh tên sv có chứa từ tìm kiếm không
        var viTriTuKhoa = loaiNV.indexOf(tuKhoa);
        console.log(viTriTuKhoa);
        if(viTriTuKhoa > -1){
             //tìm thấy
             mangKetQua.push(nv);
        }
    })

    return mangKetQua;
}