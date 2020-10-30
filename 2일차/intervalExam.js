

 

const flashText =  (a, b)=>{ 
    console.log(a); 
    console.log(b); 
}

// 함수를 주기적으로 실행한다. 
/*
    반환 된 intervalID는 setInterval () 호출에 의해 
    생성 된 타이머를 식별하는 0이 아닌 숫자 값입니다. 
    이 값은 WindowOrWorkerGlobalScope.clearInterval ()에 
    전달되어 제한 시간을 취소 할 수 있습니다.
*/
const nIntervId =  setInterval(flashText, 500, "Parameter 1", "Parmeter 2"   );

console.log(nIntervId);


clearInterval(nIntervId);


