<!--
 * @Author: your name
 * @Date: 2021-11-29 15:23:53
 * @LastEditTime: 2021-12-01 14:34:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \VuePress\vuepress-starter\docs\fontend\html\html1.md
-->


## 代码
```js
var members = {}; // 初始化一个空对象,用于接收后台要返回的对象,然后通过DOM(innerHTML方式，字符串拼接)操作,将数据内填充到页面中指定的位置,当然下面的是伪代码模拟一下
axios.get("/api/mock/linker.json")
.then(res=>{
  res = res.data;
  if(res.ret == true){
   let data = res.data;
   this.members = data.members;
  }
})
function showName(){
  for(key in this.members){
    for(var i=0;i<members[key].length;i++){
      for(j in members[key]) {
       console.log(members[key][j].name)
      }
    }
  }
}

}
```
