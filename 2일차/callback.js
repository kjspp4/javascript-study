
function requestData(callback){

  setTimeout(()=>{
    callback({name:'kjm ', age:11});
  }, 2000);
};


function onSucess(data){
  console.log(data);
}

console.log("request data")
requestData(onSucess);



