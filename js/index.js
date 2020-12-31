var a = ()=>{
    console.log('index.js里面的a方法')
}
alert(1)
var b = ()=>{
    console.log('index.js里面的b方法')
}

var sum = function(){
    var num1 = 10;
    var num2 = 20;
    console.log(num1+num2)
}

var obj = {
    c:1,
    d:2
}
let {c,d} = obj;