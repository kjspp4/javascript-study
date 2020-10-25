// var 키워드를 사용하지 않으면 전역 변수가 된다. 
'use strict'
function example1(){
    i = 1;
}

function example2(){
    console.log(i);
}

example1();
example2();