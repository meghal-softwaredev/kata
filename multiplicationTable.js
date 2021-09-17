//https://gist.github.com/meghalshah210/1dfe0ca7ff072de5b8f0ef00cfa01a6c
const multiplicationTable = function(maxValue) {
  let mult = [],multiply = "";
  for(let i = 0;i < maxValue;i++){
      mult[i] = [];
    for(let j = 0;j < maxValue;j++){
        mult[i][j] = 1;
    }
  }
  for(let i = 0;i < maxValue;i++){
    for(let j = 0;j < maxValue;j++){
      if(i == 0){
        mult[i][j] = j+1;
        multiply += mult[i][j] + " ";
      }else if(j == 0){
        mult[i][j] = i+1;
        multiply += mult[i][j] + " ";
      }else{
        multiply += mult[0][j] * mult[i][0] + " ";
      }
    }
    multiply += "\n";
  }
  return multiply;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));