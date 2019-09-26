interface ValidateData {
    checkData(d: any): boolean;
}
class StringValidate implements ValidateData {
    checkData(d: any): boolean {
        if(d && typeof d === "string"){
            return true;
        }else {
            return false;
        }
    }
}

class NumberValidate implements ValidateData {
    checkData(d: any): boolean {
        // typeof 返回的数据类型是string格式的
        if(d && typeof d === "number") {
            return true;
        }else {
            return false;
        }
    }
}
let data = "lufeng";
// 使用关键字new 一个实例化对象
let sv = new StringValidate();
let nv = new NumberValidate();
alert(sv.checkData(data));
alert(nv.checkData(data));

