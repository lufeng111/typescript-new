
// class Person<T> {

// }
// class UserInfo {
//     name: string;
//     age: number;
// }
// var a = new Person<UserInfo> () 
// // 这里T 也只是一个占位符
// interface School<T> {
//     // 添加一个方法add(),传入的数据类型是T,但是Student 继承的时候传入UserInfo，返回值是boolean类型
//     add(n: T): boolean;
// }
// // Student 继承implements School 这个类 
// class Student implements School<UserInfo> {
//     add(n: UserInfo): boolean {
//        return true;
//     }

// }



// 数据访问层，接口的声明，定义接口
// typescript中定义接口建议前面加上 I , 表示这是一个接口类型
// Idate加上<T>， 表示这是一个泛型接口，对批量的对象进行一个泛型的定义
interface Idate<T> {
    Add(info: T): boolean;
    Delete(info: T): boolean;
    Update(info: T): T;
    Search(id: number): T;
}
// 如果要实现这个接口，需要定义一个类,如果需要实现一个泛型接口，这个类也是泛型的（在Data后面加上<T> ）
// 对MysqlData的访问,
class MysqlData<T> implements Idate<T>{
    Add(info: T): boolean {
        return undefined;
    }    
    Delete(info: T): boolean {
        return undefined;
    }
    Update(info: T): T {
        return undefined;
    }
    Search(id: number): T {
        return undefined;
    }
}
// 对MssqlData 的访问
class MssqlData<T> implements Idate<T>{
    Add(info: T): boolean {
        return undefined;
    }   
     Delete(info: T): boolean {
        return undefined;
    }
    Update(info: T): T {
        return undefined;
    }
    Search(id: number): T {
        return undefined;
    }
}
// 创建User的类
class UserInfo {

}
// MysqlData<UserInfo> 把UserInfo 传进来，MysqlData作用就是查找UserInfo这张表的数值，一但继承之后，UserData就可以通过this使用MysqlData 中继承的方法
class UserData extends MysqlData<UserInfo> {
    // 定义一个方法GetUserIndfo，返回的数据受UserInfo 的约束
    public GetUserIndfo(n: number): UserInfo {
        return this.Search(n)
    }
}
 
