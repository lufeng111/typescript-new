// 定义接口, 接口定义的是一种规范和限制
// 在接口里面我们声明动作和属性，并不包括实现的部分
interface DoSomething {
    // 这里定义的是两个方法
    shopping(n: number): string;
    eating(n: number): string;
    
}
// 接口可以规范类的行为和属性
// Student 要遵循上面的接口，需要用到implements, implements的作用是实现了DoSomething这个接口，并且实现了这个接口的方法和动作
class Students implements DoSomething {
    shopping(n: number): string{
        return "yifu";
    }

    eating(n: number): string{
        return "ok"
    }
}

// 函数定义类型（完整的函数声明） 函数名:(参数列表...) => 返回值
let test4: (n: string, addr: string) => number = function (n: string, addr: string): number{
    return 89;
}

// 接口对函数的约定， 主要定义函数的参数和返回值
// 对批量的函数定义才有价值，
interface myFunction{
    (n: string, a: number): boolean;
}
let fun1: myFunction;
fun1 = function(n: string, a: number): boolean {
    return false;
}
let fun3: myFunction;
fun3 = function(n: string, a: number): boolean {
    return true;
}
// 一般用于单个函数
let fun2: (n: string, a: number) => string = function(n: string, a: number): string{
    return "ok"
}


// 接口对数组的约束和规范化
interface StringArr {
    // [] 中的index是数组的下标，是number类型的, string是这个数组中只能放
    [index: number]: string;
}
let arr1: StringArr;
arr1 = ["gaga", "ajshj"];


// 接口对json 的规范
// interface Jdata {
//     name: string;
//     age: number;
// }
// function jM(n: Jdata) {
//     alert(JSON.stringify(n));
// }
// // Jdata中没有n ,所以jd会提示报错，新添加addr: "shanghai" 不会报错
// // let jd = {n: "lufeng", age: 18, addr: "shanghai"};
// let jd = {name: "lufeng", age: 18, addr: "shanghai"};
// jM(jd)
interface Jdata {
    name: string;
    age: number;
    addr: string;
    sex?: string;  // 在属性名前面加上？，这个参数可传可不传
}
function jM(n: Jdata) {
    alert(JSON.stringify(n));
}
// 如果接口没有定义这个数据类型，但是可以正常传值，但是已经定义好的数据类型，如果没有使用就会报错
let jd = {name: "lufeng", age: 18, addr: "shanghai"};
jM(jd)

