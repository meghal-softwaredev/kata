//https://gist.github.com/meghalshah210/7b309e5bc415cd7593bad5a60b0f8d5c
const numberOfVowels = function(data) {
  let sum=0;
  const letters = data.split('');
  for(let i=0;i<data.length;i++){
    if(letters[i] === 'a' || letters[i] === 'e' || letters[i] === 'i' ||letters[i] === 'o' || letters[i] === 'u'){
      sum++;
    }
  }
  return sum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));