//https://gist.github.com/meghalshah210/16a92a8ca42ffc922eb01f2f6f41e31c
const camelCase = function(input) {
  let firstChar = '', restChar = '';
  let words = input.split(' ');
  let camelCaseStr = '';
  for(let i = 0;i < words.length;i++){
    if(i !== 0){
      firstChar = words[i].charAt(0).toUpperCase();
    }else{
      firstChar = words[i].charAt(0).toLowerCase();
    }
    restChar = words[i].slice(1, words[i].length);
    camelCaseStr += firstChar + restChar;
  }
  return camelCaseStr;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));