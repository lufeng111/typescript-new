// 对重载的方法进行声明
// 检测数据类型  typeof c
function test7(n: string): number;
function test7(n: number): string;
function test7(c:any): any{
    if(c && typeof c === "string"){
        alert("string")
    }else {
        alert("number")
    }
}
test7("cc");
test7(99);