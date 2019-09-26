class Animal {
    // 通过关键字static 修饰的属性和方法都是叫做类属性和类方法
    static age: string;
    static eat(e: string): void {
        alert("eat something");
    }
}
Animal.age = "dog";
Animal.eat("meat");