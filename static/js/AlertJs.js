/**
 *
 * Created by orange on 16/4/26.
 */
//常量
    const CONSTANT=3.14;
//全部变量,避免冲突
var allConstance={

};
allConstance.Name='黄城';
alert(`dawd
       dwadwa
       dwa`);
21312331.3;
var b=2;
var arry='ffsaWdadwaDWA';
var person={
    tag:['sunshine',170,'120.5'],
    age:24,
    city:"jiangxi",
    boy:true,
    zipeCode:null,
    'special-name':'黄城'
};

person.school='江西理工大学';



var ar=['dawano32',1243,null,person,true];
var copyAr=ar.slice();
ar.push('你好','我的名字叫','黄城');
console.log('ar内容添加:'+ar);
ar.pop();
ar.pop();
ar.pop();
console.log('ar内容删除:'+ar);
delete person.city;
alert('名字:'+person['special-name']+'school:'+person.school+'城市'+person.city);
console.log('存在吗?'+person.hasOwnProperty('boy'));
console.log('存在吗??'+person.hasOwnProperty('toString'));
//数组跟普通变量的区别
ar[0]='哈哈';
console.log('区别:'+ar);
arry[1]='A';

console.log('ar.length:'+ar.length+person.age);
console.log('arr3:'+arry.toUpperCase());
console.log(b+223242.1);
isNaN(12312);
a=[21,'2342',3242.24324];


console.log('i\'m,\"Orange\"');
console.log(person.age);

var c=123;
c='orange';

//循环
var x=0;
var  i=0;
//由于JavaScript的变量作用域实际上是函数内部，我们在for循环等语句块中是无法定义具有局部作用域的变量的：
for (var i=0;i<11;i++){
    // console.log(x=x+i);
}
for(var key in person){
    console.log(key);
}
//set map


var set=new Set();
set.add('dwadoi');
set.add('ybinjl');
console.log('set'+set.has('dwadoi'));

//iterable
set.forEach(function (element,index,array) {
    console.log('element:'+element+'-index:'+index+'array:'+array);
})

//function test
var func=function (x,y) {

}

function add(a, b) {
    console.log('window+i'+window.i);
    console.log('参数长度'+arguments.length);//类似于array
    return a+b;
}
console.log('add'+add(23,1231));
add(3,34,21,5,1);
console.log('addUmName'+func(204,8));
//获取可变参数

function test(a, b, ...rest) {

    return{ name:a+b}
    console.log('test:'+rest);
}
test(2,1,2,3,4,5,6);

//part work
var bb=function (a) {
    for(let  i=0;i<a;i++){
        console.log('哦让:'+i);
    }
};
console.log(bb(2));

//apply 指定this的指向
var birth=0;
function getAge() {
    var age=new Date().getFullYear();
    return age-this.age;
}
var huangcheng={
    name:'黄城',
    age:24,
    height:170
};
console.log('huangchengAge:'+huangcheng.age);
console.log('huangchengAge+:'+getAge.apply(huangcheng,[]));

//高阶函数
function add(x) {
    return x+1;
}
function getTotal(a, b, f) {
    return f(a)+f(b);
}

console.log('高阶'+getTotal(1,1,add));
//map高阶
var arr4=[1,324,1,6,2,1,1];
var arr5=arr4.map(add);
console.log('map之后;'+arr5);
//测试题
function string2int(s) {
    return 0;
}
var ss='12345321';
var after=ss.split('');
console.log('ss:'+after);

after.map(function(x){
    return x+2;
});
console.log(after);
var cc = [
    [74.0995, -99.92615],
    [74.14008, -99.4043],
    [74.07691, -99.33838],
    [74.03617, -99.86023]
];
var getCentroid = function (arr) {
    var a = [0, 0];
    for (var i = 0; i < arr.length; i++) {
        var b = arr[i];
        a = [a[0] + b[0]/arr.length, a[1] + b[1]/arr.length];
    }
};
// var dd = getCentroid(cc);
console.log("center"+getCentroid(cc));

