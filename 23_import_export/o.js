// 1. export常用写法
let name = "小明";
let age = 18;
let flag = true;

export { name, age, flag };

// 2. export的写法2
export let name1 = "小红";
export let age1 = 20;
export let flag1 = false;

// 3. export导出函数
export function sum(n1, n2) {
  return n1 + n2;
}

// 4. export导出类
export class Person {
  run() {
    console.log("在奔跑...");
  }
}

// 5. export default：导出模块的默认值，import时不需要加{}，且可以自定义名称
//  注意：export default一个模块有且只能有一个
// let address = "深圳";
// export default address;
export default function () {
  console.log("export default...");
}
