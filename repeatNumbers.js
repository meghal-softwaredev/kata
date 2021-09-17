//https://gist.github.com/meghalshah210/92e90a1a4f86e3f6ca1a6ec6cce2ffed
const repeatNumbers = function(data) {
  let num, repeat, final = '';
  for(let i = 0;i < data.length;i++){
    const [num, repeat] = [data[i][0],data[i][1]];
    for(let j = 0;j < repeat;j++){
      final += num;
    }
    if(i !== data.length-1){
      final += ', ';
    }
  }
  return final;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));