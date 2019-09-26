class Person {

    // 类的成员属性 public private protected
    // public name: string; // 不写public 也可以，都表示公有属性，在外部可以使用，比如constructor和子类都是可以使用的
    // private name: string;  // 表示name 是Person下面的私有属性，外部是不可以访问的，甚至子类Student都是不可以访问的
    protected name: string;  // 子类是可以访问到的，但是如果没有继承Person就不能使用name
    age: number;
    instersts: string[];
    private _contry: string;   // private 表示私有属性，前面加上 _ ,子类不能继承

    // 希望 private 私有属性也能访问到就是set和get方法暴露出来
    set Contry(n: string): void{
        if(n == "China") {
            this._contry = n;
        }else {
            alert("不来自中国，不能注册");
        }
    }
    // 使用get接收这个方法
    get Contry(): string{
        return this._contry;
    }

    // 父类使用构造函数
    constructor(n: string, a: number, i: string[]){
        this.name = n;
        this.age = a;
        this.instersts = i;
    }
    say(): void {
        alert(this.name + ": say hello classes!!!")
    }
}
class Student extends Person {
    schoolName: string;
    // 子类继承父类也使用构造函数 ,需要用关键字super
    constructor(s: string){
        super("zhangsan", 23, ["footer","basketball"])
        this.schoolName = s;
    }
    say(): void {
        alert(this.name + "from" + this.schoolName + ": say hello classes");
    }
}
let s = new Student("bejingdaxue");  // new 一个Student实例，传入形参schoolName,到constructor 构造函数中，因为在Student的构造函数中使用super()关键字已经传值，所以下面就不需要传值了
// set 和 get 方法是赋值，所以这里需要使用等号
s.Contry = "korea";
s.say();