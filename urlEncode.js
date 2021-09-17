//https://gist.github.com/meghalshah210/5e474bdc3f2a8e9db8f69b7345ad2fb3
const urlEncode = function(text) {
  let start = 0;
  let letters = text.split('');
  for(let i = start;i < letters.length;i++){
    if(letters[i] === ' ' && i === 0){
      letters.shift();
    }
    if(letters[i] === ' ' && i !== letters.length-1){
      letters[i] = "%20";
    }
  }
  return letters.join('');
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));