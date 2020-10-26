

async function getData(){
  return 123;
}
getData().then(data=>console.log(data));


function requestData(value){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(value);
    }, 1000);

  } );
}


async function printData(){
  const data1 = await requestData(10);
  const data2 = await requestData(20);

  console.log(data1, data2);
}

printData();


async function getdataError(){
  console.log('getData 1');
  await Promise.reject();
  console.log("getdata 2");
  await Promise.resolve();
  console.log("getdata 3");
}

getdataError().then(()=>console.log("fulfilled"))
.catch(error=> console.log('reject4ed'));


