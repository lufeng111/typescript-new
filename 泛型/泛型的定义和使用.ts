
// <T> 任意的类型，类型安全的
// args 传入的参数，定义为T类型，返回值类型也为T类型, T可以被任意字母代替，但是前后必须保持一致
function demo<T>(args: T): T {
    return args;
}

// 编程的时候讲究代码的 高内聚低耦合，代码可复用性
function test1(n: string): boolean {
    return true;
}
function test2(n: number): string {
    return ""
}
// 现在把test1, 和test2合并成一个方法test3，提高代码的可读性
function test3(n: any): any {
    return n;
}
test1("lufeng");

// test5<T> 这个T 只是占位符，
function test5<T>(n: T): T {
    return n;
}
// 注意调用test5的时候，T是什么类型，n就要传什么类型的值
test5<number>(10)