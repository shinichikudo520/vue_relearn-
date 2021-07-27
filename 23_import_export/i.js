// 1. import导入的常用写法
import { name, age, flag } from "./o.js";
console.log(name, age, flag);

// 2. import导入的写法2----> 对应导出方法2
import { name1, age1, flag1 } from "./o.js";
console.log(name1, age1, flag1);

// 3. import函数
import { sum } from "./o.js";
console.log(sum(100, 100));

// 4. import类
import { Person } from "./o.js";
const p = new Person();
p.run();

// 5. import -> export default
import add from "./o.js";
add();

// 6. 统一全部导出
import * as info from "./o.js";
console.log(info.name, info.age, info.flag);
