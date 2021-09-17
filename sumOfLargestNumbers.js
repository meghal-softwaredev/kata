//https://gist.github.com/meghalshah210/850f2280d2961aa66485c5bc8d17d4f9
//https://gist.github.com/meghalshah210/850f2280d2961aa66485c5bc8d17d4f9 - latest
const sumLargestNumbers = function(data) {
  let largest = Math.max(...data); 
  for(let i=0;i<data.length;i++){
    if(data[i] === largest){
      data.splice(i,1);
    }
  }
  let large = Math.max(...data);
  let sum = largest + large;
  return sum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));