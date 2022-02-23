# 数组Api合集

## 改变原数组的方法(9个):

### splice() 添加/删除数组元素

定义： splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目

语法： array.splice(index,howmany,item1,.....,itemX)

参数:
1. index：必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
2. howmany：可选。要删除的项目数量。如果设置为 0，则不会删除项目
3. item1, ..., itemX： 可选。向数组添加的新项目。

返回值: 如果有元素被删除,返回包含被删除项目的新数组

eg1:删除元素
```js
   let a = [1, 2, 3, 4, 5, 6, 7];
    let item = a.splice(0, 3); // [1,2,3]
    console.log(a); // [4,5,6,7]
    // 从数组下标0开始，删除3个元素
    let item = a.splice(-1, 3); // [7]
    // 从最后一个元素开始删除3个元素，因为最后一个元素，所以只删除了7

```

eg2:删除元素
  
```js
  let a = [1, 2, 3, 4, 5, 6, 7];
    let item = a.splice(0,3,'添加'); // [1,2,3]
    console.log(a); // ['添加',4,5,6,7]
    // 从数组下标0开始，删除3个元素，并添加元素'添加'
     let b = [1, 2, 3, 4, 5, 6, 7];
    let item = b.splice(-2,3,'添加1','添加2'); // [6,7]
    console.log(b); // [1,2,3,4,5,'添加1','添加2']
    // 从数组最后第二个元素开始，删除3个元素，并添加两个元素'添加1'、'添加2'

```

eg3:不删除只添加:
  
```js
    let a = [1, 2, 3, 4, 5, 6, 7];
     let item = a.splice(0,0,'添加1','添加2'); // [] 没有删除元素，返回空数组
     console.log(a); // ['添加1','添加2',1,2,3,4,5,6,7]
     let b = [1, 2, 3, 4, 5, 6, 7];
     let item = b.splice(-1,0,'添加1','添加2'); // [] 没有删除元素，返回空数组
     console.log(b); // [1,2,3,4,5,6,'添加1','添加2',7] 在最后一个元素的前面添加两个元素
```
### sort() 数组排序

定义: sort()方法对数组元素进行排序，并返回这个数组。

参数可选: 规定排序顺序的比较函数。

默认情况下sort()方法没有传比较函数的话，默认按字母升序，如果不是元素不是字符串的话，会调用toString()方法将元素转化为字符串的Unicode(万国码)位点，然后再比较字符。
```js
  // 字符串排列 看起来很正常
    var a = ["Banana", "Orange", "Apple", "Mango"];
    a.sort(); // ["Apple","Banana","Mango","Orange"]
    // 数字排序的时候 因为转换成Unicode字符串之后，有些数字会比较大会排在后面 这显然不是我们想要的
    var	a = [10, 1, 3, 20,25,8];
    console.log(a.sort()) // [1,10,20,25,3,8];
```

#### 比较函数的两个参数：
sort的比较函数有两个默认参数，要在函数中接收这两个参数，这两个参数是数组中两个要比较的元素，通常我们用 a 和 b 接收两个将要比较的元素：


* 若比较函数返回值<0，那么a将排到b的前面;
* 若比较函数返回值=0，那么a 和 b 相对位置不变；
* 若比较函数返回值>0，那么b 排在a 将的前面；

#### sort排序常见用法：

1. 数组元素为数字的升序、降序:
```js
 var array =  [10, 1, 3, 4,20,4,25,8];
 // 升序 a-b < 0   a将排到b的前面，按照a的大小来排序的 
 // 比如被减数a是10，减数是20  10-20 < 0   被减数a(10)在减数b(20)前面   
 array.sort(function(a,b){
   return a-b;
 });
 console.log(array); // [1,3,4,4,8,10,20,25];
 // 降序 被减数和减数调换了  20-10>0 被减数b(20)在减数a(10)的前面
 array.sort(function(a,b){
   return b-a;
 });
 console.log(array); // [25,20,10,8,4,4,3,1];

```

2. 数组多条件排序:
```js
var array = [{id:10,age:2},{id:5,age:4},{id:6,age:10},{id:9,age:6},{id:2,age:8},{id:10,age:9}];
     array.sort(function(a,b){
         if(a.id === b.id){// 如果id的值相等，按照age的值降序
             return b.age - a.age
         }else{ // 如果id的值不相等，按照id的值升序
             return a.id - b.id
         }
     })
  // [{"id":2,"age":8},{"id":5,"age":4},{"id":6,"age":10},{"id":9,"age":6},{"id":10,"age":9},{"id":10,"age":2}] 

```

3. 自定义比较函数，天空才是你的极限
```js

   var array = [{name:'Koro1'},{name:'Koro1'},{name:'OB'},{name:'Koro1'},{name:'OB'},{name:'OB'}];
    array.sort(function(a,b){
        if(a.name === 'Koro1'){// 如果name是'Koro1' 返回-1 ，-1<0 a排在b的前面
            return -1
        }else{ // 如果不是的话，a排在b的后面
          return 1
        }
    })
    // [{"name":"Koro1"},{"name":"Koro1"},{"name":"Koro1"},{"name":"OB"},{"name":"OB"},{"name":"OB"}] 
```


#### pop() 删除一个数组中的最后的一个元素

定义: pop() 方法删除一个数组中的最后的一个元素，并且返回这个元素。

```js
    let  a =  [1,2,3];
    let item = a.pop();  // 3
    console.log(a); // [1,2]
```
#### shift() 删除数组的第一个元素
定义: shift()方法删除数组的第一个元素，并返回这个元素。
```js
     let  a =  [1,2,3];
     let item = a.shift();  // 1
     console.log(a); // [2,3]
```

#### push() 向数组的末尾添加元素
定义: push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
参数: item1, item2, ..., itemX ,要添加到数组末尾的元素

```js
      let  a =  [1,2,3];
      let item = a.push('末尾');  // 4
      console.log(a); // [1,2,3,'末尾']
```
#### unshift() 方法可向数组的开头添加一个或更多元素
定义: push() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
参数: item1, item2, ..., itemX ,要添加到数组开头的元素

```js
      let  a =  [1,2,3];
      let item = a.push('开头');  // 4
     console.log(a); // ['开头',1,2,3]
```
#### reverse() 颠倒数组中元素的顺序
定义: reverse() 颠倒数组中元素的顺序

```js
        let  a =  [1,2,3];
        a.reverse();  
        console.log(a); // [3,2,1]
```

#### ES6: copyWithin() 指定位置的成员复制到其他位置

定义: 在当前数组内部，将指定位置的成员复制到其他位置,并返回这个数组。

参数:三个参数都是数值，如果不是，会自动转为数值.
   1,target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
   2,start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示倒数。
   3,end（可选）：到该位置前停止读取数据，默认等于数组长度。使用负数可从数组结尾处规定位置。
   
   ```js
  // -2相当于3号位，-1相当于4号位
        [1, 2, 3, 4, 5].copyWithin(0, -2, -1)
        // [4, 2, 3, 4, 5]
        var a=['OB1','Koro1','OB2','Koro2','OB3','Koro3','OB4','Koro4','OB5','Koro5']
        // 2位置开始被替换,3位置开始读取要替换的 5位置前面停止替换
        a.copyWithin(2,3,5)
        // ["OB1","Koro1","Koro2","OB3","OB3","Koro3","OB4","Koro4","OB5","Koro5"] 

```


#### ES6: fill() 填充数组
定义: 使用给定值，填充一个数组。

参数:
 1,第一个元素（必需）：要填充数组的值。
   2,start（可选）：填充的开始位置,默认值为0
   3,end（可选）：填充的结束位置，默认是为this.length。
   
   ```js
  ['a', 'b', 'c'].fill(7)
    // [7, 7, 7]
    ['a', 'b', 'c'].fill(7, 1, 2)
    // ['a', 7, 'c']
```


## 不改变原数组的方法(8个):

#### slice() 浅拷贝数组的元素
定义:  方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象，且原数组不会被修改。
语法:  array.slice(begin, end);

参数:  

begin(可选): 索引数值,接受负值，从该索引处开始提取原数组中的元素,默认值为0。

end(可选):索引数值(不包括),接受负值，在该索引处前结束提取原数组元素，默认值为数组末尾(包括最后一个元素)。

```js
   let a= ['hello','world'];
    let b=a.slice(0,1); // ['hello']
    a[0]='改变原数组';
    console.log(a,b); // ['改变原数组','world'] ['hello']
    b[0]='改变拷贝的数组';
     console.log(a,b); // ['改变原数组','world'] ['改变拷贝的数组']
```
如上：新数组是浅拷贝的，**元素是简单数据类型，改变之后不会互相干扰。**

如果是**复杂数据类型(对象,数组)的话，改变其中一个，另外一个也会改变。**
```js
   let a= [{name:'OBKoro1'}];
    let b=a.slice();
    console.log(b,a); // [{"name":"OBKoro1"}]  [{"name":"OBKoro1"}]
    // a[0].name='改变原数组';
    // console.log(b,a); // [{"name":"改变原数组"}] [{"name":"改变原数组"}]
    // b[0].name='改变拷贝数组',b[0].koro='改变拷贝数组';
    //  [{"name":"改变拷贝数组","koro":"改变拷贝数组"}] [{"name":"改变拷贝数组","koro":"改变拷贝数组"}]

```
原因在定义上面说过了的：slice()是浅拷贝，对于复杂的数据类型浅拷贝，拷贝的只是指向原数组的指针，所以无论改变原数组，还是浅拷贝的数组，都是改变原数组的数据。


#### join() 数组转字符串
定义: join() 方法用于把数组中的所有元素通过指定的分隔符进行分隔放入一个字符串，返回生成的字符串。
语法:  array.join(str)
参数: str(可选): 指定要使用的分隔符，默认使用逗号作为分隔符。
```js
    let a= ['hello','world'];
    let str=a.join(); // 'hello,world'
    let str2=a.join('+'); // 'hello+world'
```
使用join方法或者下文说到的toString方法时，当数组中的元素也是数组或者是对象时会出现什么情况？
```js
    let a= [['OBKoro1','23'],'test'];
    let str1=a.join(); // OBKoro1,23,test
    let b= [{name:'OBKoro1',age:'23'},'test'];
    let str2 = b.join(); // [object Object],test
    // 对象转字符串推荐JSON.stringify(obj);
```
所以，join()/toString()方法在数组元素是数组的时候，会将里面的数组也调用join()/toString(),如果是对象的话，对象会被转为[object Object]字符串。


#### toLocaleString() 数组转字符串
定义: 返回一个表示数组元素的字符串。该字符串由数组中的每个元素的 toLocaleString() 返回值经调用 join() 方法连接（由逗号隔开）组成。

语法:  array.toLocaleString()
```js
 let a=[{name:'OBKoro1'},23,'abcd',new Date()];
 let str=a.toLocaleString(); // [object Object],23,abcd,2018/5/28 下午1:52:20    
```
如上述栗子：调用数组的toLocaleString方法，数组中的每个元素都会调用自身的toLocaleString方法，对象调用对象的toLocaleString,Date调用Date的toLocaleString。

#### toString() 数组转字符串 不推荐
定义: toString() 方法可把数组转换为由逗号链接起来的字符串。
语法: array.toString()
该方法的效果和join方法一样，都是用于数组转字符串的，但是与join方法相比没有优势，也不能自定义字符串的分隔符，因此不推荐使用。
当数组和字符串操作的时候，js 会调用这个方法将数组自动转换成字符串
```js
 let b= [ 'toString','演示'].toString(); // toString,演示
   let a= ['调用toString','连接在我后面']+'啦啦啦'; // 调用toString,连接在我后面啦啦啦
```

#### cancat() 方法用于合并两个或多个数组，返回一个新数组。

定义： 方法用于合并两个或多个数组，返回一个新数组。
语法： var newArr =oldArray.concat(arrayX,arrayX,......,arrayX)
参数：arrayX（必须）：该参数可以是具体的值，也可以是数组对象。可以是任意多个。
```js
  let a = [1, 2, 3];
    let b = [4, 5, 6];
    //连接两个数组
    let newVal=a.concat(b); // [1,2,3,4,5,6]
    // 连接三个数组
    let c = [7, 8, 9]
    let newVal2 = a.concat(b, c); // [1,2,3,4,5,6,7,8,9]
    // 添加元素
    let newVal3 = a.concat('添加元素',b, c,'再加一个'); 
    // [1,2,3,"添加元素",4,5,6,7,8,9,"再加一个"]
   // 合并嵌套数组  会浅拷贝嵌套数组
   let d = [1,2 ];
   let f = [3,[4]];
   let newVal4 = d.concat(f); // [1,2,3,[4]]


```

#### indexOf() 查找数组是否存在某个元素，返回下标
定义: 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。

语法: array.indexOf(searchElement,fromIndex)

参数:searchElement(必须):被查找的元素
     fromIndex(可选):开始查找的位置(不能大于等于数组的长度，返回-1)，接受负值，默认值为0。
 ```js
  let a=['啦啦',2,4,24,NaN]
    console.log(a.indexOf('啦'));  // -1 
    console.log(a.indexOf('NaN'));  // -1 
    console.log(a.indexOf('啦啦')); // 0

```   
**注意：** indexOf()不能识别NaN

#### lastIndexOf() 查找指定元素在数组中的最后一个位置
定义: 方法返回指定元素,在数组中的最后一个的索引，如果不存在则返回 -1。（从数组后面往前查找）

语法: arr.lastIndexOf(searchElement,fromIndex)

参数: searchElement(必须): 被查找的元素

      fromIndex(可选): 逆向查找开始位置，默认值数组的长度-1，即查找整个数组。
      
关于fromIndex有三个规则:      
1,正值。如果该值大于或等于数组的长度，则整个数组会被查找。
2,负值。将其视为从数组末尾向前的偏移。(比如-2，从数组最后第二个元素开始往前查找)
3,正值。负值。其绝对值大于数组长度，则方法返回 -1，即数组不会被查找。
```js
 let a=['OB',4,'Koro1',1,2,'Koro1',3,4,5,'Koro1']; // 数组长度为10
 // let b=a.lastIndexOf('Koro1',4); // 从下标4开始往前找 返回下标2
 // let b=a.lastIndexOf('Koro1',100); //  大于或数组的长度 查找整个数组 返回9
 // let b=a.lastIndexOf('Koro1',-11); // -1 数组不会被查找
 let b=a.lastIndexOf('Koro1',-9); // 从第二个元素4往前查找，没有找到 返回-1

```
#### ES7 includes() 查找数组是否包含某个元素 返回布尔
定义：返回一个布尔值，表示某个数组是否包含给定的值
语法：array.includes(searchElement,fromIndex=0)
参数：searchElement(必须):被查找的元素
      fromIndex(可选):默认值为0，参数表示搜索的起始位置，接受负值。正值超过数组长度，数组不会被搜索，返回false。负值绝对值超过长数组度，重置从0开始搜索。
**includes方法是为了弥补indexOf方法的缺陷而出现的:**

1，indexOf方法不能识别NaN
2，indexOf方法检查是否包含某个值不够语义化，需要判断是否不等于-1，表达不够直观

```js
  let a=['OB','Koro1',1,NaN];
    // let b=a.includes(NaN); // true 识别NaN
    // let b=a.includes('Koro1',100); // false 超过数组长度 不搜索
    // let b=a.includes('Koro1',-3);  // true 从倒数第三个元素开始搜索 
    // let b=a.includes('Koro1',-100);  // true 负值绝对值超过数组长度，搜索整个数组

```      


## 遍历方法(12个):
#### forEach
定义: 按升序为数组中含有效值的每一项执行一次回调函数。
语法：array.forEach(function(currentValue, index, arr), thisValue)
参数: function(必须): 数组中每个元素需要调用的函数。
      1. currentValue(必须),数组当前元素的值
      2. index(可选), 当前元素的索引值
      3. arr(可选),数组对象本身
      thisValue(可选): 当执行回调函数时this绑定对象的值，默认值为undefined

**关于forEach()你要知道：**
* 无法中途退出循环，只能用return退出本次回调，进行下一次回调。
* 它总是返回 undefined值,即使你return了一个值。
```js
  let a = [1, 2, ,3]; // 最后第二个元素是空的，不会遍历(undefined、null会遍历)
    let obj = { name: 'OBKoro1' };
    let result = a.forEach(function (value, index, array) { 
      a[3] = '改变元素';
      a.push('添加到尾端，不会被遍历')
      console.log(value, 'forEach传递的第一个参数'); // 分别打印 1 ,2 ,改变元素
      console.log(this.name); // OBKoro1 打印三次 this绑定在obj对象上
      // break; // break会报错
      return value; // return只能结束本次回调 会执行下次回调
      console.log('不会执行，因为return 会执行下一次循环回调')
    }, obj);
    console.log(result); // 即使return了一个值,也还是返回undefined
    // 回调函数也接受接头函数写法

```
#### every 检测数组所有元素是否都符合判断条件
定义: 方法用于检测数组所有元素是否都符合函数定义的条件
语法：array.every(function(currentValue, index, arr), thisValue)
方法返回值规则:
1,如果数组中检测到**有一个元素不满足，则整个表达式返回 false**，且剩余的元素不会再进行检测。
2,如果所有元素**都满足条件**，**则返回 true。**=

```js
 function isBigEnough(element, index, array) { 
      return element >= 10; // 判断数组中的所有元素是否都大于10
    }
    let result = [12, 5, 8, 130, 44].every(isBigEnough);   // false
    let result = [12, 54, 18, 130, 44].every(isBigEnough); // true
    // 接受箭头函数写法 
    [12, 5, 8, 130, 44].every(x => x >= 10); // false
    [12, 54, 18, 130, 44].every(x => x >= 10); // true

```


