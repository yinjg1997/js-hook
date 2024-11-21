# js-hook油猴脚本使用方法
 
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

// 进行 hook
h = hook("window.tool.calc")

h.fake(()=>"替换原函数", false) // 以后再执行 tool.calc() 就变成执行 ()=>"替换原函数" 了
h.fake((...args)=>console.log(args), false)  // 可以得到传入被 hook 函数的参数

h.fakeArg("假参数1", "假参数2", "...") // 以后再执行 tool.calc() 就变成执行 tool.calc("假参数1", "假参数2", "...") 了

h.fakeRst("假结果1") // 以后再执行 tool.calc() 结果就只能是 "假结果1" 了,

h.off() // 关闭所有 hook
```

