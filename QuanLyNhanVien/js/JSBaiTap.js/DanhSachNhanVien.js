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