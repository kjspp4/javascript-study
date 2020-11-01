
const log = console.log;

;


const shuffle=(val) => {
    let array =  Array(val).fill().map((v, i)=>i+1);
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array)
}


shuffle(40);