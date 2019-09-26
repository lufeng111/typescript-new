import { StringValidate } from './命名空间和模块化';

// 1: 定义模块 （namespace）
// 2: export/ import
// 3: 三斜线指令 ， 使用三斜线导入依赖项

// 表示在当前的项目中创建了一个Model1 的命名空间
// 现在在Validate 命名空间下的类StringValidate，NumberValidate 都没法访问，如果要访问到这个类需要加export
// 通过 export 关键字描述的类，在其外部都是可以访问到的 
namespace Validate {
    // 定义一个接口ValidateData
    interface ValidateData {
        checkData(n: any): boolean;
    }
    // export class StringValidate implements ValidateData {
    class StringValidate implements ValidateData {
        checkData(n: any): boolean {
            if(n && typeof n === "string") {
                return true;
            }else {
                return false;
            }
        }
        
    }
    // export class NumberValidate implements ValidateData {
    class NumberValidate implements ValidateData {
        checkData(n: any): boolean {
            if( n && typeof n === "number") {
                return true;
            }else {
                return false;
            }
        }
        
    }
}


//  新建一个页面//   三斜线一般写在整个文件的顶部，reference意思在这个模块里引入另外一个模块文件，path="" 要引入模块的的物理路径，
/// <reference path="./Validate" />
// 在上面引入之后就可以找到Validate 和 StringValidate 
let m1 = new Validate.StringValidate()
