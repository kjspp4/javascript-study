// 1. 홀수 n  개 더하기.
const log = console.log;

function f1(limit , list){
    let acc = 0;
    for(const a of list){
        if(a%2){
            acc+=a;
            log(a);
            if(--limit == 0) break;
        }

    }
}

f1(3, [1,2,3,4,5,6,7,8,9,10]);