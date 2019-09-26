// typescript中类的定义
// 定义一个person的类，一个类包含两个内容，属性和方法

// 原来的继承
// function Person(){
//     this.name = "";
//     this.age = "";
// }
// Person.prototype.say = function(){
//     alert(this.name + ": say hello classes！！！")
// }

// class Person {
//     // 类的成员属性
//     name: string;
//     age: number;
//     instrestes: string[];  // 兴趣可能是一个数组，string类型的数组，数组里面的内容都是数组
//     // 类的方法属性,也是类的实例方法
//     say(): void{      // 这是一个say方法，方法返回的数据类型是void（是空的数据类型）
//         alert(this.name + ": say hello classes！！！")
//     }
// }
// // Student 这个类首先是一个人所以继承Person, 可以通过extends（扩展）关键字使Student拥有Person所有的属性和方法
// class Student extends Person{
//     // 成员变量
//     schoolName: string;
//     say(): void{
//         alert(this.name + "from" + this.schoolName + ": say hello classes！！！")
//     }
// }
// // 上面用class定义的Person是引用类型的，所以需要通过new关键字实例化一个Person
// // let p = new Person();
// // p.name = "张三";
// // p.age = 18;
// // p.instrestes = ["football", "basketball"];
// // p.say();

// let s = new Student();
// s.name = "zhangsan";
// s.age = 19;
// s.instrestes = ["footer", "backtetball"];
// s.schoolName = "beijing";
// s.say();


// 构造函数
// class Person {
//     name: string;
//     age: number;
//     instersts: string[];
//     // 父类使用构造函数
//     constructor(n: string, a: number, i: string[]){
//         this.name = n;
//         this.age = a;
//         this.instersts = i;
//     }
//     say(): void {
//         alert(this.name + ": say hello classes!!!")
//     }
// }
// class Student extends Person {
//     schoolName: string;
//     // 子类继承父类也使用构造函数 ,需要用关键字super
//     constructor(s: string){
//         super("zhangsan", 23, ["footer","basketball"])
//         this.schoolName = s;
//     }
//     say(): void {
//         alert(this.name + "from" + this.schoolName + ": say hello classes");
//     }
// }
// let s = new Student("bejingdaxue");  // new 一个Student实例，传入形参schoolName,到constructor 构造函数中，因为在Student的构造函数中使用super()关键字已经传值，所以下面就不需要传值了
// s.say();




// typescript中类的继承