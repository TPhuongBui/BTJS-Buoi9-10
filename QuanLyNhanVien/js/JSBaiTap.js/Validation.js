function Validation() {

    //TODO: KIỂM TRA RỖNG
    this.checkEmpty = function (valueInput, msgErr, spanID) {
        if (valueInput.trim() == "") {
            //? Không hợp lệ
            document.getElementById(spanID).innerHTML = msgErr;

            return false;
        }

        //? hợp lệ
        document.getElementById(spanID).innerHTML = "";
        return true;
    }


    //TODO: KIỂM TRA TÀI KHOẢN CÓ TRÙNG HAY KHÔNG
    this.checkIDNV = function (valueInput, msgErr, spanID, mangNV) {
        var isExit = mangNV.some(function (nv) {
            return nv.account == valueInput; // kiểm tra tài khoản có bị trùng hay không
        })


        if (isExit) {
            //! tài khoản bị trùng => không hợp lệ
            document.getElementById(spanID).innerHTML = msgErr;
            return false;
        }

        //? hợp lệ
        document.getElementById(spanID).innerHTML = "";
        return true;

    }


    //TODO: KIỂM TRA TÊN CÓ HỢP LỆ HAY KHÔNG
    this.checkName = function (valueInput, msgErr, spanID) {

        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảâấầẩẫậắằẳẵặàêẹẻéèẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
        if (valueInput.match(pattern)) {
            //? hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true
        }

        //! không hợp lệ
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }


    //TODO: KIỂM TRA EMAIL CÓ HỢP LỆ HAY KHÔNG

    this.checkEmail = function (valueInput, msgErr, spanID) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (valueInput.match(pattern)) {
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true
        }

        //! không hợp lệ
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }


    //TODO: KIỂM TRA MẬT KHẨU CÓ HỢP LỆ HAY KHÔNG
    this.checkPass = function (valueInput, msgErr, spanID) {
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
        if (valueInput.match(pattern)) {
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true
        }

        //! không hợp lệ
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }


    //TODO: KIỂM TRA ĐỊNH DẠNG NGÀY
    this.checkDate = function (valueInput, msgErr, spanID) {
        var pattern = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
        if (pattern.test(valueInput)) {
            // Hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        }

        //! không hợp lệ
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }


    //TODO: KIỂM TRA LƯƠNG CƠ BẢN CÓ HỢP LỆ HAY KHÔNG
    this.checkSalary = function (valueInput, msgErr, spanID) {
        if (1000000 <= Number(valueInput) && Number(valueInput) <= 20000000) {
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        }

        //! không hợp lệ
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }



    //TODO: KIỂM TRA CHỨC VỤ CÓ HỢP LỆ HAY KHÔNG
    this.checkDropdown = function (selectID, msgErr, spanID) {
        var index = document.getElementById(selectID).selectedIndex;
        if (index == 0) {
            //! không hợp lệ
            document.getElementById(spanID).innerHTML = msgErr;
            return false;
        }

        // hợp lệ
        document.getElementById(spanID).innerHTML = "";
        return true
    }


    //TODO: KIỂM TRA SỐ GIỜ CÓ HỢP LỆ HAY KHÔNG
    this.checkTime = function (valueInput, msgErr, spanID) {
        if (80 <= Number(valueInput) && Number(valueInput) <= 200) {
            // hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        }

        //! không hợp lệ
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }
}

