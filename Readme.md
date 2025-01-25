# js-hook 油猴脚本使用方法

假设有方法:

```JavaScript
window.tool = {
    calc: function(msg, n) {
        console.warn('calc收到参数：' + msg + ', ' + n);
        var r = n * n;
        console.warn('calc结果：' + r);
        return r;
    }
}

// 原始调用
window.tool.calc("hello hook", 2)

// 进行 hook
h = hook("window.tool.calc")

h.fake(()=>"替换原函数", false) // 以后再执行 tool.calc() 就变成执行 ()=>"替换原函数" 了
h.fake((...args)=>console.log(args), false)  // 可以得到传入被 hook 函数的参数

window.tool.calc("hello hook", 2)

h.data.fn_real("hello hook", 2) // 调用被 hook 的方法

h.fakeArg("假参数1", "假参数2", "...") // 以后再执行 tool.calc() 就变成执行 tool.calc("假参数1", "假参数2", "...") 了

h.fakeRst("假结果1") // 以后再执行 tool.calc() 结果就只能是 "假结果1" 了,

h.off() // 关闭所有 hook
```
实际使用例子:
```JavaScript
const jsonString = '{"key": "value"}';

h = hook("JSON.parse")
h.fake((...args)=>console.log(args), false)
h.data.fn_real(jsonString) // 调用被 hook 的方法

```

## 编码或加密的一些经验

MD5 提取结果通常是 32 位,不受明文长度影响;
Base64 编码结果末尾通常会出现一或二个等于符号,受明文长度影响
一长串无规律数字与字母组合的字符大概率是 AES、DES、SHA 相关加密;
SHA1 加密结果值为 40 位,不受明文长度影响;
SHA256 加密结果值为 64 位,不受明文长度影响;
另外,AES、RSA 等对称和非对称加密都喜欢将结果值用 Base64 进行编码,这样易于传递;
如果你看到一长串字符里出现+号、\号和末尾的=号,那大既率就是上一行描述的加密算法加密后又进行了 Base64 编码的结果;
但要注意的是 32 位的字符串不一定是 MD5 摘要结果,64 位的也不一定是 SHA 加密结果。
