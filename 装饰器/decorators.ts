// 装饰器 @express （@符号，加上表达式express是可变的参数），是一种特殊类型的声明，能够被附加到类声明，方法，访问符，属性或参数上
// 把类和方法，属性等用装饰器装饰之后，就具备了装饰器的功能（比如说方法），同时这个方法还可以在其他地方使用


// 自定义一个Decorator
// 第一个参数target， keyz主要作用是这个装饰器是修饰在类，还是类的方法上面的, desc描述是对元数据的描述 
function validate(target: string, key: string, desc: PropertyDecorator){

}
function checkUser(target: string, key: string, desc: PropertyDecorator){

}
function format(target: string, key: string, desc: PropertyDecorator){
    console.log("format---target:" + target + "-key:"+ key)
}
function test(){}
// 可以在一个类上面添加多个装饰器
// 声明Decorator 类，然后声明一个表达式@validate，
@validate    // 第四
@checkUser   // 第三
class Decorator {

    // 给name添加装饰器format
    @format   // 第一
    name: string;
    constructor(){

    }

    @test  // 第二
    methods(): void {
        console.log("实例方法")
    }
}

// 装饰器的执行顺序： 内部属性先执行，然后是方法，外部装饰器就是从进到远
// 装饰器参数(以下面为例)：target是object,放在类的外面，target指的是整个类， key是name(修饰的是name), 
// function format(target: string, key: string, desc: PropertyDecorator){
//     console.log("format---target:" + target + "-key:"+ key)
// }： 


// 装饰器的创建，以上是直接创建
function testfactory(n: boolean) {
    return function(target, key, desc) {
        console.log("采用工厂函数的方式创建");
    }
}