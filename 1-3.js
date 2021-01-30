// 즉시 실행 함수 var 변수 의 스코프를 해결 할수 있음..
console.clear();
(function () {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
})();

for (var i = 0; i < 10; i++) {
    console.log(i);
}
//  해당 변수 실행 하면  아래에서 변수를 쓸수 있음..
console.log("last:", i);
