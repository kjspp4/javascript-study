// 프로미스 객체 생성방법. 정리. .

// const p1 = new Promise((resolve, reject)=>{});
// const p2 = Promise.reject('errmessage');
// const p3 = Promise.resolve(param);


// 프로미스 객체가 가질수 있는 3개의 상태.. 
// 대기중 (pending)  // 비동기 상태가 끝나지 않은 상태.. 
// 성공 (fulfilled)  // 비동기 상태가 끝나고 성공.. 
// 실패 (reject)   // 실패.. 

//Promise.resolve(123).then(data=>console.log(data));
//Promise.reject("error").then(null, data=>console.log(data));



function requestData1(){
  return new Promise( (resolve, reject)=>{
    setTimeout(()=>{
      resolve(200000);
    }, 1000);
  }); 
}

function requestData2(){
  return new Promise( (resolve, reject)=>{
    setTimeout(()=>{
      resolve(100000);
    }, 1000);
  }); 
}

    // ---  서버 통신할경우 .. 
    console.log("===============================");
    requestData1().then(data=>console.log(data));
    requestData2().then(data=>console.log(data));

//  둘다 참이어야 함. .
Promise.all([requestData1(), requestData2()]).then( (data1, data2)=>{
     console.log(data1, data2);
} );








// requestData1()
//   .then(data=>{
//     console.log(data);
//     return requestData2();
//     })
//    .then(data=>{
//     console.log(data);
//     return data+1;
//   })
//   .then(data=>{
//     console.log(data);
//     throw new Error('some error');
//   })
//   .then(null, error=>{
//     console.log("error");
//   });


//   Promise.resolve(10)  // 캐치를 입력받자.. 
//     .then(data=>{
//       console.log(data);
//       throw new Error("some ERROR");
//     })
//     .catch(error=>{
//       console.log(error);
//     })
//     .finally(data=>{
//       console.log('onFinallly')
//     });




